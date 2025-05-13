function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
  
    if (!peso || !altura || peso <= 0 || altura <= 0) {
      resultado.textContent = "Por favor, insira valores válidos."; //se os dados informados forem menores ou iguais a 0
      return;
    }
  
    const imc = peso / (altura * altura); //cálculo do imc
    let classificacao = "";
  
    if (imc < 18.5) classificacao = "Abaixo do peso"; //tabela das clissificações do imc
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau 1";
    else if (imc < 39.9) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";
  
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`; //tofixed arredonda as casas decimais
  }
  