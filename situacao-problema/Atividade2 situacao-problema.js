const dataDeHoje = 17 
const idadeObrigatoria = 18
var dataDoCadastro = 18
var idade = 19
if (dataDoCadastro <= 17) { 
        console.log("Data inválida")
} else {
        console.log("Prossiga")    
}
if ( idade <= 18) {
        console.log("Cadastro não permitido pela idade")
} else {
        console.log("Prossiga")
}
let listaDeParticipantes = ["Fulano","Cicrano","Beltrano"]
if (listaDeParticipantes.length > 10) {
        console.log("Quantidade de participantes excedida. Máx.:100")
} else {
        console.log("Quantidade permitida")
}