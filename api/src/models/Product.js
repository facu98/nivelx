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
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ['Color unico']
    },
    asessment: {
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    category: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    totalScore:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalReviews:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
};

//Funcion para verificar stock

// Product.prototype.inStock = function (quantity = this.quantity, stock= this.stock) {
//   if(quantity > 0){
//     return stock = true;
//   } else {
//     return stock = false;
//   }
// };
