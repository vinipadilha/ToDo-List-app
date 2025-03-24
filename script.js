
// Função para alternar entre os temas
function toggleTheme() {
    const htmlElement = document.documentElement;
  
    if (htmlElement.getAttribute("data-theme") === "dark") {
      htmlElement.removeAttribute("data-theme");
    } else {
      htmlElement.setAttribute("data-theme", "dark");
    }
  }
  
const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', toggleTheme);
  
const addTaskButton = document.getElementById('input-btn');
const taskInput = document.getElementById('input-box');
const todoList = document.getElementById('todo-list');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        // Criação de uma nova tarefa
        const taskElement = document.createElement('div');
        taskElement.classList.add('flex', 'items-center', 'space-x-2', 'mb-2');

         // Criação do checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('h-5', 'w-5', 'text-blue-500', 'rounded');

        // Criação do texto da tarefa
        const taskTextElement = document.createElement('span');
        taskTextElement.classList.add('text-gray-800', 'text-lg');
        taskTextElement.textContent = taskText;
        // Adiciona os elementos ao DOM
        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskTextElement);
        todoList.appendChild(taskElement);
        // Limpa o campo de entrada
        taskInput.value = '';
        // Evento para marcar/desmarcar a tarefa
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskTextElement.classList.add('line-through', 'text-gray-400');
            } else {
                taskTextElement.classList.remove('line-through', 'text-gray-400');
            }
        });

    }
});
