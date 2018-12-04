'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enquiries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      fatherName:{
        type:Sequelize.STRING
      },
      enqDate: {
        type: Sequelize.DATE
      },
      course: {
        type: Sequelize.ENUM('C','CPP','JAVA','NODEJS','PHP'),
        allowNull:false
      },
      courseId: {
        type: Sequelize.INTEGER

        // references: {
        //   // This is a reference to another model
        //   model: Course,

        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
      },
      remarks: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Enquiries');
  }
};