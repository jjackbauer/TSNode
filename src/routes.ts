import { Router } from "express";
import userController from "./controllers/userController";
const routes = Router()

routes.get('/users', userController.index)
routes.post('/users', userController.store)

export default routes