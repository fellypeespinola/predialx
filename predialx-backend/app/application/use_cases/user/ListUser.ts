import { User } from '../../../model/users';

export const ListUser = async (access_level?: string) => {

    try {
        let filter = {}

        if (access_level) filter = { ...filter, access_level }

        const users = await User.findAll({
            where: filter
        });

        return users

    } catch (err) {
        throw err
    }
}