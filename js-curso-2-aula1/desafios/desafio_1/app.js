let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function clicarConsole() {
  console.log("O botão foi clicado");
}

function clicarAlerta() {
  alert("Eu amo JS");
}

function clicarPrompt() {
  let cidade = prompt("Escreva o nome de uma cidade do Brasil");
  alert(`Estive em ${cidade} e lembrei de você`);
}

function somar() {
  let valor1 = parseInt(prompt("Escolha um valor"));
  let valor2 = parseInt(prompt("Escolha outro valor"));
  let soma = valor1 + valor2;
  alert(`A soma entre ${valor1} e ${valor2} é ${soma}`);
}
