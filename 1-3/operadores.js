/* 
==========================================================
> Maior
< Menor
>= Maior ou igual
< Menor ou igual
== Igual a
=== Igual e do mesmo tipo
!= Diferente de
!== Diferente, inclusive do tipo
==========================================================
OPERADORES LÓGICOS

&& "E" As duas condições devem ser verdadeiras para que
a condição final seja verdadeira

|| "OU" Uma das condições deve ser verdadeira para que a
condição final seja verdadeira

! "NÃO" Nega uma condição
==========================================================

console.log(4 =='4')
console.log(4 ==='4')
console.log(4 !='4')
console.log(4 !=='4')
*/

const idade = 16

if(idade >= 18){
  console.log("Deixar entrar")
} else {
  console.log("Bloquear a entrada")
}
