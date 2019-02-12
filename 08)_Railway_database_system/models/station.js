'use strict';
module.exports = (sequelize, DataTypes) => {
  const Station = sequelize.define('Station', {
    name: DataTypes.STRING,
    no: DataTypes.STRING,
    train_no: DataTypes.INTEGER,
    arrival_time: DataTypes.TIME,
    hault: DataTypes.INTEGER
  }, {});
  Station.associate = function(models) {
    // associations can be defined here
  };
  return Station;
};