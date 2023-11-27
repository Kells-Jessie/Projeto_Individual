var quizModel = require("../models/quizModel");

// function listar(req, res) {
//     quizModel.listar().then(function(resultado){
//         // precisamos informar que o resultado voltará para o front-end como uma resposta em json
//         res.status(200).json(resultado);
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

function cadastrar(req, res) {
    var qtdAcertos = req.body.qtdAcertosServer;
    var idUsuario = req.body.idUsuarioServer;

    if (qtdAcertos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    else if(idUsuario == undefined){
        res.status(400).send("Seu idUsuario está undefined!");
    }

    quizModel.cadastrar(qtdAcertos,idUsuario).then(function(resposta){
        // res.status(200).send("acertos criado com sucesso");
        res.json(resposta);
    }).catch(function(erro){
        console.log('Erro ao cadastrar dados',erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    // listar,
    cadastrar
}