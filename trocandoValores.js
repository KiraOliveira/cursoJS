// Realizando a alteração dos valores das variáveis

let a = 'vermelho'
let b = 'preto'

let c = a // Aqui a variável "c" recebe "a" e não vai modificalá
a = b // Aqui "a" recebe "b", porém já temos "a" salvo em "c"
b = c // Aqui "b" recebe "a"

console.log(a)
console.log(b)
