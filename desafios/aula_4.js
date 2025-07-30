console.log("Saudações!!");

// ______________________________________
let nome = "Marissa";
console.log(`Olá ${nome}!!`);

// ______________________________________
let meuNome = "Marissa";
alert(`Olá ${meuNome}!!`);

// ______________________________________
let linguagemProgramacao = prompt(
  "Qual a linguagem de programação você mais gosta?"
);
console.log(linguagemProgramacao);

// ______________________________________
let valor1 = 6;
let valor2 = 4;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// ______________________________________
let idadeUsuario = prompt("Qual a sua idade?");
if (idadeUsuario > 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade!! Ainda precisa crescer.");
}

// ______________________________________
let numero = prompt("Insira um valor");
if (numero > 0) {
  console.log("Valor positivo");
} else {
  if (numero == 0) {
    console.log("Valor 0, não é positivo e nem negativo");
  } else {
    console.log("Valor negativo");
  }
}

// ______________________________________
let contagem = 1;

while (contagem < 10) {
  console.log(contagem);
  contagem++;
}

// ______________________________________
let nota = 8;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// ______________________________________
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// ______________________________________
let numeroAleatorioInteiroAte10 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorioInteiroAte10);

// ______________________________________
let numeroAleatorioInteiroAte1000 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorioInteiroAte1000);
