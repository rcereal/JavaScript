let evento_log = document.querySelector('#texto');

evento_log.addEventListener('input', (event) => {
    document.querySelector('.imprimir').innerText = event.target.value
})


