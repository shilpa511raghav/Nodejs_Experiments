'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admission = sequelize.define('Admission', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    
    course: {
      type: DataTypes.ENUM('C', 'CPP', 'JAVA', 'NOSEJS', 'PHP'),
      allowNull: false
    },
    admissionDate: {
      type: DataTypes.DATE
    },
    status: DataTypes.ENUM('OPEN','CLOSE','DELETED'),

    enqId: {
      type: DataTypes.INTEGER
    },
    courseId:{
      type: DataTypes.INTEGER
    }
  }, {});
  Admission.associate = function(models) {
    // associations can be defined here
  };
  return Admission;
};