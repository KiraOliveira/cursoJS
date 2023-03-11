//VARIÁVEIS - Usar o const para casos onde não teremos variação do dado

const nome = 'Kira'
console.log(nome)

const idade = 34
console.log(idade)

//*************************** */

//CONSTANTES - Usar Let para casos onde vamos ter variação do dado

let valorIngressoAdulto = 20
valorIngressoAdulto = 30
console.log(valorIngressoAdulto)

//******************************* */

//TIPOS PRIMITIVOS - VALORES

const nomee = 'Kira' // Tipo String
const idadee = 34 // Tipo Number
const estaAprovado = true // Tipo Boolean
const corPreferida = 'preto' // Tipo String
const sobrenome = undefined //  Undefined (Não é usado)
const corSelecionado = null // Para casos que a info vai ser redefinida (Redefinir um valor)

//***************************** */

//TIPAGEM DINÂMICA

/*typeof direto no console, é possível verificar o tipo do dado*/

//**************************************************************** */

//TIPO - REFERÊNCIAL

//OBJETO

let pessoa = {
  nome: 'Kira',
  idade: 34,
  corPreferida: 'preto',
  estaAprovado: true
}

console.log(pessoa)

//***************************************** */

//ARRAYS

let familia = [56, 62, 34, 31, 34, 'Kira', 'Guih']
console.log(familia.length)
console.log(familia[0])

let nomeColega = ['Juh', 38]
console.log(familia, nomeColega)
