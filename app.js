let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeroAleatorio;

    let diferenca = quantidade - (ate - de)
    
    if (isNaN(de) || isNaN(ate) || isNaN(quantidade)) {
        alert(`É necessário preencher todos os parametros para sortear. Tente novamente`);
        return;
    }

    if (diferenca > quantidade) {
        alert(`Não é possível gerar os números. A quantidade deve ser maior que a diferença do intervalo.`)
        reiniciar();
        return;
    }

    if (de > ate) {
    alert(`${de} é maior que ${ate}. Preencha novamente com números válidos.`);
    
    reiniciar();

    } else {
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
}

function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('texto-sorteio').innerText = `Números sorteados:  nenhum até agora`;

    alterarBotaoReiniciar();
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('texto-sorteio').innerText = `Números sorteados:  nenhum até agora`;
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