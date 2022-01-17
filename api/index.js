const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {GetProductsAPI} = require("./src/controllers/Products/GetProductsAPI");

server.listen(process.env.PORT||3001/* 5000 */,  () => {
  conn.sync({ force:  true }).then(() => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    GetProductsAPI();
  })
});