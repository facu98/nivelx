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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pictures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ['Color unico']
    },
    asessment: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  });
};

// Otra posible forma para categorias...
// type: DataTypes.ARRAY(DataTypes.ENUM('a definir', 'another value')) 