require('dotenv').config();
const {SERVER} = process.env;
function mailOrder(productsInfo,orderid, totalPrice ){
  var variable = `

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Raleway:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <style>
    
        /* Logo  header*/
  
        .div__logo {
          position: relative;
          width: 100%;
          height: 50px;
        }
  
        .logo__box {
          
          background-color: #ffffff;
          position: absolute;
          height: 50px;
          width: 80%;
          transform: translateX(12.5%);
          bottom: 0;
          z-index: 100;
        }
  
        .logo__box_up {
          background-color: #ffffff;
          padding: 2rem;
          position: absolute;
          width: 500px;
          height: 5px;
        }
        
        .logo {
          margin: 0 auto;
          width: 80%;
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 49px;
          /* identical to box height */
          color: #000000;
          height: 400px;
        }
        .logo img {
          width: 100%;
          display: block;
          height: 100px;
          object-fit: contain;
        }
  
        
        .mail {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          width: 100%;
          height: 636px;
  
          
          border: 5px;
          border-color: rgba(182, 65, 65, 0.725);
          flex: none;
          /* order: 1; */
          flex-grow: 0;
          margin: 3rem 0 0;
        }
  
       
        .title {
          position: static;
          width: 504px;
          left: calc(50% - 504px / 2);
          top: 3.14%;
          bottom: 89.15%;
  
         
  
          font-family: "Noto Sans", sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 49px;
          /* identical to box height */
  
          text-align: center;
  
          color: #000000;
  
          
  
          flex: none;
          order: 0;
          align-self: stretch;
          flex-grow: 0;
          margin: 24px 0px;
        }
  
        .text {
          
  
          position: static;
          width: 504px;
          left: calc(50% - 504px / 2);
          top: 75.16%;
          bottom: 13.52%;
  
          
  
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: normal;
          font-size: 19px;
          line-height: 24px;
          
  
          text-align: center;
  
          color: #000000;
  
          /* Inside auto layout */
  
          flex: none;
          /* order: 2; */
          align-self: stretch;
          flex-grow: 0;
          margin: 10px 0px;
        }
  
        /* img section inside container */
        .img_container {
          position: absolute;
          width: 504px;
          height: 360px;
          left: 0px;
          top: 0px;
  
          background: url(.png);
        }
  
        .img {
          /* heroContainer */
  
          position: static;
          width: 504px;
          height: 361px;
          left: 20px;
          top: 93px;
          background: #FFFB9A;
  
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 1;
          margin: 24px 0px;
        }
  
        .btn__ {

  
          padding: 13px;
  
          width: 97px;
          height: 42px;
          left: 223.5px;
          top: 574px;
  
          background: #ffffff;
          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 4px;
  

  
          margin: 10px 0px;
          cursor: pointer;
          transition: background-color 0.5s ease-in, color 0.5s ease-in;
        }
  
        .btn__:hover {
          background-color: #000;
          color: #fff;
        }
        .footer {
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
        }
  
        .footer-main-text {
          font-size: 20px;
          margin: 5px 0 10px;
        }
  
        .footer-img-container,
        .footer-text-container {
          display: flex;
          gap: 20px;
        }
        .footer-img-container {
          gap: 4rem;
        }
  
        .footer-img-container img {
          margin: 20px 0;
          width: 40px;
          height: 40px;
        }
  
        .footer-text-container p {
          font-size: 16px;
          margin: 0;
        }
  
        .footer-text-container {
          flex-direction: column;
        }
  
        .footer-logo {
          font-size: 25px;
          font-weight: bold;
        }
  
        .table {
          margin: 2rem auto;
          text-align: center;
          table-layout: fixed;
          width: 100%;
          border-collapse: collapse;
        }
  
        .table tr td {
          padding: 1rem;
        }
  
        .product {
          text-align: center;
          margin: 1rem 0;
        }
        .product-container {
          display: flex;
          justify-content: space-between;
          width: 100%;
          text-align: center;
        }
  
        .product-img p {
          font-weight: bold;
  
        }
        .product-img img{
          background-color: #E2D4FF;
        }
      </style>
    
      <div>
        <header class="div__logo">
          <div class="logo">
        
           <img src="https://i.ibb.co/2yhTKMP/Tech.png" width="250px" alt="logo" />
          </div>
          
        </header>
        <container class="mail">
          <h1 class="title">Detalles de tu Orden</h1>
          <div class="text">
            Muchas Gracias por tu compra estimad@ Amig@! Aqui podras ver mas detalles sobre tu orden.
          </div>
          <div class="">
            <img
              class="img"
              src="https://tiendallave.com/wp-content/uploads/2021/06/tipos-de-clientes-de-ecommerce-1.png"
              alt="welcome photo"
              width="300px"
            />
          </div>
        </container>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>`
          for(let i = 0; i <productsInfo.length; i++)  {
            variable +=`
              <tr>
                <td><img src="${productsInfo[i].image}" width="70px"></td>
                <td>${productsInfo[i].name}</td>
                <td>${productsInfo[i].quantity}</td>
                <td>${productsInfo[i].price}</td>
              </tr>`
         }
         variable += `</tbody>
        </table>
        <hr />
  
        <div class="product">
          <div class="product-container">
            <div class="product-img">
              <h2>Total</h2>
            </div>
            <div class="product-img">
            <h2>${totalPrice}</h2>
            </div>
          </div>
          <a class="btn__" href="${SERVER}orders/${orderid}" target="_blank">ir orden</a>
        </div>
        <hr />
        <div class="footer">
          <p class="footer-main-text">Techcommerce</p>
          <p class="footer-main-text">Sigue nuestro contenido</p>
          <div class="footer-text-container">
            <p>Derechos reservados ©Techcommerce 2022</p>
          </div>
        </div>
      </div>
  `;

  return variable;
}

module.exports={
  mailOrder
}