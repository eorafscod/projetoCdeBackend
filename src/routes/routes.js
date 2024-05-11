const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')

// cargo
router.post('/cargos', CargoController.criar)

// Funcionarios


// Departamentos








module.exports = router