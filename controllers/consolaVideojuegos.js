const path = require('path')
const ConsolaVideojuego = require('../utils/database').models.consolaVideojuego


exports.getMostrarConsolaVideojuegos = (req, res) =>{
    ConsolaVideojuego.findAll()
        .then(consvids => {
            console.log(consvids)
            res.json(consvids)
        })
        .catch(error => {
            console.log("An error was ocurred")
            console.log(error)
        })
    
}

exports.postAgregarConsolaVideojuego = (req, res) => {
    console.log(req.body)
    ConsolaVideojuego.create(req.body)
        .then(response => {
            console.log("Registro existoso")
            res.json({estado: "aceptado"})
        })
        .catch(error =>{
            console.log(error)
            res.json({estado: "error"})
        })
}

exports.postBorrarConsolaVideojuego = (req, res) =>{
    console.log(req.body)
    ConsolaVideojuego.destroy({
        where: {
            idCV: req.body.idCV
        }
    })
        .then(response => {
            console.log("ConsolaVid eliminado")
            res.json({estado: "aceptado"})
        })
        .catch(error => {
            console.log(error)
            res.json({estado: "error"})
        })
}

exports.postActualizarConsolaVideojuego = (req, res) => {
    console.log(req.body)
    ConsolaVideojuego.update({
        lanzamiento: req.body.lanzamiento

    },{
        where: {
            idCV: req.body.idCV
        }
    })
        .then(response =>{
            console.log("Consola actualizada")
            res.json({estado: "aceptado"})
        })
        .catch(error =>{
            console.log(error)
            res.json({estado: "error"})
        })
}