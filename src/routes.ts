import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { Router } from "express";
import { CreateClienteController } from "./modules/client/useCase/createClient/CreateClienteController";

const routes = Router();

const createClienteController = new CreateClienteController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/client/", createClienteController.handle);
routes.post("/authenticate", authenticateClientController.handle);

export { routes };
