const form = document.getElementById("form-validacao");
let campoA = document.getElementById("campo-a");
let campoB = document.getElementById("campo-b");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const mensagemResposta = document.getElementById("mensagem-resposta")

    if(campoB.value > campoA.value)
    {
        mensagemResposta.innerHTML = "O valor do campo B é maior que o valor do campo A";
        mensagemResposta.style.color = "red";
    }

    else if(campoB.value === campoA.value)
    {
        mensagemResposta.innerHTML = "O valor dos campos são iguais!";
        mensagemResposta.style.color = "black";
    }
    else
    {
        mensagemResposta.innerHTML = "O valor do campo A é maior que o valor do campo B";
        mensagemResposta.style.color = "blue";
    }
    
     mensagemResposta.style.display = "block";    
})
