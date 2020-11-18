const { DataTypes } = require('sequelize');
// Creacion del modelo de Reviews

module.exports = (sequelize) => {
    sequelize.define('review',{

        /* Calificacion del producto por sistema de 5 estrellas*/
        score: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  defaultValue: 1,
                  validate: {
                              min: 1,
                              max: 5
            			          },
  		         },
        // Titulo del review
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: false,
            },
        },
        //comentario del review
        comments: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: false,
            },
        },
    });
}
