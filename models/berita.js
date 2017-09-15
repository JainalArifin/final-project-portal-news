'use strict';
module.exports = function(sequelize, DataTypes) {
  var Berita = sequelize.define('Berita', {
    judulBerita: DataTypes.STRING,
    isiBerita: DataTypes.TEXT,
    gambar: DataTypes.TEXT,
    CategoryId: DataTypes.INTEGER
  });

  Berita.associate = (models) =>{
    Berita.belongsTo(models.Category, {foreignKey: 'CategoryId'})
    Berita.belongsToMany(models.Comment, {
      through: 'beritaComment'
    })
    Berita.hasMany(models.beritaComment)
  }

  return Berita;
};
// Teacher.associate = function(models) {
//    Teacher.belongsTo(models.Subject,{foreignKey: 'subjectsId'})
//  }
