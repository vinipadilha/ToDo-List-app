// script.js

// Selecionar o botão de alternância de tema
const toggleButton = document.getElementById('toggle-theme');

// Função para alternar entre modo claro e escuro
toggleButton.addEventListener('click', () => {
  // Alternar a classe 'dark' no elemento <html> (isso ativa/desativa o modo escuro)
  document.documentElement.classList.toggle('dark');
});
