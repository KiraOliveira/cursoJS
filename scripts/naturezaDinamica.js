// Natureza dinâmica de Objetos
// Os objetos no JavaScript são altamente dinâmicos

const mouse = {
  cor: 'red',
  marca: 'dazz'
}

mouse.velocidade = 5000
mouse.trocarDPI = function () {
  console.log('Mudando DPI ')
}

console.log(mouse)

// É possível realizar o delete da função também

const mousePad = {
  cor: 'blue',
  marca: 'Asus'
}

mousePad.velocidade = 5001
mousePad.trocarDPI = function () {
  console.log('Mudando DPI ')
}

delete mousePad.velocidade //Aqui a função é deletada
delete mousePad.trocarDPI // Aqui também
console.log(mousePad)
