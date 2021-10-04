const { request, response, query } = require('express');
const express = require('express')
const path = require('path')

const sequelize = require('./utils/database')
const app = express()
const vjsRoutes = require('./routes/videojuegos')


//MIDDLEWARE

        //-->recursos públicos
app.use(express.static(path.join(__dirname, 'public')))

        //--> procesar JSON
app.use(express.json())
app.use(express.urlencoded({extended:true}))

        //--> EJS
app.engine('html' , require('ejs').renderFile)

        // --> Añadir rutas
app.use('/videojuegos',vjsRoutes)

        


app.get("/prueba" , (req, res) => {
    res.send("Prueba de servidor funcionando")
})

app.listen(8082, ()=>{
    console.log("Online server. Port 8082")
})