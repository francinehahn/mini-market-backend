export class Product {
    constructor (private id: number, private name: string, private price: number, private qtyStock: number) {
        this.id = id
        this.name = name
        this.price = price
        this.qtyStock = qtyStock
    }

    public getId () {
        return this.id
    }

    public getName () {
        return this.name
    }

    public getQtyStock () {
        return this.qtyStock
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