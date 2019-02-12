'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      train_no: {
        type: Sequelize.INTEGER
      },
      train_name: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      departure_time: {
        type: Sequelize.TIME
      },
      arrival_time: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trains');
  }
};