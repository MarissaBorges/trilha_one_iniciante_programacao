alert("Bem-vindo ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let valorTentativa;
let tentativas = 1;

while (valorTentativa != numeroSecreto) {
  valorTentativa = prompt(`Insira um valor entre 0 e ${numeroMaximo}`);
  if (numeroSecreto == valorTentativa) {
    break;
  } else {
    if (numeroSecreto > valorTentativa) {
      alert(`O número secreto é maior que ${valorTentativa}`);
    } else {
      alert(`O número secreto é menor que ${valorTentativa}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Acertouuu, o número secreto era  ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`
);

// if (tentativas > 1) {
//   alert(
//     `Acertouuu, o número secreto era  ${numeroSecreto}, com ${tentativas} tentativas`
//   );
// } else {
//   alert(
//     `Acertouuu, o número secreto era  ${numeroSecreto}, com ${tentativas} tentativa`
//   );
// }
