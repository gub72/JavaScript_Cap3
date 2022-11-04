const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumP.value)
    let numDivisores = 0
    //for(let i=1;i<=num;i++){
    //    if(num % i==0){
    //       numDivisores++
    //   }
    // }
    // if(numDivisores == 2){
    //     res.innerText = `${num} e primo.`
    // } else {
    //      res.innerText = `${num} nao e primo.`
    //}
    for(let i = 2; i <= num / 2; i++){
        if(num%i ==0){
            numDivisores=1
            break
        }
    }
    if(num > 1 && !numDivisores){
        res.innerText = `${num} e primo.`
    } else{
        res.innerText = `${num} nao e primo.`
    }
})