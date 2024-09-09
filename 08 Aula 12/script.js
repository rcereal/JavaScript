function addNumbers(numberA, numberB){
    return new Promise((resolve, reject) => {
        let result = numberA + numberB;
        if (result > 0){
            resolve(result)
        } else {
            reject('o resultado é invalido. aqui é a resposta negativa da promisse')
        }
    });
}

addNumbers(1,4).catch(resultado => console.log(resultado)).then(resultado => console.log(resultado));