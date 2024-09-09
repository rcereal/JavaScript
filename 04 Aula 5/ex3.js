// Atividade 03
// Escreva uma função que encontre a área e o perímetro de um círculo, de
// acordo com o raio fornecido

function calcular_area(raio){ //pode ter variaveis dentro da function
    perimetro = 3.14 * 2 * raio
    area = 3.14 * raio * raio //ou raio ** 2 (que significa ele vezes ele mesmo)

    return `O perimetro é: ${perimetro} e a área é ${area}`
}

raio = parseFloat(prompt('Digite o raio: '))
alert(calcular_area(raio))