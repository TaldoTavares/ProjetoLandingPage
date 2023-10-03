let leonardo = window.document.getElementById("leonardo")
let samantha = window.document.getElementById("samantha")
let bruna = window.document.getElementById("bruna")
let setaDireita = window.document.getElementById("setaDireita")
let setaEsquerda = window.document.getElementById("setaEsquerda")

function rolarDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function rolarEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}