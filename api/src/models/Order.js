const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {

    state:{
      type: DataTypes.ENUM('carrito', 'creada', 'procesando', 'cancelada', 'completa'),
      allowNull:false
    },

    date:{
      type: DataTypes.STRING,
      allowNull:false              //ACA TAMBIEN SE PUEDE USAR LA COLUMNA CreatedAt
    }
  });
};
