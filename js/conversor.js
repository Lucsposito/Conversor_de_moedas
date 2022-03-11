function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$  " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterB() {
  var valorElementoB = document.getElementById("valorB");
  var valorB = valorElementoB.value;
  var valorEmDolarNumerico = parseFloat(valorB);
  var valorEmBitcoin = valorEmDolarNumerico / 38162;
  var elementoValorConvertidoB = document.getElementById("valorConvertidoB");
  var valorConvertidoB = "O resultado em Bitcoin é   " + valorEmBitcoin;
  elementoValorConvertidoB.innerHTML = valorConvertidoB;
}

function ConverterL() {
  var valorElementoL = document.getElementById("valorL");
  var valorL = valorElementoL.value;
  var valorEmDolarNumerico = parseFloat(valorL);
  var valorEmLibra = valorEmDolarNumerico * 0.76;
  var elementoValorConvertidoL = document.getElementById("valorConvertidoL");
  var valorConvertidoL = "O resultado em Libra é $  " + valorEmLibra;
  elementoValorConvertidoL.innerHTML = valorConvertidoL;
}
