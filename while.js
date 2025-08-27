const jogar = document.getElementById("jogar")
const statusE1 = document.getElementById("status")
const lista = document.getElementById("lista")

jogar.addEventListener("click", () => {
    const segredo = Math.floor(Math.random() * 50) + 1
    let vidas = 8
    let acertou = false
    let tentativas = 0

    lista.innerHTML = ""
    statusE1.textContent = "Jogo Iniciado!"

    while (vidas > 0 && !acertou){
        const entrada = prompt(`Advinhe (1-50)\nVidas: ${vidas}`)
        if (entrada === null) {
            statusE1.textContent = "Jogo Cancelado"
            return
        }

        const n = Number(entrada)
        if (Number.isNaN(n) || n < 1 || n > 50){
            alert("Digite um número válido entre 1 e 50.")
            continue
        }

        tentativas++

        const li = document.createElement("li")
        li.textContent = `Tentativa ${tentativas}: ${n}` 
        lista.appendChild(li)

        if (n === segredo){
            acertou = true
            alert(`Parábens você acertou! O número era ${segredo}.`)
            statusE1.textContent = `Você acertou em ${tentativas} tentativas.`
        } else {
            vidas--
            alert(n < segredo ? "Dica: é MAIOR" : "Dica: é MENOR")
        }
    }

    if(!acertou && vidas === 0) {
        statusE1.textContent = `Fim de Jogo! Suas vidas acabaram. O numero era ${segredo}`
        alert(`Fim de Jogo! O número era ${segredo}.`)
    }
})