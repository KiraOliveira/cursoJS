// Objeto Postagem de Blog

// Nome do objeto Postagem

/*
Título
Mensagem
Autor
Visualizações
Comentários (autor, mensagem) - Aqui tem que fazer um array
estaAoVivo
*/

let postagem = {
  titulo: 'JavaScript',
  mensagem: 'Olá',
  autor: 'Kira',
  visualizacoes: '2',
  comentarios: [
    { autor: 'Gih', mensagem: 'Muito legal' },
    { autor: 'Sky', mensagem: 'Verdade' },
    { autor: 'Lucky', mensagem: 'Será?' }
  ],
  estaAoVivo: true
}

console.log(postagem)

/****************************************************/

function newPostagem(titulo, mensagem, autor, visualizacoes, estaAoVivo) {
  ;(this.titulo = titulo),
    (this.mensagem = mensagem),
    (this.autor = autor),
    (this.visualizacoes = visualizacoes),
    (this.estaAoVivo = estaAoVivo)
}

let post = new newPostagem('Python', 'Hello', 'Sky', '3', true)

console.log(post)

/**********************************************************************************/

// Outra forma de fazer

function newPost(titulo, mensage, autor) {
  ;(this.titulo = titulo),
    (this.mensage = mensage),
    (this.autor = autor),
    (this.visualizacoes = 0),
    (this.comentarios = []),
    (this.estaAoVivo = false)
}

let poste = new newPost('Java', 'Legal', '3')

console.log(poste)
