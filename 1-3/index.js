//Coleção de valores agrupados em uma única variável (Arrays)
const alunos = [
{
nome: "Lolla",
nota: 9.8
},
{
nome: "Maggie",
nota: 10
},
{
nome: "Pink",
nota: 2
}
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3

console.log(media)

if (media > 5) {
  console.log(`A sua média foi ${media} parabéns.`)
} else {
  console.log('Sua média foi menor do que 5.')
}

// const Aluno01 = {
//   nome: "Lolla",
//   nota: 9.8
// }

// const Aluno02 = {
//   nome: "Maggie",
//   nota: 10
// }

// const Aluno03 = {
//   nome: "Pink",
//   nota: 2
// }

// // const Aluno01 = "Lolla"
// // const nA01 = 9.8
// // const Aluno02 = "Maggie"
// // const nA02 = 10
// // const Aluno03 = "Pink"
// // const nA03 = 2

// const media = (Aluno01.nota + Aluno02.nota + Aluno03.nota)/3

// console.log(media)

// if (media > 5) {
//   console.log(`A sua média foi ${media} parabéns.`)
// } else {
//   console.log('Sua média foi menor do que 5.')
// }

// const idade = 18

// if(!(idade >= 18) || idade === 17) {
//   console.log("bloquear a entrada")
// } else {
//   console.log("deixar entrar")
// }