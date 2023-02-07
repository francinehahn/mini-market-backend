import express from 'express'
import { OrderBusiness } from '../business/OrderBusiness'
import { OrderController } from "../controller/OrderController"
import { ClientDatabase } from '../data/ClientDatabase'
import { OrderDatabase } from '../data/OrderDatabase'
import { ProductDatabase } from '../data/ProductDatabase'

export const orderRouter = express.Router()
const orderDatabase = new OrderDatabase()
const clientDatabase = new ClientDatabase()
const productDatabase = new ProductDatabase()
const orderBusiness = new OrderBusiness(orderDatabase, clientDatabase, productDatabase)
const orderController = new OrderController(orderBusiness)

orderRouter.post("/", orderController.createOrder)