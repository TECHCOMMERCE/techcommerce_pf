const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function SendEmails(to, subject, html, sandboxMode = false){    
  const msg = {
    to, 
    from: 'fernandolba.uiux@gmail.com',
    subject: `${subject}`,
    html: `${html}`,
    mail_settings: {
        sandbox_mode: {
            enable: sandboxMode  //para que no cobre
        }
    }
  };
  try{
    sgMail.send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log("Email enviado")
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(msg)
  } catch (error) {
    console.log(error)
  }
}

module.exports ={
    SendEmails
}
