let consultarCep = async()=>{
    let cep = document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let dados = await fetch(url);
    let endereco = await dados.json()
    
    
    tabela = document.getElementById('tabela')
    linha = document.createElement('tr')
    
    cep = document.createElement('td')
    logradouro = document.createElement('td')
    complemento = document.createElement('td')
    bairro = document.createElement('td')
    localidade = document.createElement('td')
    uf = document.createElement('td')
    
    cep.innerText = endereco.cep
    logradouro.innerText = endereco.logradouro
    complemento.innerText = endereco.complemento
    bairro.innerText = endereco.bairro
    localidade.innerText = endereco.localidade
    uf.innerText = endereco.uf
    
    linha.appendChild(cep)
    linha.appendChild(logradouro)
    linha.appendChild(complemento)
    linha.appendChild(bairro)
    linha.appendChild(localidade)
    linha.appendChild(uf)
    tabela.appendChild(linha);
    
    console.log(endereco);
}
