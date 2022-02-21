let tamanho = 16;

function aumentar() {
  tamanho += 4;
  document.documentElement.style.fontSize = tamanho + "px";
}
function diminuir() {
  tamanho -= 4;
  document.documentElement.style.fontSize = tamanho + "px";
}
