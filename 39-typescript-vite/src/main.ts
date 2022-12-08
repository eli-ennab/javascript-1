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
		`<li class="list-group-item ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">
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

    // find maximum id in todos-array
	const todoIds = todos.map(todo => todo.id)
	const maxId = Math.max(...todoIds)

	// push todo into list of todos
	const newTodo: Todo = {
		id: maxId + 1,
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
		}
	} 

	// render updated todos
	renderTodos();
})
