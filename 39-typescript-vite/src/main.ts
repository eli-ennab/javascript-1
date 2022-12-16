import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

// specification
type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

// get JSON-todos from local storage
const json = localStorage.getItem('todos') ?? '[]'

// parse JSON-todos into an array of todo-objects
const todos: Todo[] = JSON.parse(json)

// render todos
const renderTodos = () => {

	// replace todosList content
	todosList.innerHTML = todos
	.map(todo => 
		`<li class="list-group-item ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">
			${todo.title}
		</li>`)
	.join('')
}

// save todos
const saveTodos = () => {
	// convert todos-array to JSON
	const json = JSON.stringify(todos)

	// save JSON to localStorage
	localStorage.setItem('todos', json)
}

// Create a new todo form
newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!.value
	if (newTodoTitle.length < 3) {
		alert('Too short todo')
		return
	}

    // find maximum id in todos-array
	const todoIds = todos.map(todo => todo.id)
	const maxId = Math.max(0, ...todoIds)

	// push todo into list of todos
	const newTodo: Todo = {
		id: maxId + 1,
		title: newTodoTitle,
		completed: false
	}
	todos.push(newTodo)
	// console.log(todos)

	/*
	* save todos to localStorage
	*/
	saveTodos()

	// empty input field
	document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()

// Click event on ul
todosList.addEventListener('click', e => {
	e.preventDefault()

	const target = (e.target as HTMLElement)

	if (target.tagName === "LI") {
		// find id of clicked todo
		const todoId = Number(target.dataset.todoId)

		// find the todo with the id of the clicked todo
		const foundTodo = todos.find(todo => todo.id === todoId)

		// if we found the todo, toggle it's completed status
		if (foundTodo) {
			foundTodo.completed = !foundTodo.completed

			/*
			* save todos to localStorage
			*/
			saveTodos()
		}
	} 

	// render updated todos
	renderTodos();
})