'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    useername: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
