const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const loadDataFromApi = require("./src/controllers/Products/LoadDataFromApi");
// const {GetProductsAPI} = require("./src/controllers/Products/GetProductsAPI");

const {User} = require("./src/db");

server.listen(process.env.PORT||3001/* 5000 */,  () => {
  conn.sync({ force:  false }).then( async() => {
    
    // para crear un usuario admin automáticamente
    const [user, created] = await User.findOrCreate({
      where: { email:"admin@gmail.com", password:"admin123" },
      defaults: {
        type: "admin",
        name: "admin",
        lastname: "admin",
        email: "admin@gmail.com",
        password: "admin123"
      }
    });

    console.log('%s listening at 3001'); // eslint-disable-line no-console
    loadDataFromApi();
    // GetProductsAPI();
  })
});