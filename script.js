function calcularIMC() {
  // Pegando os valores dos inputs
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  // Verifica se os valores são válidos
  if (isNaN(peso) || isNaN(altura)) {
    document.getElementById("resultado").innerText = "Por favor, preencha os dois campos corretamente.";
    document.getElementById("classificacao").innerText = "";
    return;
  }

  // Calculando o IMC
  let imc = peso / (altura * altura);

  // Exibindo o resultado
  document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);

  // Classificação
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    classificacao = "Obesidade grau I";
  } else if (imc >= 35 && imc < 40) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III (mórbida)";
  }

  document.getElementById("classificacao").innerText = "Classificação: " + classificacao;
}
