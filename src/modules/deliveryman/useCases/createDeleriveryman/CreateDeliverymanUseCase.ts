import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanExist = await prisma.deleveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });
    if (deliverymanExist) {
      throw new Error("Deliveryman Already Exist");
    }

    const hashPassword = await hash(password, 10);

    const deleveryman = await prisma.deleveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });
    return deleveryman;
  }
}
