// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

// Múltiplos de 3 - 3,6,9
// Múltiplos de 5 - 5,10

// Passos
// Somando os múltiplos
// Armazenar os múltiplos de 3 em uma variável
// Armazenar os múltiplos de 5 em uma variável
// Somar os dois

somar(10)
function somar(limite) {
  let mult3 = 0
  let mult5 = 0

  for (i = 0; i <= limite; i++) {
    if (i % 3 === 0) mult3 += i
    if (i % 5 === 0) mult5 += i
  }
  console.log(mult3 + mult5)
}
