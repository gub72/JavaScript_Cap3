const frm = document.querySelector("form")
const resD = document.querySelector("#outDivisores")
const resP = document.querySelector("#outPerfeito")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let num = Number(frm.inNum.value)
    let resposta = ""
    let res = 0
    for(i=1;i<num;i++){
        if(num%i==0){
            res=res+i
            resposta = resposta + `${i}, `
        }
    }
    resD.innerText = `Divisores do ${num}: ${resposta}(Soma: ${res})`
    if(res==num){
        resP.innerText=`${num} e um numero perfeito.`
    }else{
        resP.innerText=`${num} nao e um numero perfeito.`
    }
})