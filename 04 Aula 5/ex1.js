// Atividade 01
// Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, 
// o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).


function contar_vogal(palavra){
    vogais = 0
    for (i=0; i<palavra.length; i++){
        letra = palavra[i]
        if(letra == 'a ' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
            vogais += 1
        }
    }
    return vogais
}

console.log(contar_vogal('paralelepipedo'))