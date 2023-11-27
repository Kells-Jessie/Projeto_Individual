var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `SELECT AVG(YEAR(CURDATE()) - YEAR(dtNasc) - (DATE_FORMAT(CURDATE(), '%m-%d') 
        // < DATE_FORMAT(dtNasc, '%m-%d'))) AS media_idade
        // FROM usuario;`;

        instrucaoSql = `SELECT (YEAR(CURDATE()) - YEAR(dtNasc) - (DATE_FORMAT(CURDATE(), '%m-%d') < DATE_FORMAT(dtNasc, '%m-%d'))) AS idade
        FROM usuario;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
buscarUltimasMedidas,
}
