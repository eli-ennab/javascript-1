import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

interface ITodo {
    id?: number,
    title: string,
    completed: boolean,
}

// Local variable containing all the todos from the server
let todos: ITodo[] = []

/**
 * Post a todo to the server
 */

const createTodo = async (newTodo: ITodo) => {
    const res = await fetch('http://localhost:3001/todos', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(newTodo),})

        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`)
        }
    
        return await res.json() as ITodo
}

/*
* Fetch todos from server
*/

const fetchTodos = async () => {
    const res = await fetch('http://localhost:3001/todos')
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
    }

    return await res.json() as ITodo[]    // omvandla data och sedan tolka datan som interface (en array av todos): ITodo[]
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

// Render todos to DOM
const renderTodos = () => {
    document.querySelector('#todos')!.innerHTML = todos
    .filter(todo => !todo.completed)
    .map(todo => `
    <li class="list-group-item"  data-todo-id="${todo.id}">
        ${todo.title}
    </li>
    `)
    .join('')

    document.querySelector('#completed-todos')!.innerHTML = todos
    .filter(todo => todo.completed)
    .map(todo => `
    <li class="list-group-item" data-todo-id="${todo.id}">
        ${todo.title}
    </li>
    `)
    .join('')
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

// function updateTodo(): ITodo {
//     const completedTodo: ITodo = {
//         ...todos,
//         completed: true
//     }

//     return completedTodo
// }

// function updateClickedTodo(): ITodo {
    // Listen for not completed todos and change to completed todo
    document.querySelector('#todos')?.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement
        let todos = document.getElementById("todos") as HTMLDivElement;
        let completedTodos = document.getElementById("completed-todos") as HTMLDivElement;
        let id = target.dataset.todoId

        if (target.tagName === "LI") {
            // Finding the todo's ID
            console.log(`This is the todo's ID:`, id)

            // Remove the list item from its current parent div
            todos.removeChild(target);

            // Add the list item to the new div
            completedTodos.appendChild(target);
        } 
    });

    // Listen for completed todos and change to not completed todo
    document.querySelector('#completed-todos')?.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement
        let todos = document.getElementById("todos") as HTMLDivElement;
        let completedTodos = document.getElementById("completed-todos") as HTMLDivElement;
        let id = target.dataset.todoId

        if (target.tagName === "LI") {
            // Finding the todo's ID
            console.log(`This is the todo's ID:`, id)
            
            // Remove the list item from its current parent div
            completedTodos.removeChild(target);

            // Add the list item to the new div
            todos.appendChild(target);
        } 
    });
// }

// updateClickedTodo():
