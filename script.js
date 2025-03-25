//Selecionando elementos do DOM
const celulas = document.querySelectorAll('[data-celula]');
const statusJogo = document.getElementById('statusJogo');
const botaoReiniciar = document.getElementById('reiniciar'); // Corrigido

// Variáveis de controle do jogo
let jogadorAtual = 'X';
let jogoAtivo = true;

// Inicialização do status do jogo
statusJogo.textContent = `Vez do Jogador: ${jogadorAtual}`;

// Função para lidar com o clique de célula
function lidarCliqueCelula(e) {
    const celula = e.target;

    if (celula.textContent !== '' || !jogoAtivo) return;

    celula.textContent = jogadorAtual;

    if (verificarVitoria()) {  // Corrigido (adicionado parênteses)
        statusJogo.textContent = `Jogador ${jogadorAtual} venceu!`;
        jogoAtivo = false;
        return;
    } else if (verificarEmpate()) { // Corrigido (adicionado parênteses)
        statusJogo.textContent = `Empate!`;
        jogoAtivo = false;
        return;
    }

    // Troca o jogador atual
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    statusJogo.textContent = `Vez do jogador ${jogadorAtual}`;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    jogadorAtual = 'X';
    jogoAtivo = true; // Corrigido
    statusJogo.textContent = `Vez do Jogador: ${jogadorAtual}`;
    celulas.forEach(celula => celula.textContent = '');
}

// Combinacões vencedoras
const combinacoesVencedoras = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

// Função para verificar vitória
function verificarVitoria() {
    return combinacoesVencedoras.some(combinacao => {
        return combinacao.every(indice => celulas[indice].textContent === jogadorAtual);
    });
}

// Função para verificar se houve empate
function verificarEmpate() {
    return [...celulas].every(celula => celula.textContent !== '');
}

// Adicionar event listeners
celulas.forEach(celula => celula.addEventListener('click', lidarCliqueCelula));
botaoReiniciar.addEventListener('click', reiniciarJogo);
