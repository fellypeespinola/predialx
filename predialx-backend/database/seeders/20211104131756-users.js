'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Coordenador',
      email: 'coordenador@predialx.com',
      password: bcrypt.hashSync("123456", 10),
      access_level: 'coordenador'
    },
    {
      id: 2,
      name: 'Colaborador',
      email: 'colaborador@predialx.com',
      password: bcrypt.hashSync("123456", 10),
      access_level: 'colaborador'
    },
    {
      id: 3,
      name: 'Cliente',
      email: 'cliente@predialx.com',
      password: bcrypt.hashSync("123456", 10),
      access_level: 'cliente'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
