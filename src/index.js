let resultadoVitDer = saldoVitDer(21, 0)

classificacaoRanked(resultadoVitDer)

function saldoVitDer (vitorias, derrotas){
    return vitorias - derrotas
}

function classificacaoRanked(resultadoVitDer){
    if(resultadoVitDer <= 10){
        return console.log(`O Herói tem de saldo de ${resultadoVitDer} vitórias, é está no nível FERRO`)
    }else if(resultadoVitDer <= 20){
        return console.log(`O Herói tem de saldo de ${resultadoVitDer} vitórias, é está no nível BRONZE`)
    }else if(resultadoVitDer <= 50){
        return console.log(`O Herói tem de saldo de ${resultadoVitDer} vitórias, é está no nível PRATA`)
    }else if(resultadoVitDer <= 80){
        return console.log(`O Herói tem de saldo de ${resultadoVitDer} vitórias, é está no nível OURO`)
    }else if(resultadoVitDer <= 90){
        return console.log(`O Herói tem de saldo de ${resultadoVitDer} vitórias, é está no nível DIAMANTE`)
    }else if(resultadoVitDer <= 100){
        return console.log(`O Herói tem de saldo de ${resultadoVitDer} vitórias, é está no nível LENDÁRIO`)
    }else{
        return console.log(`O Herói tem de saldo de ${resultadoVitDer} vitórias, é está no nível IMORTAL`)
    }
}