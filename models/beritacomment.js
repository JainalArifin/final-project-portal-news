'use strict';
module.exports = function(sequelize, DataTypes) {
  var beritaComment = sequelize.define('beritaComment', {
    BeritaId: DataTypes.INTEGER,
    CommentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beritaComment;
};