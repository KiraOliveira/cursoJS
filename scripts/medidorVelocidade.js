// Velocidade máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto
// Usar o math.floor() - Isso vai arredondar o valor
// Caso os pontos sejam maiores que 12 -> "Carteira Suspendida"

verificarVelocidade(130)

function verificarVelocidade(velocidade) {
  if (velocidade <= 70) {
    console.log('OK')
  } else {
    const ponto = Math.floor((velocidade - 70) / 5)
    if (ponto >= 12) console.log('Carteira Suspendida')
    else {
      console.log('Pontos', ponto)
    }
  }
}

//***************************************************** */

//REFATORANDO O CÓDIGO

verificarVeloz(75)

function verificarVeloz(agilidade) {
  const velocidadeMax = 70
  const kmPontos = 5
  const max = 12
  if (agilidade <= velocidadeMax) {
    console.log('OK')
  } else {
    const pontos = Math.floor((agilidade - velocidadeMax) / kmPontos)
    if (pontos >= max) console.log('Carteira Suspensa')
    else {
      console.log('Pontos', pontos)
    }
  }
}
