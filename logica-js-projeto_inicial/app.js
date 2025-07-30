alert("Bem-vindo ao jogo do número secreto");
let numeroSecreto = 9;
console.log(numeroSecreto);
let tentativa = prompt("Insira um valor entre 0 e 10");

if (numeroSecreto == tentativa) {
  alert(`Acertouuu, o número secreto era  ${numeroSecreto}`);
} else {
  alert("Você errou :,(");
}
