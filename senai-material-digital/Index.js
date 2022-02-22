let listaDeOperarios = ["Helena","Chico","Mário"]
let quantidadeDeOperarios = listaDeOperarios.length
if (quantidadeDeOperarios == 3) {
    listaDeOperarios.push("João", "José")
    console.log(listaDeOperarios)
} else {
    console.log("Quantidade de operários nesta lista excedida")
}