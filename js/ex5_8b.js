const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let numc = Number(frm.inChinN.value)
    const anos = Number(frm.inAnos.value)
    let resposta = ""
    resposta = resposta + `1° Ano: ${numc} Chinchilas.\n`
    for (i = 2; i <= anos; i++) {
        numc = (numc * 3)
        resposta = resposta + `${i}° Ano: ${numc} Chinchilas.\n`
    }
    res.innerText = resposta
})