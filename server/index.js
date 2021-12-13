require('dotenv').config()
const express = require('express')
const session = require('express-session')
// const massive = require('massive')
const path = require('path')

const {SERVER_PORT, SESSION_SECRET} = process.env

const port = process.env.PORT || SERVER_PORT

const app = express()

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})


// Controllers
const emailCtrl = require('./controllers/emailController')

// Create App Instance

// Top Level Middleware
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false, 
    saveUninitialized: true, 
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))


app.listen(port, () => {console.log(`Server connected on ${port}.`)})

// Endpoints

app.post('/message', emailCtrl.sendEmail)

// Server 
// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })