// Handle todo storage operations
const TodoStorage = {
    KEY: 'todos',

    getTodos() {
        const todos = localStorage.getItem(this.KEY);
        return todos ? JSON.parse(todos) : [];
    },

    saveTodos(todos) {
        localStorage.setItem(this.KEY, JSON.stringify(todos));
    },

    addTodo(text) {
        const todos = this.getTodos();
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        todos.push(newTodo);
        this.saveTodos(todos);
        return newTodo;
    },

    toggleTodo(id) {
        const todos = this.getTodos();
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos(todos);
        }
    },

    deleteTodo(id) {
        const todos = this.getTodos();
        const filteredTodos = todos.filter(t => t.id !== id);
        this.saveTodos(filteredTodos);
    }
};
