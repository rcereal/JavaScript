// /* var temperatura_c = parseFloat(prompt("Digite aqui a temperatura atual"))

// var temperatura_f = ((9/5)*temperatura_c)+32

// console.log(temperatura_f)

// var c_novamente = (temperatura_f-32)/1.8

// console.log(c_novamente)

// var orcamento = parseFloat(prompt("Quanto dinheiro você planeja usar para sua viagem?"))

// var quant_l = orcamento/5

// var kilometragem = quant_l * 20

// console.log("Com "+orcamento+" você consegue comprar "+quant_l+"l e poderá realizar uma viagem de até "+kilometragem) */

// var senha_correta = "1234";

// var email_correto = "1234@gmail.com"

// var senhaInput = document.getElementById("senha_login");

// function verificar_senha(){
//     var senha_inserida = document.getElementById("senha_login").value;
//     var email_inserido = document.getElementById("email_login").value;

//     if (senhaInput.type === "text") {
//         senhaInput.type = "password";
//     }

//     var senha_inserida = senhaInput.value;

//     if (senha_inserida === senha_correta && email_inserido === email_correto){
//         alert("Seja bem-vindo de novo!");
//     } else {
//         alert("Senha incorreta ou email incorretos. Tente novamente.");
//     }
// }

// document.getElementById("log_in").addEventListener("submit", function(event) {
//     event.preventDefault();
//     verificar_senha();
// });

// document.getElementById("togglePassword").addEventListener("click", function() {
//     senhaInput.type = senhaInput.type === "password" ? "text" : "password";
// });

function logar(){
    login = document.getElementById('email_login').value
    
    senha = document.getElementById('senha_login').value 

    console.log(login)
    console.log(senha)

    if (login == senha){
        alert('Logado com sucesso!')
    } else {
        alert('Usuario ou senha invalido')
    }

}