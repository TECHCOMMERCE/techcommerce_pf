const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mailSender = async (
  email,
  deliveryid,
  orderid,
  status,
  createdAt,
  sandboxMode = false
) => {
  const mailBody = `
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Raleway:wght@300;400;700&display=swap"
    rel="stylesheet"
  />
  <style>
    .table {
      margin: 2rem;
      text-align: left;
      table-layout: fixed;
      width: 100%;
      border-collapse: collapse;
    }

    .table th {
      padding: 1rem;
    }

    .table tr {
      padding: 1rem;
    }

    .table td{
      padding: 1rem;
    }

    .container {
      width: 100%;
    }
  </style>

  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>ID Envío</th>
          <th>ID Orden</th>
          <th>Estado del envío</th>
          <th>Fecha de compra</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${deliveryid}</td>
          <td>${orderid}</td>
          <td><strong>${
            (status === "In process" && "Procesando") ||
            (status === "Dispatched" && "Despachado") ||
            (status === "In transit" && "En camino") ||
            (status === "Delivered" && "Entregado")
          }</strong></td>
          <td>${createdAt}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `;

  const msg = {
    to: email, // Change to your recipient
    from: "fernandolba.uiux@gmail.com",
    // from: "notifications.henrecommerce@gmail.com",
    subject: `Estado del envío: ${deliveryid}`,
    // text: "and easy to do anywhere, even with Node.js",
    html: mailBody,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode, //para que no cobre
      },
    },
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = mailSender;
