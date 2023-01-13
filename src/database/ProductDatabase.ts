import BaseDatabase from "./BaseDatabase"


export class ProductDatabase extends BaseDatabase {
    TABLE_NAME = "MiniMarket_Products"

    public async getAllProducts () {
        return await super.getAll()
    }

    public async getProductById (id: number) {
        return await super.getById(id)
    }

    public async updateStock (id: number, stock: number) {
        await BaseDatabase.connection(this.TABLE_NAME).where("id", id).update("qty_stock", stock)
    }
}