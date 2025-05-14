window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');

  setTimeout(() => {
      splash.classList.add('fade-out');

      setTimeout(() => {
          splash.style.display = 'none';
          main.style.display = 'block';
          document.body.style.overflow = 'auto'; // reativa rolagem
      }, 1000); // tempo para fade-out (igual ao CSS)
  }, 2000); // tempo que a logo fica visível antes do fade (em ms)
});

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

  if (imc < 18.5) classificacao = "Abaixo do peso"; //tabela das classificações do imc
  else if (imc < 24.9) classificacao = "Peso normal";
  else if (imc < 29.9) classificacao = "Sobrepeso";
  else if (imc < 34.9) classificacao = "Obesidade grau 1";
  else if (imc < 39.9) classificacao = "Obesidade grau 2";
  else classificacao = "Obesidade grau 3";

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`; //tofixed arredonda as casas decimais
}

// Função para abrir o pop-up
const btnPopup = document.getElementById('btnPopup');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

btnPopup.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Função para fechar o pop-up
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fechar o pop-up se clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target === popup) {
      popup.style.display = 'none';
  }
});
