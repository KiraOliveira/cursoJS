// FACTORY FUNCTIONS - (FUNÇÕES DE FÁBRICA)
// Encapsular a informção em um método para criar um objeto

const celular3 = {
  marcaCelular: 'ASUS',
  tamanhoTela: {
    vertical: 155,
    horizontal: 75
  },
  capacidadeBateria: 5000,
  ligar: function () {
    console.log('Fazendo ligação...')
  }
}

// Primeira forma de fazer inserindo o objeto dentro de uma função

function criarCelular() {
  const celular4 = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
      vertical: 155,
      horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function () {
      console.log('Fazendo ligação...')
    }
  }
  return celular4
}

// Segunda forma de fazer colocando o return direto no objeto

function criarCelular() {
  return {
    marcaCelular: 'ASUS',
    tamanhoTela: {
      vertical: 155,
      horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function () {
      console.log('Fazendo ligação...')
    }
  }
}

// Terceira forma de fazer removendo o Hard Code - Assim fica mais dinâmico, para usar chave e valor(key e value), inserido como parâmetro

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular: marcaCelular,
    tamanhoTela: tamanhoTela,
    capacidadeBateria: capacidadeBateria,
    ligar: function () {
      console.log('Fazendo ligação...')
    }
  }
}

// Quarta forma de fazer, quando key e value tem o mesmo nome, podemos deixar apenas um

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar: function () {
      console.log('Fazendo ligação...')
    }
  }
}

// Quinta forma de fazer, removendo o function do ligar

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log('Fazendo ligação...')
    }
  }
}

// Criando o método -- Dessa forma podemos alterar tudo no "Construtor"

const celular1 = criarCelular('Zenfone', 5.5, 5000)
console.log(celular1)

const celular2 = criarCelular('Motorola', 4.5, 5000)
console.log(celular2)
