'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      email: 'John@mail.com',
      password: '1234',
      name : 'John',
      lastname : 'Doe',
      directionOne : 'I am a',
      directionTwo: 'test',
      phone:'29663212',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
