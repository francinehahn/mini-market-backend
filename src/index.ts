import { app } from "./app"
import { createClient } from "./endpoints/createClient"
import { createOrder } from "./endpoints/createOrder"
import { getAllClients } from "./endpoints/getAllClients"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getStock } from "./endpoints/getStock"


//Get All Clients
app.get("/clients", getAllClients)

//Create client
app.post("/clients", createClient)

//Create order
app.post("/orders", createOrder)

//Get All Products
app.get("/products", getAllProducts)

//Get Stock
app.get("/products/stock", getStock)