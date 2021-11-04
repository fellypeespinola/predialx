import { Request, Response, NextFunction } from 'express';
import { SECRET } from '../../infrastructure/constants/configs'
import jwt from 'jwt-simple'
import moment from 'moment'

export const AutheticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).send({ error: 'TokenMissing' });
    }

    let payload = null;

    try {
      payload = jwt.decode(token, SECRET);
    } catch (err) {
      return res.status(401).send({ error: 'TokenInvalid' });
    }

    if (moment().isAfter(moment(payload.exp))) {
      return res.status(401).send({ error: 'TokenExpired' });
    }

    res.locals.access_level = payload.sub.access_level;
    res.locals.user  = payload.sub;
    
    next();
};