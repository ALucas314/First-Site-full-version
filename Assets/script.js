// Função para alternar entre os modos claro e escuro
function toggleMode() {
    const body = document.body;

    // Adicionar/Remover uma classe para alternar entre os modos claro e escuro
    body.classList.toggle('light-mode');

}

//código para verificar a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const body = document.body;
    body.classList.toggle('light-mode', !prefersDarkMode);
});
