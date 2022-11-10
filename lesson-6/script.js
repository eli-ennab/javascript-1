/**
 * DOM 102 + events
 *
 */

// get a reference to the button
const btnAdd = document.querySelector('#add');

// WHEN someone CLICKS on the BUTTON
btnAdd.addEventListener('click', () => {
	// DO this
	console.log("oh, nice");

	// GET reference to ALL `li` elements and their LENGTH
	const liCount = document.querySelectorAll('li').length;

	document.querySelector('ul').innerHTML += `<li>list item ${liCount + 1}</li>`;
});

// för varje `li`
document.querySelectorAll('li').forEach(liEl => {

    // lägger till en click-eventlyssnare som loggar något till konsolen
    liEl.addEventListener('click', (e) => {
        console.log("Yay, someone clicked on me!", e.target);

        // Den som klickas kommer ändra text!
        // e.target.innerHTML = "You clicked me...";

        // Varje klickad får en class som completed
        // e.target.classList.add('completed');

        // Lägger till om den inte har klassen, tar bort om den har
        // Toggle mellan done and undone, eller som en strömbrytare
        // if target has class `completed`, remove it
        // if target DOES NOT has class `completed`, add it
        e.target.classList.toggle("completed");
    });
});