const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('orderline', {
    price:{
      type: DataTypes.DECIMAL,

    },
    quantity:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },

    product_name:{
      type: DataTypes.STRING
    },

    product_desc:{
      type: DataTypes.STRING
    }

  });
};
