const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('user', {            // definiendo el modelo de User
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
          type: DataTypes.STRING,
          get() {
              return () => this.getDataValue('password')
          }
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    directionOne: {
        type: DataTypes.STRING
    },
    directionTwo: {
        type: DataTypes.STRING,

    },
    phone: {
        type: DataTypes.STRING
    },
    isAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
    salt: {
        type: DataTypes.STRING,
        get() {
            return() => this.getDataValue('salt')
        }
    },
    google: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    }
  });
};
