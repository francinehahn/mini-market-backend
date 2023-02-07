import express from 'express'
import { ClientBusiness } from '../business/ClientBusiness'
import { ClientController } from "../controller/ClientController"
import { ClientDatabase } from '../data/ClientDatabase'

export const clientRouter = express.Router()
const clientDatabase = new ClientDatabase()
const clientBusiness = new ClientBusiness(clientDatabase)
const clientController = new ClientController(clientBusiness)

clientRouter.get("/", clientController.getAllClients)
clientRouter.post("/", clientController.createClient)