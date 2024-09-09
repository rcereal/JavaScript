let pegarImagens = async() => {
    let dados = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
    dados = await dados.json()
    corpo_documento = document.getElementById('corpo')
    imagem = document.createElement('img')
    imagem.src = dados[0].url

    console.log(imagem);
    corpo_documento.appendChild(imagem)

}

pegarImagens()