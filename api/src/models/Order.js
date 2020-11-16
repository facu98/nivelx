const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {

    state:{
      type: DataTypes.ENUM('carrito', 'creada', 'procesando', 'cancelada', 'completa'),
      allowNull:false
    },

  });
};
