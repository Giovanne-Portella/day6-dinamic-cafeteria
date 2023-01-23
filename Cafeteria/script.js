var card = document.createElement('a')

function aparecerBotao() {
    card.id = 'botao'
    card.className = 'btn w-75 align-self-center ms-3 mb-3 position-center'
    card.style.backgroundColor = '#2A3342'
    card.style.color = '#FFFFFF'
    card.href = '#'
    card.textContent = 'COMPRAR AGORA'
    card.onmouseover = 'aparecerBotao()'
    if (document.getElementById('botao')) {
        card.remove
    }
    document.onmouseover = function(){
        var id = event.target.id
        document.getElementById(id).appendChild(card)
    }
}

function removerBotao() {
    document.getElementById('botao').style.backgroundColor = '#FFFFFF'
}