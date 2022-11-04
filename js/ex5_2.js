const frm = document.querySelector("form")
const res = document.querySelector("pre")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const numD=Number(frm.inNum.value)
    let resposta = `Entre ${numD} e 1 : `
    for(let i=numD;i>1;i--){
        resposta=resposta + i + ", "
    }
    resposta=resposta + "1."
    res.innerText = resposta
})