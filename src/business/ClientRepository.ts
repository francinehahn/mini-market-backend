import { Client } from "../models/Client"


export interface ClientRepository {
    createClient (newClient: Client): Promise<void>
    getAllClients (): Promise<Client[] | []>
    getClient (column: string, value: string): Promise<Client | undefined>
}