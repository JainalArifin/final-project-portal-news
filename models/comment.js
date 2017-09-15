'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    fusername: DataTypes.STRING,
    email: DataTypes.STRING,
    komentar: DataTypes.TEXT
  });

  Comment.associate = (models) =>{
    Comment.belongsToMany(models.Berita, {
      through: 'beritaComment'
    })
    Comment.hasMany(models.beritaComment)
  }
  return Comment;
};
