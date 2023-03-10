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

let idade = 18
console.log(idade++) // Dessa forma o incremento é feito apenas
console.log(idade) // Aqui

console.log(++idade) // Aqui ele faz o incremento no mesmo momento

// --DECREMENTO

console.log(idade--) // Dessa forma o decremento é feito apenas
console.log(idade) // Aqui

console.log(--idade) // Aqui ele faz o decremento no mesmo momento

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
