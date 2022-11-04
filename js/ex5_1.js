const frm = document.querySelector("form")
const res = document.querySelector("pre")

frm.addEventListener("submit",(e)=>{
    res.innerText = ``
    let resposta = ""
    e.preventDefault()
    let num = Number(frm.inNum.value)
    for(i=0;i<=10;i++){
        //resposta = resposta + num + "x" + i + "=" + (num * i) + "\n"
        resposta =`${resposta}${num} x ${i} = ${num * i}\n`
    }
    res.innerText = resposta
})