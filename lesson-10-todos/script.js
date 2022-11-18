/**
 * Todos
 * Developing the todo-workshop with
 * HTML data-* Attribute 
*/

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	{
		id: 1,
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		id: 2,
		title: "Learn Array Methods",
		completed: false,
	},
	{
		id: 3,
		title: "Take over the world",
		completed: false,
	},
];

// Render todos to DOM
const renderTodos = () => {

	const lis = todos.map(todo => {
		let cssClasses = "list-group-item";

		if (todo.completed) {
			cssClasses += " completed";   // "list-group-item completed"
		}

		return `
			<li class="${cssClasses}" data-todo-id="${todo.id}">
				${todo.title}
			</li>
		`;

	});

    todosEl.innerHTML = lis.join('');
}
renderTodos();

// Listen for click-events on `#todos` (the `<ul>`)
todosEl.addEventListener('click', (e) => {
	// console.log("You clicked on either the whole list, or on a listitem", e.target);

	// check if user clicked on a LI element
	if (e.target.tagName === "LI") {

		// get the `data-todo-id` attribute from the LI element
		const clickedTodoId = e.target.dataset.todoId;     // `data-todo-id`
		console.log("You clicked on the listitem for todo with id:", clickedTodoId);

		// search todos for the todo with the id todoId
		const clickedTodo = todos.find( (todo) => {
			return todo.id == clickedTodoId;
		} );

		// change completed-status of found todo
		clickedTodo.completed = !clickedTodo.completed;

		// render updated todos
		renderTodos();
	}
});

// Create a new todo when form is submitted
newTodoFormEl.addEventListener('submit', (e) => {
	// Prevent form from being submitted (to the server)
	e.preventDefault();

    // extract all todo-ids
    const maxTodoId = todos.reduce((maxId, todo) => {
            return Math.max(todo.id, maxId);

            // return (todo.id > maxId) 
            // ? todo.id
            // : maxId;

            // if (todo.id > maxId) {
            //     return todo.id;
            // } 
            
            // return maxId;
    }, 0);
    const newTodoId = maxTodoId + 1;

    // Create and push new todo into array
	todos.push({
        id: newTodoId,
		title: newTodoFormEl.newTodo.value,
		completed: false,
	});
	console.log("created new todo...");

	// Render new todo to DOM
	renderTodos();

	// Empty input field
	// newTodoFormEl.newTodo.value = '';

	// Reset form
	newTodoFormEl.reset();
});

/*
// STOP USER FROM RESETTING FORM 😈
newTodoFormEl.addEventListener('reset', e => {
	// YOU NO RESET FORM, FORM RESETS YOU!
	e.preventDefault();
	alert("YOU NO RESET FORM, FORM RESETS YOU!");
});
*/