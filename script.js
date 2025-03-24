
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
        // cria nova tarefa
        const taskElement = document.createElement('div');
        taskElement.classList.add('flex', 'items-center', 'space-x-2', 'mb-2');

        // cria checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('h-4', 'w-4', 'text-blue-500', 'rounded', 'cursor-pointer');

        // cria o texto da tarefa
        const taskTextElement = document.createElement('p');
        taskTextElement.classList.add('text-gray-800', 'font-medium', 'dark:text-gray-300');
        taskTextElement.textContent = taskText;

        // Adiciona um elemento dentro do outro
        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskTextElement);
        todoList.appendChild(taskElement);

        // LIMPA O INPUT
        taskInput.value = '';

        // Marca e desmarca tarefas
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskTextElement.classList.add('line-through', 'text-gray-400');
            } else {
                taskTextElement.classList.remove('line-through', 'text-gray-400');
            }
        });

    }
});
