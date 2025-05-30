let tamanhoAtual = 1;

function alterarTamanho(fator) {
  tamanhoAtual *= fator;
  document.getElementById("conteudo").style.fontSize = tamanhoAtual + "em";
}
