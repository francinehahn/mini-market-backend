import { app } from "./app"
import { clientRouter } from "./routes/clientRouter"
import { orderRouter } from "./routes/orderRouter"
import { productRouter } from "./routes/productRouter"

app.use("/clients", clientRouter)
app.use("/products", productRouter)
app.use("/order", orderRouter)
