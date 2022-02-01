import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvaibleUseCase = new FindAllAvailableUseCase();

    const deliveries = await findAllAvaibleUseCase.execute();

    return response.json(deliveries);
  }
}
