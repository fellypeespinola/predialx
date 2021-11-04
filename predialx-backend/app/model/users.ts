import { database } from '../infrastructure/database/db'
import { DataTypes, Model, Optional } from 'sequelize'

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    access_level: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

export const User = database.define<UserInstance>('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    access_level: {
        type: DataTypes.STRING,
        allowNull: false
    }
})