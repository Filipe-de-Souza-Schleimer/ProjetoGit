// Aguarda o documento HTML ser completamente carregado para executar o código.
document.addEventListener('DOMContentLoaded', function() {

    // 1. Encontrar o botão no HTML pelo seu ID
    const botaoDeTeste = document.getElementById('botao-teste');

    // 2. Adicionar um "ouvinte de evento" que espera por um clique no botão
    botaoDeTeste.addEventListener('click', function() {
        
        // 3. Quando o botão for clicado, exibe uma caixa de alerta
        alert('Parabéns! Você acaba de interagir com a página usando JavaScript!');
    });

});