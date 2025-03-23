
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeroAleatorio;

    for (let i = 0; i < quantidade; i++) {
        numeroAleatorio = gerarNumeroAleatorio(de, ate);
        
        while (numerosSorteados.includes(numeroAleatorio)) {
            console.log('tenho que gerar de novo');            
            numeroAleatorio = gerarNumeroAleatorio(de, ate);
        }

        numerosSorteados.push(numeroAleatorio);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    console.log(numerosSorteados);
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}