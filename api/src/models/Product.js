const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    pictures: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    asessment: {
      type: DataTypes.STRING
    },
    firstCategory: {
      type: DataTypes.ENUM('a definir', 'another value')
    },
    secondCategory: {
      type: DataTypes.ENUM('a definir', 'another value')
    }
  });
};

// Otra posible forma para categorias...
// type: DataTypes.ARRAY(DataTypes.ENUM('a definir', 'another value')) 