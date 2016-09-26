'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    name: DataTypes.STRING,
    stocked: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Item;
};