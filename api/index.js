const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {GetProductsAPI} = require("./src/controllers/Products/GetProductsAPI");

const {User} = require("./src/db");

server.listen(process.env.PORT||3001/* 5000 */,  () => {
  //SETEO GENERAL
  conn.sync({ force: true }).then( async() => {
    //SETEO DE TABLAS
    conn.models.Product.sync({force: false});
    conn.models.Brand.sync({force: false});
    conn.models.Category.sync({force: false});
    conn.models.User.sync({force: false});
    conn.models.Cart.sync({force: false});
    conn.models.Order.sync({force: false});
    conn.models.Detail.sync({force: false});
    conn.models.Review.sync({force: false});
    conn.models.WishList.sync({force: false});

    // para crear un usuario admin automáticamente
    const [user, created] = await User.findOrCreate({
      where: { email:"admin@gmail.com", password:"admin123" },
      defaults: {
        type: "admin",
        name: "admin",
        lastname: "admin",
        email: "admin@gmail.com",
        password: "admin123",
        phone: 0,
        address: "-",
        country: "-",
        city: "-",
        postalcode: 0
      }
    });

    console.log('%s listening at 3001'); // eslint-disable-line no-console
     GetProductsAPI();
  })
});