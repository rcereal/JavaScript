// Atividade 04
// Escreva uma função que verifica se um número fornecido pelo usuário em
// um prompt é primo ou não.

function e_primo_ou_nao(numero){
    quantidade_divisores = 0
    for (i=1; i<=numero; i++){  // vai ser contado de 1 ate o numero anterior ao recebido
        if (numero % i == 0){  // se o numero recebido divido pelo numero i da seção der resto ZERO...
            quantidade_divisores += 1 // a quantidade de divisores + 1
        }
    }
    if (quantidade_divisores > 1) {
        alert('Não é primo')
    }
    else {
        alert('É primo')
    }
}

e_primo_ou_nao(parseInt(prompt('Digite um numero:')))