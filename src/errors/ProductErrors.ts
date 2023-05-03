import { CustomError } from "./CustomError"


export class ProductNotFound extends CustomError {
    constructor () {
        super(404, "Product not found.")
    }
}

export class NoProductsRegistered extends CustomError {
    constructor () {
        super(404, "No products have been registered yet.")
    }
}
