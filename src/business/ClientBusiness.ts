import { DuplicateName, MissingName } from "../errors/ClientErrors"
import { CustomError } from "../errors/CustomError"
import { Client } from "../models/Client"
import { generateId } from "../services/generateId"
import { ClientRepository } from "./ClientRepository"


export class ClientBusiness {
    constructor (private clientDatabase: ClientRepository) {}

    createClient = async (name: string): Promise<void> => {
        try {
            if (!name) {
                throw new MissingName()
            }

            const clientExists = await this.clientDatabase.getClient("name", name)
            
            if (clientExists) {
                throw new DuplicateName()
            }

            const id = generateId()
            const newClient = new Client(id, name)

            await this.clientDatabase.createClient(newClient)
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }


    getAllClients = async (): Promise<Client[]> => {
        try {
            const result = await this.clientDatabase.getAllClients()

            if (result.length === 0) {
                throw new Error("No clients have been registered yet.")
            }

            return result
    
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}