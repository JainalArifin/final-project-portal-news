'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    nameCategory: DataTypes.STRING
  });

  Category.associate = (models) =>{
    Category.hasMany(models.Berita, {foreignKey:'CategoryId'})
  }
  return Category;
};

// Subject.associate = function(models) {
//    Subject.hasMany(models.Teacher, {foreignKey: 'subjectsId'})
//  }
