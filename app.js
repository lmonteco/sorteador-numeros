function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeroAleatorio;

    for (let i = 0; i < quantidade; i++) {
        numeroAleatorio = gerarNumeroAleatorio(de, ate);
        
        while (numerosSorteados.includes(numeroAleatorio)) {
            numeroAleatorio = gerarNumeroAleatorio(de, ate);
        }

        numerosSorteados.push(numeroAleatorio);
    }

    alterarTextoSorteio(numerosSorteados); 

    alterarBotaoReiniciar();
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('texto-sorteio').innerText = `Números sorteados:  nenhum até agora`;

    alterarBotaoSortear();

    alterarBotaoReiniciar();
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function alterarBotaoSortear() {
    let botao = document.getElementById('btn-sortear');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function alterarTextoSorteio(valor) {
    document.getElementById('texto-sorteio').innerText = `Números sorteados: ${valor}`;
}