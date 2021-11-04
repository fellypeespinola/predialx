
import { Request, Response, NextFunction } from 'express'
import { CountOrderByMonth } from '../../../application/use_cases/order/CountOrderByMonth'

type CountOrderRequestType = {
    month: Date
}

export const CountOrderByMonthController = async (req : Request, res : Response, next : NextFunction) => {
    const { month } = req.body as CountOrderRequestType;

    try {
        const order = await CountOrderByMonth(month);

        res.json({success: true, data: order})
    } catch(err) {
        res.status(401).json({success: false, message: (err as Error).message})
    }
} 