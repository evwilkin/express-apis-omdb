'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.describeTable('comments')
    .then(function(attributes) {
      {
        favoriteId: {
          type: 'INTEGER'
        }
      }
    })
  },

  down: function (queryInterface, Sequelize) {
  queryInterface.describeTable('comments')
  .then(function(attributes) {
      {
        favoriteId: {
          type: 'TEXT'
        }
      }
    })
  }
};
