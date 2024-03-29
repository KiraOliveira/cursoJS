// CONSTRUCTOR FUNCTIONS - CONSTRUTORES DE FÁBRICA

// camelCase - umDoisTresQuatro
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

// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  ;(this.marcaCelular = marcaCelular), // this serve para referenciar aquele objeto, está referenciando o objeto atual
    (this.tamanhoTela = tamanhoTela),
    (this.capacidadeBateria = capacidadeBateria),
    (this.ligar = function () {
      console.log('Fazendo ligação...')
    })
}

//Criando o objeto - estanciando o objeto - Aqui cria o objeto novo

const celular = new Celular('ASUS', 6.5, 5200)
console.log(celular)
