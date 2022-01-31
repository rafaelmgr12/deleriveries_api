import { Router } from "express";
import { CreateClienteController } from "./modules/client/useCase/createClient/CreateClienteController";

const routes = Router();

const createClienteController = new CreateClienteController();

routes.post("/client/", createClienteController.handle);

export { routes };
