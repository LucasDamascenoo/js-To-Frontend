//função do imc

// quebre o código do imc em partes logicas

function calculaImc(peso, altura) {
  return peso / (altura * altura);
}

function main() {
  let peso = 90.2;
  let altura = 1.7;

  let imc = calculaImc(peso, altura);
  console.log(imc);
}

main();
