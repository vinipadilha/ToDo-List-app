// script.js

// Função para alternar entre os temas
function toggleTheme() {
    const htmlElement = document.documentElement;
  
    // Verifica se o atributo "data-theme" é "dark"
    if (htmlElement.getAttribute("data-theme") === "dark") {
      // Remove o atributo "data-theme"
      htmlElement.removeAttribute("data-theme");
    } else {
      // Adiciona o atributo "data-theme" com o valor "dark"
      htmlElement.setAttribute("data-theme", "dark");
    }
  }
  
  // Adiciona o evento de clique no botão
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', toggleTheme);
  