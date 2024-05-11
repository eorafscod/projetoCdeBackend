const { default: mongoose } = require("mongoose")
const mongodb = require(`mongoose`)

const schema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: false,
    },
    salario: {
        type: Number,
        require: true,
    },
}, {timestamps: true})

const Cargo = mongoose.model('cargo', schema)

module.exports = Cargo