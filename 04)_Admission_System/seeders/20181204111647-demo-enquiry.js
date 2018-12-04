'use strict';
var dated = new Date;
module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Enquiries', [{
      firstName: "shilpa",
      lastName: "raghav",
      fatherName: "Suresh Raghav",
      enqDate: "2018-11-20",
      course: "NODEJS",
      courseId: "4",
      remarks: "tyy",
      status: "OPEN",
      createdAt: dated,
      updatedAt : dated
      },
      {
        firstName: "surbhi",
        lastName: "Negi",
        fatherName: "Shivam Negi",
        enqDate: "2018-11-20",
        course: "PHP",
        courseId: "2",
        remarks: "tyy",
        status: "CLOSED",
        createdAt: dated,
        updatedAt: dated
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Enquiries', null, {});
    
  }
};


