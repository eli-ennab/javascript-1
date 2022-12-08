import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

// list of todos
const todos: string[] = []
// console.log(todos)

// render todos
const renderTodos = () => {
	todosList.innerHTML = ''

	todos.forEach(todo => {
		todosList.innerHTML += `<li class="list-group-item">${todo}</li>`
	})
}

// Create a new todo form
newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const inputNewTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!
	const newTodoTitle = inputNewTodoTitle.value

	// push todo into list of todos
	todos.push(newTodoTitle)
	// console.log(todos)

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()
