"use strict";
const { faker } = require("@faker-js/faker");

const cases = [...Array(20)].map((cas) => ({
  daerah: faker.location.city(),
  total_kasus: faker.number.int({ min: 100, max: 300 }),
  status: faker.number.float({ max: 1, precision: 0.1 }),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cases', cases, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("cases", cases, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
