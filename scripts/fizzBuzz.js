// Divisível por 3 => Retorna Fizz
// Divisível por 5 => Retorna Buzz
// Divisível por 3 e 5 => Retorna fizzBuzz
// Não divisível por 3 e 5 => Retorna o número inserido - No caso a (entrada)
// Não é um número => Retorna "Não é um número"

const resultado = fizzBuzz(6)
console.log(resultado)

function fizzBuzz(entrada) {
  if (entrada % 3 === 0 && entrada % 5 === 0) {
    console.log('fizzBuzz')
  } else {
    if (entrada % 3 === 0) {
      console.log('Fizz')
    } else {
      if (entrada % 5 === 0) {
        console.log('Buzz')
      } else {
        if (entrada % 3 !== 0 || entrada % 5 !== 0) {
          console.log(entrada)
        } else {
          // Aqui preciso ajustar ainda, não cai no correto
          if (typeof entrada !== 'number') {
            console.log('Não é um número')
          }
        }
      }
    }
  }
}

//***************************************** */

// Divisível por 3 => Retorna BFMV
// Divisível por 5 => Retorna LP
// Divisível por 3 e 5 => Retorna Slipknot
// Não divisível por 3 e 5 => Retorna o número inserido - No caso a (entrada)
// Não é um número => Retorna "Não é um número"

const result = banda(true)
console.log(result)

function banda(convite) {
  if (typeof convite != 'number') {
    return 'Não é um número'
  }
  if (convite % 3 === 0 && convite % 5 === 0) {
    return 'Slipknot'
  }
  if (convite % 3 === 0) {
    return 'BFMV'
  }
  if (convite % 5 === 0) {
    return 'LP'
  }
  return entrada
}

//***************************************************** */

const resul = fizzBuzz(15)
console.log(resul)

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') {
    return 'Não é um número'
  }
  if (entrada % 3 === 0 && entrada % 5 === 0) {
    return 'FizzBuzz'
  }
  if (entrada % 3 === 0) {
    return 'Fizz'
  }
  if (entrada % 5 === 0) {
    return 'Buzz'
  }
  return entrada
}
