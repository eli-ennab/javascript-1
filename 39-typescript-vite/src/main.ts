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

// list of todos
const todos: Todo[] = [
	{
		id: 1,
		title: "Learn basic Javascript",
		completed: true,
	},
	{
		id: 2,
		title: "Learn advanced Javascript",
		completed: true,
	},
	{
		id: 3,
		title: "Learn basic TypeScript",
		completed: false,
	},
]

// render todos
const renderTodos = () => {

	// replace todosList content
	todosList.innerHTML = todos
	.map(todo => 
		`<li class="list-group-item ${todo.completed ? 'completed' : ''}">
			${todo.title} with id: ${todo.id}
		</li>`)
	.join('')
}

// Create a new todo form
newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!.value
	if (newTodoTitle.length < 3) {
		alert('Too short todo')
		return
	}

    // extract all todo-ids
    const maxTodoId = todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, 0);
	
	const newTodoId = maxTodoId + 1;

	// push todo into list of todos
	const newTodo: Todo = {
		id: newTodoId,
		title: newTodoTitle,
		completed: false
	}
	todos.push(newTodo)
	// console.log(todos)

	// empty input field
	document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()
