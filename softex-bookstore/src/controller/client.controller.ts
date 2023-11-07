import { NextFunction, Request, Response } from "express"
import ClientService from "../services/client.service"


class ClientController{
    private service = new ClientService()

    async get(req: Request, res: Response, next: NextFunction){
        try{
            const {status, message} = await this.service.get()
            res.status(status).json(message)
        }catch(e){
            next(e)
        }
    }
}

export default ClientController