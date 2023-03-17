// Date -- Pesquisar mais no site do Mozila

const data1 = new Date()
console.log(data1)

const data2 = new Date('March 17 2023 02:21')
console.log(data2)

const data3 = new Date(2023, 02, 17, 02, 21) // está considerando o 0, sendo assim ao invés de aparecer Março, aparece Abril, usando 02 aparece Março
console.log(data3)

// Realizando a mudança no Ano
data3.setFullYear(2030)
console.log(data3)
