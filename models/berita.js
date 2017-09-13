'use strict';
module.exports = function(sequelize, DataTypes) {
  var Berita = sequelize.define('Berita', {
    judulBerita: DataTypes.STRING,
    isiBerita: DataTypes.STRING,
    gambar: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Berita;
};