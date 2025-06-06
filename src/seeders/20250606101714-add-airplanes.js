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

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelnumber: 'Boeing 737',
        capacity: 300,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        modelnumber: 'Boeing 777',
        capacity: 400,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        modelnumber: 'Airbus A320',
        capacity: 350,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        modelnumber: 'Boeing 747',
        capacity: 320,
        createdat: new Date(),
        updatedat: new Date()
      },
      {
        modelnumber: 'Airbus A330',
        capacity: 150,
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
