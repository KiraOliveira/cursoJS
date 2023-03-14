// Criar função para mostrar os números primos

//Primos

//Compostos

//Ex: 10, 11

exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite) {
  for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0) {
      console.log(i, 'Composto')
    }
  }
}

exibeNumPrimos(15)

function exibeNumPrimos(limite) {
  for (let num = 2; num <= limite; num++) {
    let ehPrimo = true

    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        ehPrimo = false
        break
      }
    }
    if (ehPrimo) {
      console.log(num, 'Número primo')
    }
  }
}

// CRIANDO UMA FUNÇÃO PARA SER REUTILIZÁVEL

exibeNumPrimos(15)

function exibeNumPrimos(limite) {
  for (let num = 2; num <= limite; num++) {
    if (dividorNum(num)) {
      console.log(num, 'Número primo')
    }
  }
}

function dividorNum(num) {
  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      return false
    }
  }
  return true
}
