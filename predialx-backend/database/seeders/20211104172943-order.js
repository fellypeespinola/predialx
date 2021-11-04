'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [{
      description: 'Botões do elevador com defeito no condominio Alamedas',
      latitude: '-10.93618363821695',
      longitude: '-37.07863499142117',
      creatorId: 3,
      createdAt: new Date("2021-11-12T03:24:00")
    },
    {
      description: 'Parede precisando de pintura no Bloco Y',
      latitude: '-10.937546810766056',
      longitude: '-37.06645245458113',
      creatorId: 3,
      createdAt: new Date("2021-11-13T03:24:00")
    },
    {
      description: 'Parede precisando de pintura no Bloco Z',
      latitude: '-10.937546810766056',
      longitude: '-37.06645245458113',
      creatorId: 3,
      createdAt: new Date("2021-11-13T03:24:00")
    },
    {
      description: 'Piso solto na garagem do Bloco YX',
      latitude: '-10.94892325002672',
      longitude: '-37.076516101935574',
      creatorId: 3,
      createdAt: new Date("2021-11-17T03:24:00")
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('orders', null, {});
  }
};
