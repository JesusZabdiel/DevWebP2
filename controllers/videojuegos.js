const path = require('path')
const Videojuego = require('../utils/database').models.videojuego


exports.postAgregarVideojuego = (request, response) => {
    console.log(request.body) //<={id: number, nombre: text}
    Videojuego.create(request.body)
        .then(res => {
            console.log("Registro Exitoso")
            response.json({estado: "aceptado"})
            //response.redirect('/videojuegos/confirmacionDatos') 
        })
        .catch(error => {
            console.log(error)
            response.json({estado: "Error"})
        })   
}

exports.getMostarVideojuegos = (request, response) => {
    Videojuego.findAll()
        .then(videojuegos => {
            console.log(videojuegos)
            response.json(videojuegos)
        })
        .catch(error =>{
            console.log("An error ocurred")
            console.log(error)
        })
}

exports.postBorrarVideojuego = (req, res)=>{
    console.log(req.body)
    Videojuego.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(videojuegos => {
        console.log("Videojuego eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(error =>{
        console.log(err)
        res.json({estado: "error"})
    })

}

exports.postActualizarVideojuego = (req, res) => {
    console.log(req.body)
    Videojuego.update({
        nombre: req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(videojuegos => {
        console.log("Videojuego actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(error =>{
        console.log(err)
        res.json({estado: "error"})
    })
}