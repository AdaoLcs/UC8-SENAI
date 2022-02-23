// TIPO DE MENU

// O QUE MUDA COM LET OU CONST??
const alimentoSelecionado = "açaí com farinha"

// Sintax Sugar - com SWITCH (Estrutra de repetição)
switch (alimentoSelecionado) {
    case "arroz": 
      console.log("vamos jantar " + alimentoSelecionado)
      break;

    case "macarrão":
      console.log("vamos jantar " + alimentoSelecionado)
      break;   
    case "batata":
       console.log("vamos jantar " + alimentoSelecionado)
       break;
       
    case "açaí com farinha":
        console.log("vamos jantar " + alimentoSelecionado)
        break;

    default:
        console.log("O item não consta na lista")
        break; 
}

//Modo 2 de fazer isso - com IF/ELSE IF
if (alimentoSelecionado === "açaí com farinha") {
    console.log("vamos jantar" + alimentoSelecionado)
} else if (alimentoSelecionado === "Charque") {
    console.log("vamos jantar" + alimentoSelecionado)
} else if (alimentoSelecionado === "macarrão") {
    console.log("vamos jantar" + alimentoSelecionado)
} else {
    console.log("o item não consta na lista")
}

//For - Estrutura de repeticão
for (let indice = 0; indice < listaDeNoticias.length; indice++)
  {
      const elementoAtualDaLista = listaDeNoticias[indice]
      console.log(elementoAtualDaLista)
}