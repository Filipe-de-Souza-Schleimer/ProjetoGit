// --- Dia 3: Manipulando o DOM de forma moderna ---

// Executa o nosso código apenas quando o HTML estiver totalmente carregado.
// Isso é uma boa prática para evitar erros de "elemento não encontrado".
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão de troca de tema e o body do documento
    const themeToggleButton = document.querySelector('#theme-toggle');
    const body = document.body;

    // Função para alternar o tema
    const toggleTheme = () => {
        // Adiciona ou remove a classe 'theme-dark' do body.
        // O método .toggle() faz isso automaticamente.
        body.classList.toggle('theme-dark');

        // Atualiza o texto do botão para refletir o estado atual
        // e salva a preferência do usuário.
        if (body.classList.contains('theme-dark')) {
            themeToggleButton.textContent = 'Mudar para Modo Claro';
            // Bônus: Salva a preferência no navegador
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleButton.textContent = 'Mudar para Modo Escuro';
            // Bônus: Salva a preferência no navegador
            localStorage.setItem('theme', 'light');
        }
    };

    // Adiciona o "ouvinte de evento" ao botão.
    // A função toggleTheme será chamada toda vez que o botão for clicado.
    themeToggleButton.addEventListener('click', toggleTheme);


    // Bônus: Verifica se o usuário já tem uma preferência de tema salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        // Se a preferência salva for 'dark', aplicamos o tema escuro ao carregar a página.
        // Chamamos a função para garantir que o texto do botão também seja atualizado.
        toggleTheme(); 
    }
});