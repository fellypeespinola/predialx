import { Router } from 'express'
import { LoginController } from '../controllers/auth/LoginController'

const publicRoutes = Router()

publicRoutes.post('/auth/login', LoginController)

export default publicRoutes