const base = document.getElementById('base')
const gerar = document.getElementById('gerar')
const tabela = document.getElementById('tabela')
const tbody = tabela.querySelector('tbody')

gerar.addEventListener('click', () => {
    const n = Number(base.value)
    if (Number.isNaN(n)){
        alert('Digite um numero valido!')
        return
    }

    tbody.innerHTML = ''
    for (let i = 1; i <= 10; i++){
        const tr = document.createElement('tr')
        const expressao = document.createElement('td')
        const resultado = document.createElement('td')

        expressao.textContent = `${n} x ${i}`
        resultado.textContent = n * i
        tr.appendChild(expressao)
        tr.appendChild(resultado)
        tbody.appendChild(tr)
    }

    tabela.hidden = false
})
