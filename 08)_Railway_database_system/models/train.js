'use strict';
module.exports = (sequelize, DataTypes) => {
  const Train = sequelize.define('Train', {
    train_no: DataTypes.INTEGER,
    train_name: DataTypes.STRING,
    source: DataTypes.STRING,
    destination: DataTypes.STRING,
    departure_time: DataTypes.TIME,
    arrival_time: DataTypes.TIME
  }, {});
  Train.associate = function(models) {
    // associations can be defined here
  };
  return Train;
};