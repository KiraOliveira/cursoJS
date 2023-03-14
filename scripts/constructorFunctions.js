// CONSTRUCTOR FUNCTIONS - CONSTRUTORES DE FÁBRICA

// camelCase - umDoisTresQuatro
/*function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log('Fazendo ligação...')
    }
  }
}*/

// NÃO ESTÁ FUNCIONANDO, VERIFICAR O QUE ACONTECEU

// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  ;(this.marcaCelular = marcaCelular), // this serve para referenciar aquele objeto, está referenciando o objeto atual
    (this.tamanhoTela = tamanhoTela),
    (this.capacidadeBateria = capacidadeBateria),
    (this.ligar = function () {
      console.log('Fazendo ligação...')
    })
}

//Criando o objeto - estanciando o objeto

const celular = new Celular('ASUS', 5.5, 5000)
console.log(celular)
