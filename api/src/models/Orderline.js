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
      type: DataTypes.TEXT
    },

    product_desc:{
      type: DataTypes.TEXT
    },
    product_img:{
      type:DataTypes.ARRAY(DataTypes.STRING)
    }

  });
};
