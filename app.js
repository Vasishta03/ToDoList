// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    TodoUI.renderTodos(TodoStorage.getTodos());

    // Form submission
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        
        if (text) {
            const newTodo = TodoStorage.addTodo(text);
            TodoUI.addTodo(newTodo);
            todoInput.value = '';
        }
    });

    // Event delegation for todo list
    document.getElementById('todo-list').addEventListener('click', (e) => {
        const todoItem = e.target.closest('.todo-item');
        if (!todoItem) return;

        const id = parseInt(todoItem.dataset.id);

        if (e.target.classList.contains('delete-btn')) {
            TodoStorage.deleteTodo(id);
            TodoUI.removeTodo(id);
        } else if (e.target.classList.contains('todo-checkbox')) {
            TodoStorage.toggleTodo(id);
            TodoUI.toggleTodoComplete(id);
        }
    });
});
