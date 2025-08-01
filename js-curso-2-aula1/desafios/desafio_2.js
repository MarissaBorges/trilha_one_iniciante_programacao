function OlaMundo() {
  console.log("Olá Mundo");
}

// ______________________________________
function saudacao(nome) {
  console.log(`Olá ${nome}!`);
}

// ______________________________________
function dobro(numero) {
  return 2 * numero;
}

// ______________________________________
function media(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// ______________________________________
function maior(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    if (num2 > num1) {
      return num2;
    } else {
      return "Eles são iguais";
    }
  }
}

// ______________________________________
function potencia(num) {
  return num * num;
}
