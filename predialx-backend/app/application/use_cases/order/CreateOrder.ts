import { Order } from '../../../model/order';

export const CreateOrder = async (
    description: String,
    latitude: String,
    longitude: String,
    creatorId: String
    ) => {

    try {
        const order = await Order.create({ description, latitude, longitude, creatorId });

        return order

    } catch (err) {
        throw err
    }
}