import BaseDatabase from "./BaseDatabase"


export class ClientDatabase extends BaseDatabase {
    TABLE_NAME = "MiniMarket_Clients"
    
    public async getAllClients () {
        return await super.getAll()
    }

    public async getClientById (id: number) {
        return await super.getById(id)
    }

    public async insertClient (item: any) {
        await super.insertInto(item)
    }
}