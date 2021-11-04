import { Request, Response, NextFunction } from 'express'
import { ListUser } from '../../../application/use_cases/user/ListUser'

type ListRequestType = {
    access_level?: string
}

export const ListUserController = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const { access_level } = req.body as ListRequestType;

        const user = await ListUser(access_level);

        res.json({success: true, data: user})
    } catch(err) {
        res.status(401).json({success: false, message: (err as Error).message})
    }
} 