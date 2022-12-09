import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

interface ITodo {
    id: number,
    title: string,
    completed: boolean,
}

// Local variable containing all the todos from the server
let todos: ITodo[] = []

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
    console.log(todos)

    // Render todos
    renderTodos()
}

// Render todos to DOM
const renderTodos = () => {
    document.querySelector('#todos')!.innerHTML = todos
    .map(todo => `<li>${todo.title}</li>`)
    .join('')
}

getTodos()
