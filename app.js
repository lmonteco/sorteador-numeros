
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeroAleatorio;

    for (let i = 0; i < quantidade; i++) {
        numeroAleatorio = gerarNumeroAleatorio(de, ate);
        numerosSorteados.push(numeroAleatorio);
    }    
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}