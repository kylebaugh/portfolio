const nodemailer = require('nodemailer')

const {emailUser, emailPass} = process.env

module.exports = {
    sendEmail: async(req, res) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
                user: emailUser,
                pass: emailPass
            }
        })

        const {name, email, message} = req.body
        
        console.log(name, email, message)

        let info ={
            from:'kyle.devmountain@gmail.com',
            to: 'kyle.baugh@devmounta.in',
            subject: 'Portfolio Request',
            text: `New Portfolio Request
            
            Name: ${name}
            Email: ${email}
            Message: ${message}
            `
        }
        transporter.sendMail(info, function(error, info){
            if(error){
                console.log(error)
                console.log('send mail error')
            }else{
                console.log('Email sent' + info.response)
            }
        })
        res.status(200).send(res.data)

    }
    
}