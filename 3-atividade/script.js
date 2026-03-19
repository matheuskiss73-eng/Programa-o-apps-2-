const nota1 = document.getElementById('not1');
const nota2 = document.getElementById('not2');
const nota3 = document.getElementById('not3');
const btnCalcular = document.getElementById('btnGerar');
const resultadoDiv = document.getElementById('Resultado');


btnCalcular.addEventListener('click', () => {
    
    const n1 = parseFloat(nota1.value);
    const n2 = parseFloat(nota2.value);
    const n3 = parseFloat(nota3.value);

    
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, preencha todas as notas!</p>";
        return;
    }

    
    const media = (n1 + n2 + n3) / 3;

    
    resultadoDiv.innerHTML = `<h3>A média é: ${media.toFixed(2)}</h3>`;
    
    
    if (media >= 6) {
        resultadoDiv.innerHTML += "<p style='color: green;'>Aprovado</p>";
    } else {
        resultadoDiv.innerHTML += "<p style='color: red;'>Reprovado.</p>";
    }
});