const num = document.getElementById('num')
const verificar = document.getElementById('verificar')
const saida = document.getElementById('saida')

verificar.addEventListener('click', () => {
    const n = Number(num.value)
    let dia

    switch (n) {
        case 1: 
            dia = "Domingo"
            break
        case 2:
            dia = "Segunda-Feira"
            break
        case 3: 
            dia = "Terça-Feira"
            break
        case 4: 
            dia = "Quarta-Feira"
            break
        case 5: 
            dia = "Quinta-Feira"
            break
        case 6: 
            dia = "Sexta-Feira"
            break
        case 7: 
            dia = "Sabado"
            break
        default:
            dia = null
    }

    if (dia){
        saida.textContent = `O dia selecionado é: ${dia}`
    } else{
        saida.textContent = "Hello World!"
    }
})