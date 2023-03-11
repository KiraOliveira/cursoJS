// Exercício Nota Escolar
// Obter a média a partir de um array

// 0-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [70, 70, 80]

console.log(mediaDoAluno(array))

function mediaDoAluno(notas) {
  let soma = 0
  for (let nota of notas) {
    soma += nota
  }
  const media = soma / notas.length

  if (media < 59) return 'E'
  if (media < 69) return 'D'
  if (media < 79) return 'C'
  if (media < 89) return 'B'
  return 'A'
}

// OLHAR MELHOR ESSES DOIS ÚLTIMOS
const arrayNotas = [72, 37, 80]

console.log(mediaDoAluno(arrayNotas))

function mediaDoAluno(notas) {
  let soma = 0
  for (let nota of notas) {
    soma += nota
  }

  const media = soma / Math.floor(notas.length)

  if (media >= 0 && media <= 59) return 'E'
  if (media >= 60 && media <= 69) return 'D'
  if (media >= 70 && media <= 79) return 'C'
  if (media >= 80 && media <= 89) return 'B'
  console.log('Média é A')
}

//************************************** */

//CRIANDO UMA FUNÇÃO GENÉRICA PARA CALCULAR A MÉDIA

const notasArray = [80, 80, 79]

console.log(mediaDoAluno(notasArray))

function mediaDoAluno(notas) {
  const media = calcularMedia(notas)

  if (media < 59) return 'E'
  if (media < 59) return 'D'
  if (media < 79) return 'C'
  if (media < 89) return 'B'
  return 'A'
}

function calcularMedia(notasArray) {
  let soma = 0
  for (let valor of notasArray) {
    soma += valor
  }
  return soma / Math.floor(notasArray.length)
}
