'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [ {

   name: "Smartphones",
   description: "Mira nuestra sección smartphones, ¡de seguro alguno te llevas!",
   createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Audio",
   description: "Dejate llevar por la musica con nuestros productos de primera calidad",
   createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Notebooks",
   description: "Ya sea para estudiar, trabajar o simplemente por diversion, ¡tenemos una notebook para ti!",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Periféricos",
   description: "Monitores, teclados y mas...",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Gaming Zone",
   description: "¡En nuestra Gaming Zone encontraras todos los productos necesarios para ser siempre el mejor!",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Samsung",
   description: "Samsung",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Apple",
   description: "Apple",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Huawei",
   description: "Huawei",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Xiaomi",
   description: "Xiaomi",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Auriculares",
   description: "Auriculares",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Parlantes",
   description: "Parlantes",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Teclados",
   description: "Teclados",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Mouses",
   description: "Mouses",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Monitores",
   description: "Monitores",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Teclados y Mouses Gamer",
   description: "Teclados y Mouses Gamer",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "PCs Gamer",
   description: "PCs Gamer",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Notebooks Gamer",
   description: "Notebooks Gamer",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Accesorios",
   description: "Accesorios",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Consolas",
   description: "Consolas",
  createdAt : new Date(),
   updatedAt : new Date()
 },
 {
   name: "Videojuegos",
   description: "Videojuegos",
  createdAt : new Date(),
   updatedAt : new Date()
 }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {})
  }
};
