/**
 * DOM 102 + events
 *
 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists
 */

// get a reference to the button
const btnAdd = document.querySelector('#add');

// WHEN someone CLICKS on the BUTTON
btnAdd.addEventListener('click', () => {
	// DO this
	console.log("Added a new list item.");

	// GET reference to ALL `li` elements and their LENGTH
	const liCount = document.querySelectorAll('li').length;

	// will *REPLACE* all content in the element with
	// a NEW string that contains both the old and the new content
	document.querySelector('ul').innerHTML += `<li>list item ${liCount + 1}</li>`;

	/*
	// ANOTHER way to create elements that does NOT replace the old content,
	// only appends it
	// create a new `li` element and add some content
	const newLiEl = document.createElement('li');
	newLiEl.innerText = "i am new list item 👶🏽";
	// append the new element to the `ul` list
	document.querySelector('ul').append(newLiEl);
	*/
});

// för varje `li`
/*
document.querySelectorAll('li').forEach(liEl => {

	// lägg till en click-eventlyssnare som loggar något till konsolen
	liEl.addEventListener('click', (e) => {
		console.log("yey someone clicked on me", e.target);

		// if target has class `completed`, remove it
		// if target DOES NOT have class `completed`, add it
		e.target.classList.toggle("completed");
	});
});
*/

// för ul
// lyssna efter klick på hela listan
document.querySelector('ul').addEventListener('click', (e) => {
	console.log("hello, i am Saman, you clicked me", e.target);

    // OM tagname är LI, GÖR någonting
    if (e.target.tagName === "LI") {
		e.target.classList.toggle("completed");	// completed är klassen 'completed'
    }

        // Stoppa event bubbling (AKA propagate)
        e.stopPropagation();
});

// add click-event listener to the link
document.querySelector('a').addEventListener('click', e => {

    // this will be executed whenever someone clicks on the link
    // alert('Are you sure?');

    // prevent user from ever leaving our site
    e.preventDefault();		// stoppar standardbeteendet i t.ex. formulär
    alert('You can check in but you can never leave.');
});