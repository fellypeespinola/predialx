import { Request, Response, NextFunction } from 'express'

export const CheckAuthController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = res.locals.user;

        return res.json({ success: true, data: user });
       
    } catch (err) {
        res.status(401).json({ success: false, message: (err as Error).message })
    }
}