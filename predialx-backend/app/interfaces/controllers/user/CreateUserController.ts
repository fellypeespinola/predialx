import { Request, Response, NextFunction } from 'express'
import { CreateUser } from '../../../application/use_cases/user/CreateUser'

type UserRequest = {
    name: string,
    email: string,
    password: string,
    access_level: string
}

export const CreateUserController = async (req : Request, res : Response, next : NextFunction) => {
    const { name, email, password, access_level } = req.body as UserRequest;

    try {
        const user = await CreateUser(name, email, password, access_level);

        res.json({success: true, data: user})
    } catch(err) {
        res.status(401).json({success: false, message: (err as Error).message})
    }
} 