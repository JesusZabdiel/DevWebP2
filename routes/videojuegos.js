const express = require('express')
const router = express.Router()
const vjsController = require('../controllers/videojuegos')


router.get('/mostrarVideojuegos' , vjsController.getMostarVideojuegos)
router.post('/agregarVideojuego' , vjsController.postAgregarVideojuego)
router.post('/borrarVideojuego' , vjsController.postBorrarVideojuego)
router.post('/actualizarVideojuego' , vjsController.postActualizarVideojuego)

module.exports = router;