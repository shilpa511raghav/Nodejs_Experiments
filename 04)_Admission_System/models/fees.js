'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fees = sequelize.define('Fees', {
    admissionId: DataTypes.INTEGER,
    paymentDate: DataTypes.DATE,
    amountPaid: DataTypes.INTEGER,
    amountPending: DataTypes.INTEGER,
    status: DataTypes.ENUM('OPEN','CLOSE','DELETED'),
    admissionId: {
      type: DataTypes.INTEGER
    },

  }, {});
  Fees.associate = function(models) {
    // associations can be defined here
  };
  return Fees;
};