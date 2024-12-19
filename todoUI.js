// Handle UI operations
const TodoUI = {
    todoList: document.getElementById('todo-list'),

    createTodoElement(todo) {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.dataset.id = todo.id;

        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${this.escapeHtml(todo.text)}</span>
            <button class="delete-btn">×</button>
        `;

        return li;
    },

    renderTodos(todos) {
        this.todoList.innerHTML = '';
        todos.forEach(todo => {
            this.todoList.appendChild(this.createTodoElement(todo));
        });
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    addTodo(todo) {
        this.todoList.appendChild(this.createTodoElement(todo));
    },

    removeTodo(id) {
        const todo = this.todoList.querySelector(`[data-id="${id}"]`);
        if (todo) {
            todo.remove();
        }
    },

    toggleTodoComplete(id) {
        const todo = this.todoList.querySelector(`[data-id="${id}"]`);
        if (todo) {
            todo.classList.toggle('completed');
        }
    }
};
