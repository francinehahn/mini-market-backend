import { Request, Response } from "express"
import { ClientDatabase } from "../database/ClientDatabase"


export async function getAllClients (req: Request, res: Response) {
    let errorCode = 400

    try {
        const clients = new ClientDatabase()
        const result = await clients.getAllClients()
        
        res.status(200).send(result)

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}