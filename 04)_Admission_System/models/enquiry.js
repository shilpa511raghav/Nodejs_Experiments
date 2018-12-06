'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enquiry = sequelize.define('Enquiry', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fatherName: {
      type: DataTypes.STRING
    },
    enqDate: DataTypes.DATE,
    // courseId: {
    //   type: DataTypes.ENUM('C','CPP','JAVA','NODEJS','PHP'),
    //   allowNull: false
    // },
    courseId: {
      type: DataTypes.INTEGER
      //get course using courseId from coursetable
    },
    remarks: DataTypes.STRING,
    status: DataTypes.ENUM('OPEN', 'CLOSE', 'DELETED'),
  }, {});
  Enquiry.associate = function(models) {
    // associations can be defined here
  };
  return Enquiry;
};