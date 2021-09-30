const express = require('express')

const app = express()


app.get("/prueba" , (req, res) => {
    res.send("Prueba de servidor funcionando")
})

app.listen(8082, ()=>{
    console.log("Online server. Port 8082")
})