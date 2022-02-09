require('dotenv').config();
const {SERVER} = process.env;
function mailChangeStatusOrder(status,orderid){
  var variable = `
  <head>
  <style>
    html {
        box-sizing: border-box;
        font-family: "Noto Sans";
      }

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0px 0px;
        margin: 0 auto;
        position: relative;
        width: 600px;
        background: #ffffff;
      }



      .div__logo {
        position: relative;
        width: 100%;
        height: 200px;
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
        color: #000000;
        height: 400px;
      }
      .logo img {
        width: 100%;
        display: block;
        height: 300px;
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
        order: 1;
        flex-grow: 0;
        margin: 0 0 1rem;
      }

      .img_container {
        position: absolute;
        width: 504px;
        height: 360px;
        left: 0px;
        top: 0px;

        background: url(.png);
      }

      .img {
        position: static;
        width: 504px;
        height: 361px;
        left: 20px;
        top: 93px;
        background: #fff0f0;
        border-radius: 20px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 1;
        margin: 24px 0px;
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
        flex: none;
        align-self: stretch;
        flex-grow: 0;
        margin: 10px 0px;
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

      .status {
        margin: 2rem 0 0;
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        width: 80%;
        margin: 0 auto;
      }

      .status img {
        width: 50%;
        height: auto;
      }

      .status-article * {
        margin: 0.5rem 0;
      }
      .main-title {
        margin-top: 7rem;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <div>
      <header class="div__logo">
        <div class="logo">
          <img src="https://i.ibb.co/2yhTKMP/Tech.png" alt="logo" />
        </div>
      </header>
      <h1 class="main-title">Estado de la Orden</h1>
      <center><span>A continuación se presenta el estado actual s de su pedido</span></center>
      <div class="status">
        <img src="https://browntape.com/wp-content/uploads/2017/09/bb.png" alt="status" />
        <article class="status-article">
          <h2>${status}</h2>`
          
          //DEFINIENDO MENSAJE DE ACUERDO AL STATUS
          if(status==="Processing")
            variable+=`<p>
              Estamos esperando por alguien que tome tu orden en nuestras oficinas
            </p>`
          if(status==="Send")
            variable+=`<p>
              Tu pedido se encuentra en camino, muchas gracias por tu preferencia
            </p>`
          if(status==="cancelled")
            variable+=`<p>
              Lamentamos que hayas cancelado tu pedido, esperamos que vuelvas pronto, gracias por tu preferencia
            </p>`
          if(status==="Completed")
            variable+=`<p>
              Tu orden ha sido entregada de forma correcta, que disfrutes de tu pedido, ,Techcommerce agradece tu preferencia
            </p>`
          
          
          variable+= `<a class="btn__" href="${SERVER}orders/${orderid}">Ver orden</a>
        </article>
      </div>
      <!-- <container class="mail">
        <div class="">
          <img
            class="img"
            src="./pics/friendDesign.svg"
            alt="welcome photo"
            height="50%"
          />
        </div>
        <div class="text">
          Si ya paso mas de 1 hora y el estado de la orden sigue siendo el mismo porfavor contate al soporte tecnico y con gusto lo estaremos ayudando.
        </div>
        <button class="btn__">Contactar</button>
      </container> -->
      <hr />
      <footer class="footer">
        <p class="footer-main-text">Techcommerce agradece su preferencia, que disfrute de su compra</p>
        
        <div class="footer-img-container">
          <img src="https://p1.hiclipart.com/preview/1016/686/474/mitu-icon-twitter-png-clipart.jpg" alt="twiter" />
          <img src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2021/06/logo-instagram-icon.png?fit=512%2C512&ssl=1" alt="instagram" />
          <img src="https://w7.pngwing.com/pngs/982/799/png-transparent-youtube-logo-youtube-logo-internet-marketing-subscribe-television-label-text.png" alt="youtube" />
        
        </div>
        <div class="footer-text-container">
          <p>© 2022</p>
        </div>
      </footer>
    </div>
  </body>
  `;

  return variable;
}

module.exports={
  mailChangeStatusOrder
}