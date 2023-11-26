var database = require("../database/config");

function buscarAquariosPorEmpresa(usuarioId) {

  instrucaoSql = `select * from usuario where idUsuario = ${usuarioId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(usuarioId, descricao) {
  
  instrucaoSql = `insert into (descricao, fk_empresa) usuario values (${descricao}, ${usuarioId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
