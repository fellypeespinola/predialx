import { Request, Response, NextFunction } from 'express'
import { ListOrder } from '../../../application/use_cases/order/ListOrder'

type ListRequestType = {
    creatorId?: number,
    collaboratorId?: number,
    startDate?: Date,
    endDate?: Date
}

export const ListOrderController = async (req : Request, res : Response, next : NextFunction) => {
    try {

        const { creatorId, collaboratorId, startDate, endDate } = req.body as ListRequestType;

        const orders = await ListOrder(creatorId, collaboratorId, startDate, endDate);

        res.json({success: true, data: orders})
    } catch(err) {
        res.status(401).json({success: false, message: (err as Error).message})
    }
} 