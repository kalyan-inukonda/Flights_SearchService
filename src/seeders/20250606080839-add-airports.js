'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Alluri Sitarama Raju International Airport',
        cityId: 5,
        createdat: new Date(),
        updatedat: new Date
      },
      {
        name: 'Visakhapatnam International Airport',
        cityId: 5,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        name: 'Vijayawada International Airport',
        cityId: 13,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        name: 'Tirupati International Airport',
        cityId: 15,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        name: 'Rajahmundry Airport',
        cityId: 7,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        name: 'Uyyalawada Narasimha Reddy Airport',
        cityId: 17,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        name: 'Kadapa Airport',
        cityId: 14,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        name: 'Kempegowda International Airport',
        cityId: 12,
        createdat: new Date(),
        updatedat: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
