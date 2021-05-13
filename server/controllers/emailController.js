//import nodemailer
const nodemailer = require('nodemailer')

//import environment variables for your email
const { EMAIL_GMAIL, PASSWORD } = process.env

module.exports = {
  email: async (req, response) => {
    const { name, message, email } = req.body

    try {
      //invoke the createTransport function passing in your email information. 
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        // secureConnection: false, // TLS requires secureConnection to be false
        // port: 587, // port for secure SMTP
        auth: {
          user: EMAIL_GMAIL,
          pass: PASSWORD, 
        }
      });

      //invoke the sendMail function with the info in the email
      let info = await transporter.sendMail({
        from: `'${name}' <${email}>`, //This will show up when you go into the email
        to: EMAIL_GMAIL,
        subject: 'Etchit Pro', //This will show on the subject of the emailRS
        text: message, //for clients with plaintext support only
        html: `<div>${message}<div> 
              <img src="cid:unique@nodemailer.com"/>`,
        attachments: [
          { //this is the attachment of the document
            filename: 'license.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
          },
          { //this is the embedded image
            cid: 'unique@nodemailer.com', //same cid value as in the html img src
            // path:image
          }
        ]
      }, (err, res) => {
        if (err) {
          console.log('err', err)
        } else {
          console.log('res', res)
          console.log('it works')
          response.status(200).send(info)
        }
      })
    } catch (err) {
      console.log(err)
      res.sendStatus(500)
    }
  }
}