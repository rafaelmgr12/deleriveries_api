import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { Router } from "express";
import { CreateClienteController } from "./modules/client/useCase/createClient/CreateClienteController";
import { AuthenticateDeliverymanController } from "modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";

const routes = Router();

const createClienteController = new CreateClienteController();
const createDeliverymanUseCase = new CreateClienteController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post(
  "deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post("/deliveryman/", createDeliverymanUseCase.handle);
routes.post("/client/", createClienteController.handle);

export { routes };
