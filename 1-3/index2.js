//Crisr um programa que calcula média das tumas de alunos
// e envia a mensagem do cálculo da média

const alunosTurmaA = [
  {nome: "Ana Paula", nota: 9},
  {nome: "Joana", nota: 8.5},
  {nome: "Geraldo", nota: 7.4},
  {nome: "Mario", nota: 10}
]

const alunosTurmaB = [
  {nome: "Leandro", nota: 6},
  {nome: "Fabiana", nota: 3},
  {nome: "Fabio", nota: 5},
  {nome: "Jeniffer", nota: 4}
]

function calculaMedia(alunos) {
  // return (alunos[0].nota + alunos[1].nota + alunos[2].nota) /3
    let soma = 0;
    for(i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
      }
      const media = soma / alunos.length
      return media
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function enviaMensagem(media, turma) {
if (media > 5) {
  console.log(`A sua média da turma ${turma} foi ${media} parabéns.`)
} else {
  console.log(`A média da turma ${turma} foi menor do que 5.`)
}
}

enviaMensagem(media1, "turmaA")
enviaMensagem(media2, "TurmaB")