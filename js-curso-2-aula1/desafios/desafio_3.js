function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

// ______________________________________
function calcularFatorial(numero) {
  let resultado = numero;
  while (numero > 1) {
    resultado = resultado * (numero - 1);
    numero--;
  }
  return resultado;
}

// ______________________________________
function converterParaDolar(valor) {
  return valor / 4.8;
}

// ______________________________________
function calcularArea(altura, largura) {
  return altura * largura;
}

// ______________________________________
function calcularAreaCircular(raio) {
  return 3.14 * (raio * raio);
}

// ______________________________________
function tabuada(numero) {
  let indice = numero;
  while (indice > 0) {
    console.log(`${numero} x ${indice} = ${numero * indice}`);
    indice--;
  }
}
