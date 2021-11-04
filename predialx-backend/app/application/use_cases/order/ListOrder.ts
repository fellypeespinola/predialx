import { Op } from 'sequelize';
import { Order } from '../../../model/order';
import { User } from '../../../model/users';

export const ListOrder = async (creatorId?: number, collaboratorId?: number, startDate?: Date, endDate?: Date) => {

    try {
        let filter = {};

        if (creatorId) filter = { ...filter, creatorId };
        if (collaboratorId) filter = { ...filter, collaboratorId };
        if (startDate && endDate) {
            filter = {
                ...filter,
                createdAt: {
                    [Op.lt]: endDate,
                    [Op.gt]: startDate
                }
            }
        }

        const order = await Order.findAll(
            {
                where: filter,
                include:
                    [{ model: User, as: "creator" }, { model: User, as: "collaborator" }]
            });

        return order

    } catch (err) {
        throw err
    }
}