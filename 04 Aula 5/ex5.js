// Atividade 05
// Crie uma função anônima que simule uma calculadora básica. Ela deve
// aceitar dois números e uma operação (adição, subtração, multiplicação,
// divisão) como parâmetros e retornar o resultado.


var calculadora = function(a,b,operacao){

    if (operacao == '+') {
        return a+b
    }
    else if (operacao == '-') {
        return a - b
    }
    else if (operacao == '*') {
        return a * b
    }
    else if (operacao =='/') {
        return a / b
    }
    
    
}

nA = parseFloat(prompt('Digite o primeiro numero da operação: ' ))
operacao = prompt("Digite a operação a realizar (+,-,* ou /):")
nB = parseFloat(prompt('Digite o segundo numero da operação: ' ))

alert(calculadora(nA,nB,operacao))