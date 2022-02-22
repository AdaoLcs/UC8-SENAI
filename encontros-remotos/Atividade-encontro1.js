var listaDePecas = ["amortecedor","filtro de ar","motor",
"amortecedor","filtro de ar","motor","amortecedor","filtro de ar","motor"
,"motor"] // Array

let peso = 100
if(peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça tem o peso adequado")
}
if(listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não há mais espaço")
} 
let nomePeca = "disco de freio"
if(nomePeca.length > 3) {
    console.log("Nome da peça está adequado para o cadastro")
} else if (nomePeca.length == 0) {
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("o nome deve ter mais de 3 caracteres, digite um nome adequado")
}