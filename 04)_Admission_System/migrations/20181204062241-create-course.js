'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courseName: {
        type: Sequelize.ENUM('C','CPP','JAVA','NODEJs','PHP'),
        allowNull:false
      },
      fees: {
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.INTEGER
      },
      durationType: {
        type: Sequelize.ENUM('DAYS','MONTHS','YEARS')
      },
      enqId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('OPEN','CLOSE','DELETED')
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
    return queryInterface.dropTable('Courses');
  }
};