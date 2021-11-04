import moment from 'moment'
import sequelize, { Op } from 'sequelize';
import { Order } from '../../../model/order';

export const CountOrderByMonth = async (
    month: Date,
) => {

    try {
        const startOfMonth = moment(month).startOf('month').format();
        const endOfMonth = moment(month).endOf('month').format();

        const order = await Order.findAll({
            where: {
                createdAt: {
                    [Op.lt]: endOfMonth,
                    [Op.gt]: startOfMonth
                }
            },
            attributes: [
                [sequelize.literal(`createdAt`), 'date'],
                [sequelize.literal(`COUNT(*)`), 'count']
            ],
            group: ['createdAt'],
        });

        return order

    } catch (err) {
        throw err
    }
}