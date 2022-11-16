/**
 * Todos
 *
 * STEG 1
 * Loopa över todos och för varje todo, skriv ut en
 * `<li class="list-group-item">` till #todos med titeln på todo:n.
 *
 * STEG 2
 * Koppla ihop formuläret så att det skapas en nytt TODO-objekt som
 * stoppas in i `todos`-array:en när formuläret submit:as.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 * STEG 3 (FIND?)
 * När man klickar på en todo, hitta todo:n som klicket skedde på,
 * leta upp todo-objektet och ändra `completed` till `true`.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
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

todos.forEach(todo => {
    todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
});

// WHEN someone CLICKS on the BUTTON
newTodoFormEl.addEventListener('submit', (e) => {
	// DO this
	console.log("New list item submitted.", e.target);

	// GET reference to ALL `li` elements and their LENGTH
	// const newListItem = document.querySelectorAll('li');

	// find the input value
	const inputListItem = document.getElementById('newTodo').value;

	// will *REPLACE* all content in the element with
	// a NEW string that contains both the old and the new content
	if (inputListItem === "") {
		return false;
	} else {
	document.querySelector('ul').innerHTML += `<li class="list-group-item">${inputListItem}</li>`;
	}

	// STOP event from bubbling up (propagate)
	e.stopPropagation();

	// Prevent default
	e.preventDefault();
});

// lyssna efter klick på hela listan
document.querySelector('ul').addEventListener('click', (e) => {
	// console.log("Added class completed.", e);

	// OM tagName är LI, GÖR någonting
	if (e.target.tagName === "LI") {
		e.target.classList.add("completed");

	// STOP event from bubbling up (propagate)
	e.stopPropagation();
	}
});
