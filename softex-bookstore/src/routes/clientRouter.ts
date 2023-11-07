import { Router } from "express"
import ClientController from "../controller/client.controller"

const control = new ClientController()

export const clientRouter = Router()

clientRouter.get('/client', control.get.bind(control))
