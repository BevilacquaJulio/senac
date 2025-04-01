function parabens() {
  alert("Amém, que bom!");
}

var botaoNao = document.getElementById("nao");
var tela = document.getElementById("tela");

function fuja() {
  
  var alturaJanela = tela.offsetHeight
  var larguraJanela = tela.offsetWidth;

  var maxX = larguraJanela - botaoNao.offsetWidth;
  var maxY = alturaJanela - botaoNao.offsetHeight;
  
  var aleatorioX = Math.floor(Math.random()*maxX);
  var aleatorioY = Math.floor(Math.random()*maxY);
  
  
  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aleatorioY + "px";
}