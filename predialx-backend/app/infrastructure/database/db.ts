import { Sequelize } from "sequelize"

export const database = new Sequelize('predialx', 'predialuser', 'predialpass', {
    host: process.env.MYSQL_HOST,
    dialect: 'mariadb'
  });

