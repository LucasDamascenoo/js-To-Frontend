// escreva uma função que mostre o seu nome

function myName(name) {
  return `meu nome é ${name} e tenho ${checkMaioIdade(12)} anos`;
}

console.log(myName("Lucas", 18));

// escreva uma função para verificar se é maior de idade;

function checkMaioIdade(idade) {
  if (idade >= 18) {
    return `sua idade é ${idade} anos e você é maior de idade`;
  } else {
    return ` sua idade é ${idade} anos e você é menor de idade`;
  }
}

console.log(checkMaioIdade(28));

// função para calcular desconto ou juros de acordo com a etiqueta

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

function main() {
  let valorEtiqueta = 100;
  let etiqueta = 4;

  if (etiqueta === 1) {
    console.log(aplicarDesconto(valorEtiqueta, 10));
  } else if (etiqueta === 2) {
    console.log(aplicarDesconto(valorEtiqueta, 15));
  } else if (etiqueta === 3) {
    console.log(aplicarDesconto(valorEtiqueta, 0));
  } else {
    console.log(aplicarJuros(valorEtiqueta, 15));
  }
}

main();
