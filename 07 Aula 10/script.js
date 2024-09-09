
// desenvolva um sistema de catalogo de livros online que permita aos usuarios visualizar,
// adicionar, buscar e classificar livos. As informações dos livros devem ser armazenadas em um arquivo JSON. 
// Cada livro deve conter detalhes como titulo, autor, genero, ano de publicação e avaliações dos usuarios.

let banco_de_dados = {
    "titulo" : [],
    "autor" : [],
    "genero" : [],
    "anopublicacao" : [],
    "avaliacoes" : [] ,

}

function recuperarDados(){
    titulo = document.getElementById('titulo').value
    autor = document.getElementById('autor').value
    genero = document.getElementById('genero').value
    anopublicacao = document.getElementById('anopublicacao').value
    avaliacoes = document.getElementById('avaliacoes').value
    ultima_posicao = bd.titulo.length
    
    bd.titulo[ultima_posicao] = titulo
    bd.autor[ultima_posicao] = autor
    bd.genero[ultima_posicao] = genero
    bd.anopublicacao[ultima_posicao] = anopublicacao
    bd.avaliacoes[ultima_posicao] = avaliacoes
}

console.log(livro);