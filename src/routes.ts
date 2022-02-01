import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCase/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeleriveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

const deliveryController = new CreateDeliveryController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post(
  "deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/client/", createClientController.handle);

routes.post("/delivery",ensureAuthenticateClient, deliveryController.handle);

export { routes };
