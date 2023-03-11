//FUNCTIONS - VERBO + SUBSTANTIVO

let corSite = 'Azul'

function resetaCor(cor) {
  corSite = cor
}

console.log(corSite)
resetaCor('vermelho')
console.log(corSite)

//**************************************** */

let outraCor = 'Preto'
let outraTonalidade = 'Roxo'

function resetaItens(coloracao, tonalidade) {
  outraCor - coloracao
  outraTonalidade = tonalidade
}

console.log(outraCor, outraTonalidade)

//************************************************ */

//CONCATENANDO - " + "

let escolha = 'Tampa'

function newChoise(nome, idade, time) {
  escolha = nome + idade + time
}

console.log(escolha)
newChoise('Kira ', 34, ' Tampa')
console.log(escolha)

//****************************************** */

//TIPOS DE FUNÇÃO

//Realiza uma tarefa, porém não devolve nada

function dizerNome() {
  console.log('Kira')
}

dizerNome()

//******************************* */

////Realiza um cálculo ou operação e retorna algo

function multiplicarPorDor(valor) {
  return valor * 2
}

//console.log(multiplicarPorDor(5)) //fazer o cálculo direto no console.log

let resultado = multiplicarPorDor(5) // Inserindo em uma variável para a realização do cálculo

console.log(resultado) //Dando um console apenas no Resultado

//*********************************** */

//OPERADORES

//ARITMÉTICOS(MATEMÁTICOS) *(multiplicação) /(dvisão) **(exponêncial) +(soma)  -(subtração)

let salario = 100

console.log(salario * salario)
console.log(salario / salario)
console.log(5 ** 5)
console.log(salario + salario)
console.log(salario - salario)

// ++INCREMENTO

let idadeOther = 18
console.log(idadeOther++) // Dessa forma o incremento é feito apenas
console.log(idadeOther) // Aqui

console.log(++idadeOther) // Aqui ele faz o incremento no mesmo momento

// --DECREMENTO

console.log(idadeOther--) // Dessa forma o decremento é feito apenas
console.log(idadeOther) // Aqui

console.log(--idadeOther) // Aqui ele faz o decremento no mesmo momento

//************************************************************************ */

//ATRIBUIÇÃO

let valorTecladoGamer = 100
console.log(valorTecladoGamer)

valorTecladoGamer += valorTecladoGamer // Aqui ele faz valorTecladoGamer + valorTecladoGamer =
console.log(valorTecladoGamer)

valorTecladoGamer -= valorTecladoGamer // Aqui ele faz valorTecladoGamer - valorTecladoGamer =
console.log(valorTecladoGamer)

//******************************************************* */

//COMPARAÇÃO

//IGUALDADE ESTRITA

console.log(1 === 1) // Adicionar a explicação correta - COMPARANDO VALOR E TIPO -- MAIS RECOMENDADO
console.log('1' === 1) //

//IGUALDADE SOLTA
console.log(1 == 1) // Compara se o primeiro valor é igual ao segundo, ignorando o tipo
console.log('1' == 1) // Aqui ele ignora que é uma string, retorna true pois valida que ambos são 1 -- NÃO É MUITO RECOMENDADO

//******************************************************** */

//OPERADOR TERNÁRIO

//Temos um cliente, 100 premium, comum
let pontos = 100
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)

//****************************************************** */

//LÓGICOS

// AND (&&) -- retorna true se os dois operando forem "TRUE"

console.log(true && true)

let maiorDeIdade = true
let possuiCarteiraDeTrabalho = true
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

console.log('Pode aplicar', podeAplicar)

// OR (||) - retorna true se um dos operandos for "TRUE"

let menorDeIdade = true
let semCTPS = false
let nAplicar = menorDeIdade || semCTPS

console.log('Não aplicar', nAplicar)

//NOT (!)  - Adicionar uma explicação

let candidatoRecusado = !podeAplicar

console.log('Candidato recusado', candidatoRecusado)

//******************************************************** */

//BITWISE -- NÃO BOLEANOS

// Falsy (Undefined, null, 0, false, '', NaN(Not a Number))

let nomePersonalizado = 'Kira Oliveira'
let nomePadrao = null // Como a condição é um Falsy ele retorna apenas esse dado
let nomePerfil = nomePersonalizado || nomePadrao

console.log(nomePerfil)

//Truthy

let corPersonalizada = 'vermelha'
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil) // Como a condição é Truthy e a corPersonalizada já possui um dado preenchido ele retorna apenas esse

//Pesquisar mais sobre ambos

//****************************************** */

// IF .. ELSE

//Se a hora estiver entre 06:00 até 12:00 : Bom dia!

//Se a hora estiver entre 12:01 até 18:00 : Boa tarde!

//Caso contrário : Boa noite!

//Declarando as variáveis que serão usadas

let hora = 14

if (hora > 6 && hora < 12) {
  console.log('Bom dia!!')
} else if (hora > 12 && hora < 18) {
  console.log('Boa tarde!!')
} else {
  console.log('Boa noite!!')
}

//**************************************** */

//Switch .. Case

let permissao // comum, gerente, diretor
permissao = 'gerente'

switch (permissao) {
  case 'comum':
    console.log('Usuários comum')
    break

  case 'gerente':
    console.log('Usuário gerente')
    break

  case 'diretor':
    console.log('Usuário diretor')
    break

  default:
    console.log('Usuário não reconhecido')
}

//******************************************* */

//LAÇOS DE REPETIÇÃO

//FOR

for (let i = 0; i < 5; i++) {
  console.log('Estou aprendendo JS! Usando FOR', i)
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    // modulo - resto da divisão igual a 0
    console.log('Imprimir apenas os impares - Laço For', i)
  }
}

for (let i = 1; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log('Imprimir apenas os pares - Laço For', i)
  }
}

for (let i = 7; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log('Imprimir decrescente - Laço For', i)
  }
}

for (let m = 1; m <= 12; m++) {
  if (m % 2 === 0) {
    console.log('Imprimir crescente - Laço For', m)
  }
}

//************************************************ */

//WHILE -- VERIFICA PRIMEIRO DEPOIS EXECUTA O LOOP

let i = 5

while (i >= 1) {
  if (i % 2 !== 0) {
    console.log('Imprimir apenas os impares - Laço While', i)
  }
  i--
}

let j = 1
while (j <= 9) {
  if (j % 2 === 0) {
    console.log('Imprimir apenas os pares - Laço While', j)
  }
  j++
}

let d = 7
while (d >= 1) {
  if (d % 2 !== 0) {
    console.log('Imprimir decrescente - Laço While', d)
  }
  d--
}

let l = 1
while (l <= 12) {
  if (l % 2 === 0) {
    console.log('imprimir crescente - Laço While', l)
  }
  l++
}

//********************************************* */

//DO .. WHILE -- EXECUTA NO MINÍMO UMA VEZ E DEPOIS VERIFICA A CONDIÇÃO - USADO POUCO

//DECLARANDO AS VARIÁVEIS

let e = 0
do {
  console.log('Digitando! - Laço Do While', e)
  e++
} while (e < 10)

let f = 1
do {
  if (f % 2 !== 0) {
    console.log('Imprimir apenas os impares - Laço Do While', f)
  }
  f++
} while (f <= 7)

let g = 1
do {
  if (g % 2 === 0) {
    console.log('Imprimir apenas os pares - Laço Do While', g)
  }
  g++
} while (g <= 9)

let h = 7
do {
  if (h % 2 !== 0) {
    console.log('Imprimir decrescente - Laço Do While', h)
  }
  h--
} while (h >= 1)

let k = 1
do {
  if (k % 2 === 0) {
    console.log('Imprimir crescente - Laço Do While', k)
  }
  k++
} while (k <= 12)

//*********************************** */

// FOR .. IN
/*const pessoa = {
  nome: 'Kira',
  idadeAtual: 34
}

//chave = key
//key - value
//nome(key) - 'kira'(value)

for (let chave in pessoa) console.log('Laço FOR IN', chave, pessoa)

const cores = ['Vermelho', 'Azul', 'Verde']
for (let indice in cores) console.log('Laço FOR IN', indice, cores[indice])*/

//***************************************************************************** */

//FOR .. OF

/*for (let cor of cores) console.log('Laço FOR OF', cor)

const dias = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo'
]

for (let dia of dias) console.log('Laço FOR OF', dia)*/
