'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Hamburguer',
        price: 25.90,
        menuId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pizza',
        price: 49.90,
        menuId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salada',
        price: 19.90,
        menuId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
