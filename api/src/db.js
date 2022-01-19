require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,  //set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
sequelize.authenticate().then(()=>console.log('conexion success')).catch(e=>console.log('conexion fail',e))
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Brand,
  Cart,
  Category,
  Detail,
  Order,
  Product,
  Review,
  User,
  WishList,
} = sequelize.models;

// Aca vendrian las relaciones
// Product <---> User (Para Cart) N:N
User.belongsToMany(Product, {through: Cart, foreignKey: 'productid'})
Product.belongsToMany(User, {through: Cart, foreignKey: 'userid'})

// Product <---> User (Para las Reviews) N:N
Product.belongsToMany(User, {through: Review, foreignKey: 'productid'});
User.belongsToMany(Product, {through: Review, foreignKey: 'userid'});

// Product <---> Order N:N
Product.belongsToMany(Order, {through: Detail, foreignKey: 'productid'});
Order.belongsToMany(Product, {through: Detail, foreignKey: 'orderid'});

// Product <---> Category N:N
Product.belongsToMany(Category, {through: "products_category"/* , foreignKey: 'productid'*/} );
Category.belongsToMany(Product, {through: "products_category"/* , foreignKey: 'categoryid'*/} );

// Product <--- Brand N:1
Brand.hasMany(Product, {foreignKey: "brandid"});
Product.belongsTo(Brand, {foreignKey: "brandid"});

// User ---> Order 1:N
User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
