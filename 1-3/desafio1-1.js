// MEU CALCULO IMC

const nome = "Carlos";
const peso = 74;
const altura = 1.71;

imc = peso / (altura * altura);

if(imc >= 30){
  console.log(`${nome} você está acima do peso.`)
}else{
  console.log(`${nome} você não está acima do peso.`)
}

// //RESOLUÇÃO ROCKETSEAT

// const nome = 'Carlos'
// const peso = 110
// const altura = 1.88

// const imc = peso / (altura * altura)

// let message = ""

// if (imc >= 30) {
//     message = `${nome} você está acima do peso`
// } else {
//     message = `${nome} você não está acima do peso`
// }

// console.log(message)

//==============================================================

// //MEU CALCULO APOSENTADORIA
// const nome = "Silvana";
// const sexo = "F";
// const idade = 48;
// const contribuicao = 23;

// aposentadoria = idade + contribuicao

// if(sexo == "F" && contribuicao >=30 && aposentadoria >= 85){
// console.log(`${nome} você pode se aposentar!`)
// } else{
//   console.log(`${nome} você não pode se aposentar!`)
//  }

// //RESOLUÇÃO ROCKESTSEAT
  
// const nome = 'Silvana'
// const sexo = 'F'
// const idade = 48
// const contribuicao = 23

// const calculoContribuicao = idade + contribuicao

// // essas variáveis irão retornar true ou false
// const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
// const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

// if ( homemPodeAposentar || mulherPodeAposentar) {
//     console.log(`${nome}, você pode se aposentar!`)
// } else {
//     console.log(`${nome}, você não pode se aposentar!`)
// }