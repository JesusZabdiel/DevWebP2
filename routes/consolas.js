const express = require('express')
const router = express.Router()
const  cnlsController = require('../controllers/consolas.js')

router.get('/mostarConsolas' , cnlsController.getMostrarConsolas)
router.post('/agregarConsola' , cnlsController.postAgregarConsola)
router.post('/borrarConsola' , cnlsController.postBorrarConsola)
router.post('/actualizarConsola' , cnlsController.postActualizarConsola)

module.exports = router;