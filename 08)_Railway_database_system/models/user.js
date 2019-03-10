'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmPass: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    email: DataTypes.STRING,
    security_quest: DataTypes.STRING,
    security_ans : DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};