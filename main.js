const form = document.getElementById("form-validacao");
let campoA = document.getElementById("campo-a");
let campoB = document.getElementById("campo-b");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const mensagemResposta = document.getElementById("mensagem-resposta")
    const mensagemCasoB = document.getElementById("casoB")
    const mensagemCasoA = document.getElementById("casoA")
    const mensagemCasoIgual = document.getElementById("casoIgual")

    if(campoB.value > campoA.value)
    {
        mensagemResposta.innerHTML = mensagemCasoB;
        mensagemResposta.style.display = "block";
    }

else if(campoB.value === campoA.value)
{
    mensagemResposta.innerHTML = mensagemCasoIgual;
    mensagemResposta.style.display = "block";
}
else(campoA.value > campoB.value)
{
    mensagemResposta.innerHTML = mensagemCasoA;
    mensagemResposta.style.display = "block";
}
})