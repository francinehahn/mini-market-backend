export class Product {
    constructor (
        private id: number, private name: string, private price: number, private qty_stock: number
    ) {
        this.id = id
        this.name = name
        this.price = price
        this.qty_stock = qty_stock
    }
}