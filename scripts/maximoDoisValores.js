// Escreva uma função que use 2 números e retorne o maior valor entre eles

//RESOLVENDO USANDO IF .. ELSE

//DECLARANDO AS VARIÁVEIS - DEPOIS ISSO
let maiorN = max(1, 3)

//DECLARANDO A FUNÇÃO - PRIMERO FAZER ISSO
function max(n1, n2) {
  if (n1 > n2) {
    console.log('O maior número é n1', n1)
  } else {
    console.log('O maior número é n2', n2)
  }
}

//DECLARANDO AS VARIÁVEIS - DEPOIS ISSO
let numMaior = Num(358, 257)
console.log('O maior número é', numMaior)

//DECLARANDO A FUNÇÃO - PRIMERO FAZER ISSO
function Num(num1, num2) {
  if (num1 > num2) return num1
  return num2
}

// RESOLVENDO COM O OPERADOR TERNÁRIO

//DECLARANDO AS VARIÁVEIS - DEPOIS ISSO
let numMax = N(123, 321)
console.log('O maior valor é', numMax)

//DECLARANDO A FUNÇÃO - PRIMERO FAZER ISSO
function N(numero1, numero2) {
  return numero1 > numero2 ? numero1 : numero2
}
