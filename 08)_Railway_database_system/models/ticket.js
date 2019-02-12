'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    train_no: DataTypes.INTEGER,
    booked_user: DataTypes.STRING,
    status: DataTypes.STRING,
    no_of_passengers: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};