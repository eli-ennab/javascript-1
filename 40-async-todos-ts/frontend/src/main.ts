import { ITodo, createTodo, fetchTodos } from "./api";
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

// Local variable containing all the todos from the server
let todos: ITodo[] = []

// Render todos to DOM
const renderTodos = () => {
    document.querySelector('#todos')!.innerHTML = todos
    .filter(todo => !todo.completed)
    .map(todo => `
    <li class="list-group-item" data-todo-id="${todo.id}" data-todo-completed="${todo.completed}">
        ${todo.title}
    </li>
    `)
    .join('')

    document.querySelector('#completed-todos')!.innerHTML = todos
    .filter(todo => todo.completed)
    .map(todo => `
    <li class="list-group-item" data-todo-id="${todo.id}" data-todo-completed="${todo.completed}">
        ${todo.title}
    </li>
    `)
    .join('')
}

/*
* Fetch todos from server and update local copy, then render todos
*/

const getTodos = async () => {
    // Fetch todos from server and update local copy
    todos = await fetchTodos()

    // Render todos
    renderTodos()
}

// Listen for when the Create New Todo form is submitted
document.querySelector('#new-todo-form')?.addEventListener('submit', async (e) => {
    e.preventDefault()

    const newTodoTitle = document.querySelector<HTMLInputElement>('#newTodo')?.value

    if (!newTodoTitle) {
        alert(`That's not a todo.`)
        return
    }

    // Create a new todo object
    const newTodo: ITodo = {
        title: newTodoTitle,
        completed: false
    }

    // POST todo to server
    await createTodo(newTodo)

    // Get the new list of todos from the server
    getTodos()

    // Empty input field
	document.querySelector<HTMLInputElement>('#newTodo')!.value = ''
})

getTodos()

/*
* Tries with FETCH on clicked and updated todo
*/

const updateTodo = async (todoId: Number, data: Object) => {
	const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!res.ok) {
		throw new Error(`Could not update todo, reason: ${res.status} ${res.statusText}`);
	}

	return await res.json();
}

// Listen for not completed todos and change to completed todo
document.querySelector('#todos')?.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement
    let clickedTodoId = target.dataset.todoId
    let completedStatus = target.dataset.todoCompleted

    if (target.tagName === "LI") {
        // Finding the todo's ID
        console.log(`This is a todo with ID:`, clickedTodoId, `with completed status:`, completedStatus)

        // search todos for the todo with the id todoId
		const clickedTodo = todos.find( (todo) => {
			return todo.id == clickedTodoId;
		} )!
		console.log("found clicked todo", clickedTodo);
        
		await updateTodo(clickedTodo.id as Number, {
			completed: !clickedTodo.completed
		});

        getTodos()
    } 
})

// Listen for completed todos and change to not completed todo
document.querySelector('#completed-todos')?.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement
    let clickedTodoId = target.dataset.todoId
    let completedStatus = target.dataset.todoCompleted

    if (target.tagName === "LI") {
        // Finding the todo's ID
        console.log(`This is a todo with ID:`, clickedTodoId, `with completed status:`, completedStatus)

        // search todos for the todo with the id todoId
		const clickedTodo = todos.find( (todo) => {
			return todo.id == clickedTodoId;
		} )!
		console.log("found clicked todo", clickedTodo);
        
		await updateTodo(clickedTodo.id as Number, {
			completed: !clickedTodo.completed
		})

        getTodos()
    }
})
