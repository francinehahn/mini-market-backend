import { Request, Response } from "express"
import { ClientBusiness } from "../business/ClientBusiness"


export class ClientController {
    constructor (private clientBusiness: ClientBusiness) {}

    createClient = async (req: Request, res: Response): Promise<void> => {
        try {
            const name = req.body.name

            await this.clientBusiness.createClient(name)
    
            res.status(201).send("Success! The client has been registered.")
    
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }


    getAllClients = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.clientBusiness.getAllClients()
            
            res.status(200).send(result)
    
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}