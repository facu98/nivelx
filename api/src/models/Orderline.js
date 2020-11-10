const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('orderline', {
    price:{
      type: DataTypes.DECIMAL,
      allowNull:false
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:false
    }

  });
};
