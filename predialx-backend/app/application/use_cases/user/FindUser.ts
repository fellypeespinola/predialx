import { User } from '../../../model/users';

export const FindUser = async (
    email: string
    ) => {

    try {
        const user = await User.findOne({ where: { email: email }});

        return user

    } catch (err) {
        throw err
    }
}