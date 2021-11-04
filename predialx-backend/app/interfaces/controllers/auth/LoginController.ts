import { Request, Response, NextFunction } from 'express'
import { CreateToken } from '../../../application/use_cases/auth/CreateToken'
import { FindUser } from '../../../application/use_cases/user/FindUser'
import { comparePassword } from '../../../application/helpers/comparePassword'

type LoginRequest = {
    email: string,
    password: string
}

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as LoginRequest

    try {
        const user = await FindUser(email)

        if (!user) throw new Error('User not find!')

        comparePassword(password, user.password, (err : any, result : boolean) => {
            if(err || !result) return res.status(401).json({ success: false, message: 'Password incorrect'})

            if(result) {
                const token = CreateToken(user)

                return res.json({ success: true, token: token, data: user })
            }
        });     
       
    } catch (err) {
        res.status(401).json({ success: false, message: (err as Error).message })
    }
}