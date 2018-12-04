'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseName: DataTypes.STRING,
    fees: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    durationType: DataTypes.ENUM('days','months','years'),
    enqId: DataTypes.INTEGER,
    status: DataTypes.ENUM('open','close','deleted')
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};