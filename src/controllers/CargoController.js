const Cargo = require('../models/cargo')

async function criar(req, res){
    const cargo = new cargo(req.body)
    const cargoCriado = await cargo.save()
    res.status(201).json(cargoCriado)
}







module.exports = {
    criar
}