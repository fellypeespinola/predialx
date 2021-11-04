import { Request, Response, NextFunction } from 'express'
import { CreateOrder } from '../../../application/use_cases/order/CreateOrder'

type OrderRequest = {
    description: String,
    latitude: String,
    longitude: String
}

export const CreateOrderController = async (req : Request, res : Response, next : NextFunction) => {
    const { description, latitude, longitude } = req.body as OrderRequest;

    const creatorId = res.locals.user.id;

    try {
        const order = await CreateOrder(description, latitude, longitude, creatorId);

        res.json({success: true, data: order})
    } catch(err) {
        res.status(401).json({success: false, message: (err as Error).message})
    }
} 