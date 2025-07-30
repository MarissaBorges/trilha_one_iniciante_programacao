alert("Bem-vindo ao jogo do número secreto");
let numeroSecreto = 9;
console.log(numeroSecreto);
let valorTentativa;
let tentativas = 1;

while (valorTentativa != numeroSecreto) {
  valorTentativa = prompt("Insira um valor entre 0 e 10");
  if (numeroSecreto == valorTentativa) {
    alert(
      `Acertouuu, o número secreto era  ${numeroSecreto}, com ${tentativas} tentativas`
    );
  } else {
    if (numeroSecreto > valorTentativa) {
      alert(`O número secreto é maior que ${valorTentativa}`);
    } else {
      alert(`O número secreto é menor que ${valorTentativa}`);
    }
    tentativas++;
  }
}
