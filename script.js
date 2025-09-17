document.addEventListener('DOMContentLoaded', () => {

    const botaoExemplo = document.querySelector('#botao-exemplo');
    const paragrafoAlvo = document.querySelector('#paragrafo-alvo');

    // Verifica se os elementos do exemplo existem nesta página
    if (botaoExemplo && paragrafoAlvo) {
        
        botaoExemplo.addEventListener('click', () => {
            // Altera o texto e o estilo do parágrafo
            paragrafoAlvo.textContent = 'Texto alterado com sucesso pelo JavaScript!';
            paragrafoAlvo.style.color = '#5cb85c';
            paragrafoAlvo.style.fontWeight = 'bold';

            // Desabilita o botão após o clique
            botaoExemplo.textContent = 'Feito!';
            botaoExemplo.disabled = true;
        });
    }

    console.log("Página do curso carregada.");
});