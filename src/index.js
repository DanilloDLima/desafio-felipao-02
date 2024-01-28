let resultadoVitDer = saldoVitDer(20, 10)

classificacaoRanked(resultadoVitDer)

function saldoVitDer (vitorias, derrotas){
    return vitorias - derrotas
}

function classificacaoRanked(resultadoVitDer){
    if(resultadoVitDer === 10){
        return console.log("Funcionou")
    }

    return console.log("Não funcionou")
}