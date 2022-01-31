import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deleveryman.findFirst({
      where: {
        username,
      },
    });
 
    if (!deliveryman) {
      throw new Error("Username of password invalid");
    }
    const passwordMatch = await compare(password, deliveryman.password);
    if (!passwordMatch) {
      throw new Error("Username or Password invalid");
    }

    const token = sign({ username }, "76f95b8681533bf0c3223a7450d3ad4a", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });
  }
}
