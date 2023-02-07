import { CustomError } from "./CustomError";


export class MissingDeliveryDate extends CustomError {
    constructor () {
        super(422, "Provide the delivery date.")
    }
}

export class InvalidDeliveryDate extends CustomError {
    constructor () {
        super(422, "Delivery date cannot be a date before today.")
    }
}

export class MissingProducts extends CustomError {
    constructor () {
        super(422, "Provide a list of products with the following information: {productid, qty}.")
    }
}

export class InvalidQuantity extends CustomError {
    constructor (public id: number, public qtyStock: number) {
        super(422, `The quantity of the product id ${id} exceeds the quantity in stock, which is ${qtyStock}.`)
    }
}
