let num
do{
    num=Number(prompt("Numero: "))
    if(num==0||isNaN(num)){
        alert("Digite um numero valido...")
    }
}while(num==0||isNaN(num))
let pares = `Pares entre 1 e ${num}  `
for(let i=2;i<=num;i=i+2){
    pares=pares +i+ ","
}
alert(pares)