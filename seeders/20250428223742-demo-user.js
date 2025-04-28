'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        clerkId: 'clerk_001',
        email: 'user1@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clerkId: 'clerk_002',
        email: 'user2@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clerkId: 'clerk_003',
        email: 'user3@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
