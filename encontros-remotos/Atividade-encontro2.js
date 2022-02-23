//REQUISITOS DO MVP
// 1 percorrer de zero até o numero de alunos;
// 2 se o numero for zero, escrever zero e mostrar numero;
// 3 se o numero for par, escrever par e mostrar numero;
// 4 se o numero for impar, escrever impar e mostrar numero.

//somente com numeração
let numeroDeAlunos = 10

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
   //console.log(contador)

   if(contador == 0) {
      console.log("O numero atual e zero")
   } else if(contador % 2 == 0) {
      console.log('O numero ' + contador + ' e par')
   } else {
      console.log(`O numero ${contador} e impar`)
   }
}

//somente com lista
let nomeDeAlunos = ["Caique", "Thiago", "Odirlei", "Jessica"]

for (let nome of nomeDeAlunos) {
   console.log(`Essa pessoa se chama ${nome}`)
}