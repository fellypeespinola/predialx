import { User } from '../../../model/users';
import { encryptPassword } from '../../helpers/encryptPassword';

export const CreateUser = async (name: string, email: string, password: string, access_level: string) => {

    try {
        const passwordHash = await encryptPassword(password);

        const user = await User.create({ name, email, password: passwordHash, access_level });

        return user;

    } catch (err) {
        throw err
    }
}