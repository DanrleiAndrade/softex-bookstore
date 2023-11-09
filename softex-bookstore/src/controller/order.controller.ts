import { NextFunction, Request, Response } from "express";
import OrderService from "../services/order.service";

class OrderController{
    private service = new OrderService();

    async getOrders(req: Request, res: Response, next: NextFunction){
        try{
            const {status, message} = await this.service.getOrders();
            res.status(status).json(message);
        }catch(e){
            next(e);
        }
    }
    
    /*async getOrderById(req: Request, res: Response, next: NextFunction){
        try{
            const {status, message} = await this.service.getOrderById();
            res.status(status).json(message);
        }catch(e){
            next(e);
        }
    }*/

    async deleteAll(req: Request, res: Response, next: NextFunction){
        try{
            const {status, message} = await this.service.deleteAll();
            res.status(status).json(message);
        }catch(e){
            next(e);
        }
    }

    /*async deleteById(req: Request, res: Response, next: NextFunction){
        try{
            const {status, message} = await this.service.deleteById();
            res.status(status).json(message);
        }catch(e){
            next(e);
        }
    }*/

    /*async updateById(req: Request, res: Response, next: NextFunction){
        try{
            const {status, message} = await this.service.updateById();
            res.status(status).json(message);
        }catch(e){
            next(e);
        }
    }*/

    /*async post(req: Request, res: Response, next: NextFunction){
        try{
            const {status, message} = await this.service.post();
            res.status(status).json(message);
        }catch(e){
            next(e);
        }
    }*/

export default OrderController;