const express = require('express')
const router = express.Router()
const vjsController = require('../controllers/videojuegos')


router.post('/agregarVideojuego' , vjsController.postAgregarVideojuego)
router.get('/mostrarVideojuegos' , vjsController.getMostarVideojuegos)
router.post('/borrarVideojuego' , vjsController.postBorrarVideojuego)
router.post('/actualizarVideojuego' , vjsController.postActualizarVideojuego)

module.exports = router;