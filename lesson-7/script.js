/**
 * Form and form events
*/

const contactForm = document.querySelector('#contact');

contactForm.addEventListener('submit', e => {
		// prevent form from being submitted
		e.preventDefault();

		console.log('Form submitted but default behaviour prevented.');

        console.log("First name:", contactForm.first_name.value);
        console.log("Last name:", contactForm.last_name.value);
});

// contactForm.first_name.value