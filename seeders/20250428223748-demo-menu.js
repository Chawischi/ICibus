'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Menus', [
      {
        name: 'Menu Principal',
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Menu Executivo',
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Menus', null, {});
  }
};
