/**
 * Todos
 * Developing the todo-workshop with
 * HTML data-* Attribute 
*/

// Get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// List of todos
const todos = [
	{
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		title: "Learn DOM",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

// Render todos to DOM
const renderTodos = () => {
    todosEl.innerHTML = '';
    todos.forEach(todo => {
        if (todo.completed) {
            todosEl.innerHTML += `<li class="list-group-item completed">${todo.title}</li>`;
        } else {
        todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
        }
    });
};
renderTodos();

// Listen for click-events on the `#todos` (the `<ul>`)
todosEl.addEventListener('click', (e) => {
    // Check if user clickes on a LI element
    if (e.target.tagName === "LI") {
        const clickedTodoTitle = e.target.innerText;
        // Search todos for the todo with the title clickedTodoTitle
        const clickedTodo = todos.find( (todo) => {
            return todo.title === clickedTodoTitle;
        } );

        // Change completed status of found todo
        clickedTodo.completed = !clickedTodo.completed;

        // Render updated todos
        renderTodos();
    }
});

// Create a new todo when form is submitted
newTodoFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    // Create and push new todo into array
    todos.push({
        title: newTodoFormEl.newTodo.value,
        completed: false
    });

    // Render new todo to DOM
    renderTodos();

    // Reset form
    newTodoFormEl.reset();
});


