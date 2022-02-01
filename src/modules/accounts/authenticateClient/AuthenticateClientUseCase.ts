import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";
interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or Password invalid");
    }
    const passwordMatch = await compare(password, client.password);
    if (!passwordMatch) {
      throw new Error("Username or Password invalid");
    }
    const token = sign({ username }, "76f95b8681533bf0c4223a7450d3ad4a", {
      subject: client.id,
      expiresIn: "1d",
    });
    return token;
  }
}
