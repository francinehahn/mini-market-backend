import { Request, Response } from "express"
import { Client } from "../database/Client"
import { ClientDatabase } from "../database/ClientDatabase"


export async function createClient (req: Request, res: Response) {
    let errorCode = 400

    try {
        const name = req.body.name

        if (!name) {
            errorCode = 422
            throw new Error("Provide the client name.")
        }

        const client = new Client(name)
        const clientDB = new ClientDatabase()
        await clientDB.insertClient(client)

        res.status(201).send("Success! The client has been registered.")

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}