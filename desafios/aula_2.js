// ______________________________________
let diaSemana = prompt("Qual é o dia da semana?");
if (diaSemana == "Sábado") {
  alert("Bom fim de semana!");
} else {
  if (diaSemana == "Domingo") {
    alert("Bom fim de semana!");
  } else {
    alert("Boa Semana!");
  }
}

// ______________________________________
let numero = prompt("Digite um valor");

if (numero < 0) {
  alert("Número Negativo!");
} else {
  if (numero == 0) {
    alert("Valor 0, nem positivo, nem negativo");
  } else {
    alert("Número Positivo");
  }
}

// ______________________________________
let pontuacao = 0;

if (pontuacao >= 100) {
  alert("Parabens!! Você venceu");
} else {
  alert("Tente novamente para ganhar");
}

// ______________________________________
let saldo = 0;

alert(`A sua conta possui saldo: ${saldo}`);

// ______________________________________
let nome = prompt("Insira seu nome:");

alert(`Saudações ${nome}`);
