'use strict';
module.exports = (sequelize, DataTypes) => {
  const passenger = sequelize.define('passenger', {
    Name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    pnr_no: DataTypes.INTEGER,
    seat_no: DataTypes.INTEGER,
    reservation_status: DataTypes.STRING
  }, {});
  passenger.associate = function(models) {
    // associations can be defined here
  };
  return passenger;
};