require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, NODE_ENV
} = process.env;

// PARA LA BASE DE DATOS LOCAL
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//   logging: false,  //set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

// PARA LA BASE DE DATOS EN HEROKU
let sequelize =
  NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        //`postgres://ddfsfqpt:MMiwKYe-w1RY3arU4Vgbl9SIUWkEHi3Q@castor.db.elephantsql.com/ddfsfqpt`,
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

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
  Delivery,
  Help,
  Helpcategory
  // Post,
} = sequelize.models;

// Aca vendrian las relaciones
// Product <---> User (Para Cart) N:N
User.belongsToMany(Product, {through: Cart/* , foreignKey: 'productid'*/} )
Product.belongsToMany(User, {through: Cart/* , foreignKey: 'userid'*/} )

// Product <---> User (Para WishList) N:N
User.belongsToMany(Product, {through: 'WishList',as:"favourites", foreignKey: 'productid'} )
Product.belongsToMany(User, {through: 'WishList',as:"favourites", foreignKey: 'userid'} )

// Product <---> User (Para las Reviews) N:N
// Product.belongsToMany(User, {through: Review/*, foreignKey: 'productid'*/});
// User.belongsToMany(Product, {through: Review/* , foreignKey: 'userid'*/});

// Product <---> Order N:N
Product.belongsToMany(Order, {through: Detail, foreignKey: 'productid'});
Order.belongsToMany(Product, {through: Detail, foreignKey: 'orderid'});

// Product <---> Category N:N
Product.belongsToMany(Category, {through: "products_category", timestamps: false/* , foreignKey: 'productid'*/} );
Category.belongsToMany(Product, {through: "products_category", timestamps: false/* , foreignKey: 'categoryid'*/} );

// Product <--- Brand N:1
Brand.hasMany(Product);
Product.belongsTo(Brand);

// USER REVIEW
Product.belongsToMany(User, {through: Review, as: 'reviews', foreignKey: 'productid'});
User.belongsToMany(Product,{through: Review, as: 'reviews', foreignKey: 'userid'});

Product.belongsToMany(User, {through: 'product_suscription', as: 'suscriptions', foreignKey: 'productid'});
User.belongsToMany(Product,{through: 'product_suscription', as: 'suscriptions', foreignKey: 'userid'});

// User ---> Order 1:N
User.hasMany(Order);
Order.belongsTo(User);

// Delivery ---> Order 1:N
Delivery.hasMany(Order);
Order.belongsTo(Delivery);

// Help <--- HelpCategory N:1
Helpcategory.hasMany(Help,{foreignKey:"HelpcategoryId"});
Help.belongsTo(Helpcategory);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
