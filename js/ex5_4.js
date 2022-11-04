const frm = document.querySelector("form")
const res1 = document.querySelector("#outRes1")
const res2 = document.querySelector("#outRes2")

let resposta = ""
let numContas = 0
let valTotal = 0

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const descricao = frm.inNameC.value
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal = valTotal + valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    res1.innerText = `${resposta} -------------------------------`
    res2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`
    frm.inNameC.value = ""
    frm.inValor.value = ""
    frm.inNameC.focus()
})