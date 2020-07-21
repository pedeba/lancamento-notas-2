let alunos = ["João", "Pedro", "Marcos", "Vitória", "Bruno", "Maria", "Natália", "Camila", "André", "Leonardo", "Jonas", "Fernanda", "Michel", "Luísa", "Isabela",]
let alunoshtml = document.querySelectorAll(".aluno")
let bimestre1 = document.querySelectorAll(".bimestre1")
let bimestre2 = document.querySelectorAll(".bimestre2")
let bimestre3 = document.querySelectorAll(".bimestre3")
let media = document.querySelectorAll(".media")
let condicao = document.querySelectorAll(".condicao")
let secaoDestaque = document.getElementById("secaodestaque")
let alunoDestaque = document.getElementById("alunodestaque")
let maiorMedia = 0

alunos.forEach((a, b) => {
    alunoshtml[b].value = alunos[b]
}) 

function calcMedia() {
    secaoDestaque.classList.remove("esconde")
    media.forEach((x, y) => {
        media[y].value = ((Number(bimestre1[y].value) + Number(bimestre2[y].value) + Number(bimestre3[y].value))/3).toFixed(2)
        if (media[y].value >= 7) {
            condicao[y].value = 'Aprovado'
        } else {
            condicao[y].value = 'Reprovado'
        } 
        if (Number(media[y].value) > maiorMedia) {
            maiorMedia = Number(media[y].value)
            alunoDestaque.innerHTML = ` A maior média é ${maiorMedia.toFixed(2)}, do(a) aluno ${alunos[y]}`
        }    
    })
}

