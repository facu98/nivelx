const { DataTypes } = require('sequelize');

// Creacion del modelo de Reviews
module.exports = (sequelize) => {
    sequelize.define('review',{
        /* Calificacion del producto por sistema de 5 estrellas*/
        stars: {
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false,
        },
        // Titulo del review
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: false,
            },
        },
        //Descrpcion del review
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: false,
            },
        }, 
    });
}