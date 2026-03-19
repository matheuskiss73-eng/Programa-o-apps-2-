document.getElementById("btnGerar").addEventListener("click", function() {


    const n1 = document.getElementById('ida1');
    const btnCalcular = document.getElementById('btnGerar');
    const resultadoDiv = document.getElementById('Resultado');

    if (isNaN(n1)) {
            divRes.innerHTML = "<p style='color:#ff1801'>ERRO: Piloto sem dados!</p>";
            return;
        }


    if (idade >= 18) {
        resultadoDiv.innerHTML += "<p style='color: green;'>Aprovado</p>";
    } else if (idade >= 12) {
        console.log("adolescente")
    } else if  (idade < 2) {
        console.log("bebe")
    }

    
    
})