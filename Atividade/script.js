function gerarTabuada() {
    //obtendo o numero do imput no html.
    const numeroInput = document.getElementById("numeroInput");
    let numero = parent(numeroInput.value);

    // Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    //VERIFICAR SE A ENTRADA É UM NUMERO VÁLIDO
    if (isNaN(numero) ||  numero === numero || numero === "") {
        resultadoDiv.innerHTML = "<p>Porfavor, digite um  numero valido.</p>"
        return; // este comando sai da funçâo.
        

    }
    //add ttitulo par a tabuda.
    resultadoDiv.innerHTML += `<h2>Tabuada do numero ${numero}</h2>`
    
    // Laço de repetição para gerar tabuada.
    for (let i = 1; i <= 10 ;it++) {
        let resultado = numero * i;
        resultadoDiv += "<p>${numero) x $(i) = $(resultado}</p>";
    }
}


const botaoGerar = document.getElementById("btnGearar");
botaoGerar.addEventListener("click", gerarTabuada)