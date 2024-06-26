require('dotenv').config()
const express = require('express')
const session = require('express-session')
const axios = require('axios')
// const massive = require('massive')
const path = require('path')

const {SERVER_PORT, SESSION_SECRET} = process.env

// const port = process.env.PORT || SERVER_PORT

const app = express()




// Controllers
const emailCtrl = require('./controllers/emailController')

// Create App Instance

// Top Level Middleware
app.use(express.json())
app.use(session({
    secret: 'j39fn1hjao3z93971va3n28x134j2nal0088',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))


app.listen(5240, () => {console.log(`Server connected on 5240.`)})

// Endpoints

// replaced with FormSubmit
// app.post('/message', emailCtrl.sendEmail)

// Server
// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

setInterval(() => {
    axios.get('https://formsubmit.co/confirm/a19a1eb85ff1460bbabdaefa4a471a81')
        .then((res) => {
            console.log(res.status)
        })
}, 8640000);