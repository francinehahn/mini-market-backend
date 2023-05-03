import { ClientRepository } from "../business/ClientRepository"
import { CustomError } from "../errors/CustomError"
import { Client } from "../models/Client"
import BaseDatabase from "./BaseDatabase"


export class ClientDatabase extends BaseDatabase implements ClientRepository {
    TABLE_NAME = "MiniMarket_Clients"
    
    createClient = async (newClient: Client): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME).insert(newClient)
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getAllClients = async (): Promise<Client[] | []> => {
        try {
            return await BaseDatabase.connection(this.TABLE_NAME).select()
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getClient = async (column: string, value: string): Promise<Client | undefined> => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME).select().where(column, value)
            return result[0]
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}