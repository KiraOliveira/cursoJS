// Clonando Objetos

const mobile = {
  marcaMobile: 'ASUS',
  tamanhoMobile: {
    vertical: 155,
    horizontal: 75
  },
  ligar: function () {
    console.log('Fazendo Ligação...')
  }
}

// Primeira forma de clonar um objeto

// Primeira {} Para onde o objeto será clonado // Segundo parâmetro é de onde o objeto está sendo clonado

//Aqui é possivel verificar todas as propriedades clonadas e as novas adicionadas
const novoObjeto = Object.assign(
  {
    bateria: 4000,
    fone: 'Não'
  },
  mobile
)

console.log(novoObjeto)

//Outra forma de fazer - Usando Spred ou mais conhecimento como ... (3 pontinhos)
const objeto2 = { ...mobile }
console.log(objeto2)
