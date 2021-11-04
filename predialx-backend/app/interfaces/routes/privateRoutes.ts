import { Router } from 'express'
import { CreateUserController } from '../controllers/user/CreateUserController'
import { ListUserController } from '../controllers/user/ListUserController'
import { CreateOrderController } from '../controllers/order/CreateOrderController'
import { ListOrderController } from '../controllers/order/ListOrderController'
import { CountOrderByMonthController } from '../controllers/order/CountOrderByMonthController'
import { CheckAuthController } from '../controllers/auth/CheckAuthController'
import { AutheticationMiddleware } from '../../application/middlewares/AutheticationMiddleware'

const privateRoutes = Router()

privateRoutes.use(AutheticationMiddleware)

privateRoutes.get('/auth/login/check', CheckAuthController)
privateRoutes.post('/user/create', CreateUserController)
privateRoutes.post('/user/list/all', ListUserController)
privateRoutes.post('/order/create', CreateOrderController)
privateRoutes.post('/order/count/bymonth', CountOrderByMonthController)
privateRoutes.post('/order/list/all', ListOrderController)

export default privateRoutes