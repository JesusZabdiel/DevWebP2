const path = require('path')
const Consola = require('../utils/database').models.consola

exports.getMostrarConsolas = (req, res) =>{
    Consola.findAll()
        .then(consolas => {
            console.log(consolas)
            res.json(consolas)
        })
        .catch(error => {
            console.log("An error was ocurred")
            console.log(error)
        })
    
}

exports.postAgregarConsola = (req, res) => {
    console.log(req.body)
    Consola.create(req.body)
        .then(response => {
            console.log("Registro existoso")
            res.json({estado: "aceptado"})
        })
        .catch(error =>{
            console.log(error)
            res.json({estado: "error"})
        })
}

exports.postBorrarConsola = (req, res) =>{
    console.log(req.body)
    Consola.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(response => {
            console.log("Consola eliminada")
            res.json({estado: "aceptado"})
        })
        .catch(error => {
            console.log(error)
            res.json({estado: "error"})
        })
}

exports.postActualizarConsola = (req, res) => {
    console.log(req.body)
    Consola.update({
        nombre: req.body.nombre
    },{
        where: {
            id: req.body.id
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