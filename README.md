# js-To-Frontend

## Lógica

Voltei(mais uma vez, já perdi as contas).

# Variáveis

é um espaço na mémoria que podemos guardar tipos de dados para que possamos reutilizar outras vezes.

## Tipos de dado

Podemos armazenar em uma variável diversos tipos de tipos de dados:

- string
- numeros
- booleans
- arrays
- objetos
- funções

## Concatenação

Concatenação é a junção de informações, seja um texto(strings) com uma variavel, dois textos(strings).

```javascript:

let nome = 'Lucas'

console.log("Eu sou o " + nome)

```

## conversão de dados

- conversão implicita

Js é uma linguagem "amiga" que tenta nos ajudar na melhor forma, com isso tem a conversão de dados "implicita" quando o js converte os dados sozinhos, como no exemplo abaixo.

```javascript:

let n1 = '10'
let n2 = 10
let sum = n1 / n2

console.log(sum)

```

No exemplo acima estamos dividindo 10 (numero) / 10 (string) por trá dos panos o js entende que por estarmos fazendo uma conta, ele converte a string em numero e nos possibilitando fazer essa conta.**_ em casos de somas teremos "problema" já que + faz concatenação_**.

- conversão explicita

conversão explicita é quando declaramos que aquela entrada, aquele tipo de dados é string, é numero, ou float.

```javascript:

let n1 = parseInt('10')
let n2 = 10
let sum = n1 + n2

console.log(sum)

```

No exemplo acima convertemos uma string em um numero inteiro, possivilitando fazermos a conta 10 + 10 e resultar em 20.

# Operadores Aritméticos

- - adição
- - subtração
- - multiplicação
- / divisão
- % resto da divisão
- \*\* exponenciação
- ++ incremento
- -- decremento

# Operadores de Comparação

**_Retorna valores booleanos_**

- >
- <
- =>
- =<
- ==
- ===
- !==
- !===

# Condicionais

Blocos condicionais comparam uma lógica que faz o retorno de um valor booleano (true or false) e executa algo.

- if
- else
- else if
- switch

```javascript:
if(10 >2){
  executa algo caso a expressão seja verdadeira
} else {
  executa algo caso a expressão seja falsa
}
```

# Operadores Lógicos

- ! not
- && and
- || or
