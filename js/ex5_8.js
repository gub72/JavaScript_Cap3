const prompt = require("prompt-sync")
console.log("Programa Anos de copa do mundo. Digite 0 para sair")
console.log("--------------------------------------------------")
do{
    const ano = Number(prompt("Ano: "))
    if(ano == 0){
        break
    } else if(ano == 1942 ||ano == 1946){
        console.log(`Nao houve copa em ${ano} do mundo (Segunda guerra mundial)`)
    } else if(ano >= 1930 && ano % 4 ==2){
        console.log(`Sim! Houve copa do mundo em ${ano}`)
    } else {
        console.log(`Nao... ${ano} nao houve copa do mundo.`)
    }
}while(true)