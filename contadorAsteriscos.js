// Criar uma função que exibe a quantidade de * que aquela linha possui

// USANDO APENAS UM LOOPING

exibirAsteriscos(10)

function exibirAsteriscos(linhas) {
  let padrao = ''
  for (let linha = 1; linha <= linhas; linha++) {
    padrao += '*'
    console.log(padrao)
  }
}

//USANDO LOOPING INTERIOR

asteriscoExibe(5)

function asteriscoExibe(lines) {
  for (let line = 1; line <= lines; line++) {
    let modelo = ''
    for (let i = 0; i < line; i++) {
      modelo += '*'
    }
    console.log(modelo)
  }
}
