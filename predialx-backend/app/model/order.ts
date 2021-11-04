import { database } from '../infrastructure/database/db'
import Sequelize, { DataTypes } from 'sequelize'
import { User } from './users'

export const Order = database.define('order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: true
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: Sequelize.DATE,
})

Order.belongsTo(User, {as: 'creator'})
Order.belongsTo(User, {as: 'collaborator'})