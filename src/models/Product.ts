export class Product {
    constructor (readonly id: number, readonly name: string, readonly price: number, readonly qty_stock: number) {
        this.id = id
        this.name = name
        this.price = price
        this.qty_stock = qty_stock
    }
}

export interface inputProductsOrderDTO {
    id: number,
    qty: number
}

export interface returnProductStockDTO {
    name: string,
    qty_stock: number
}