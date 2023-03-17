// Objeto Endereço

// Criar um objeto endereço que contêm:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco) como parâmetro

let end = {
  rua: 'Laura 123',
  cidade: 'Curitiba',
  cep: '12312-000'
}

function exibirEnd(end) {
  for (let chave in end) console.log(chave, end[chave])
}

exibirEnd(end)
