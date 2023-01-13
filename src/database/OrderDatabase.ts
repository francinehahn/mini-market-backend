import BaseDatabase from "./BaseDatabase"


export class OrderDatabase extends BaseDatabase {
    TABLE_NAME = "MiniMarket_Orders"

    public async insertOrder (item: any) {
        await super.insertInto(item)
    }
}