const express = require('express')
const router = express.Router()
const  cvController = require('../controllers/consolaVideojuegos.js')

router.get('/mostrarConsolaVideojuegos' , cvController.getMostrarConsolaVideojuegos)
router.post('/agregarConsolaVideojuegos' , cvController.postAgregarConsolaVideojuego)
router.post('/borrarConsolaVideojuegos' , cvController.postBorrarConsolaVideojuego)
router.post('/actualizarConsolaVideojuegos' , cvController.postActualizarConsolaVideojuego)

module.exports = router;