
document.getElementById("btnGerar").addEventListener("click", function() {
    
    // Captura dos valores
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const divRes = document.getElementById("resultado");

    // Validação: Verifica se os campos estão vazios ou não são números
    if (isNaN(n1) || isNaN(n2)) {
        divRes.innerHTML = "<p style='color:#ff1801'>ERRO: Piloto sem dados!</p>";
        return;
    }

    // Cálculos
    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);



    divRes.innerHTML = `
        <div style="text-align: left; font-size: 0.9rem; width: 100%;">
            SOMA: ${soma} | 
            MÉDIA: ${media} | 
            PROD: ${produto} <br>
            MAX: ${maior} | 
            MIN: ${menor}
        </div>
    `;
});