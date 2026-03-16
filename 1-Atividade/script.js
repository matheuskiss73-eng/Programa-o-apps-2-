function gerarTabuada() {
    //obtendo o numero do imput no html.
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);

    // Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    //VERIFICAR SE A ENTRADA É UM NUMERO VÁLIDO
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = `<p>Porfavor, digite um numero valido.</p>`;
        return; // este comando sai da função.
    }

    //add titulo para a tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do numero ${numero}</h2>`;
    
    // Laço de repetição para gerar tabuada.
    for (let i = 1; i <= 10; i++) { // Corrigido de it++ para i++
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`; // Adicionado .innerHTML
    }
}

const botaoGerar = document.getElementById("btnGerar"); // Corrigido de btnGearar para btnGerar
botaoGerar.addEventListener("click", gerarTabuada);