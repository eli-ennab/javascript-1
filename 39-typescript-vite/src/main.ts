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
	/*
	// transform todos into a string-array of `<li>`elements
	const listitems = todos.map(todo => {
		return `<li class="list-group-item">${todo}</li>`
	})

	// implode li-array to a single string
	const output = listitems.join('')

	// replace todosList content
	todosList.innerHTML = output
	*/

	// same as...

	// replace todosList content
	todosList.innerHTML = todos
	.map(todo => 
		`<li class="list-group-item ${todo.completed ? 'completed' : ''}">
			${todo.title}
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

	// push todo into list of todos
	const newTodo: Todo = {
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
