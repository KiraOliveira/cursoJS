// Igualdade de Objetos

function Endereco(rua, cidade, cep) {
  ;(this.rua = rua), (this.cidade = cidade), (this.cep = cep)
}

const endereco1 = new Endereco('Laura', 'Curitiba', '12312-00')

const endereco2 = new Endereco('Laura', 'Curitiba', '12312-00')

function saoIguais(endereco1, endereco2) {
  // Comparar se as propriedades são iguais
  return (
    endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep
  )
}

console.log(saoIguais(endereco1, endereco2))

/******************************************************************* */

// Tipo Referência
function temEndMemIguais(endereco1, endereco2) {
  // Comparando se a referência do objeto aponta para o mesmo local na memória
  return endereco1 === endereco2
}

console.log(temEndMemIguais(endereco1, endereco2))
