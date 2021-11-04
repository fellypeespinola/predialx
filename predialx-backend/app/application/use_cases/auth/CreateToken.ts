import moment from "moment";
import jwt from "jwt-simple";
import { SECRET } from "../../../infrastructure/constants/configs";

export const CreateToken = (user: any) => {

    if(!user) return

    const userPayload = { id: user.id, name: user.name, email: user.email, access_level: user.access_level };

    const payload = { sub: userPayload, exp: moment().add(3, 'h') };

    const token = jwt.encode(payload, SECRET);

    return token
}