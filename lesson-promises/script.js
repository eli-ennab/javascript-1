/**
 * Promises 101
 * 
 */

/*
const teacherIsNice = true;
// const teacherIsNice = false;

const willWeGetTheAnswersToTheExam = () => {
	return new Promise ( (resolve, reject) => {
		// do something that takes some time to do
		// and when done, either resolve or reject the promise
		setTimeout(() => {
			if (teacherIsNice) {
				const data = [42, 1337, 1, 13];
				resolve(data);
			} else {
			reject("You no answers get.");
			}
		}, 2000);
	} );
};

// Get promise of answers
willWeGetTheAnswersToTheExam()
	.then( (data) => {			// resolved
		console.log('YAY! We will get the answers to the exam.', data);
		alert('YAY! We will get the answers to the exam.');
	})
	.catch( (err) => {			// rejected
		console.log('NEY! Teacher was not nice.', err);
		alert('NEY! Teacher was not nice.');
	});

console.log('Promise started.');
*/

const getJSON = (url) => {
	return new Promise( (resolve, reject) => {
		// Get the data we promised
		const request = new XMLHttpRequest();

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4) {
				if (request.status === 200) {
					const data = JSON.parse(request.responseText);
					resolve(data);  // resolve promise and pass along the data

				} else {
					reject(`Could not get data, response status: ${request.status}`);  // reject promise and pass along reason
				}
			}
		});

		request.open('GET', url);  // Set request to GET data
		request.send();  // Send the request
	} );
}

console.log("Getting data...");
getJSON('data/cats.json')		// a promise-object
	.then(cats => {
		console.log("Got cats?", cats);

		getJSON('data/dogs.json')
			.then(dogs => {
				console.log("Got dogs?", dogs);
			})
			.catch(err => {
				console.log("No doggos found, reason:", err);
			});

	})
	.catch(err => {
		console.error("NO CATS 4 U! Reason:", err);
	})
	.finally(() => {	// no matter if it's resolved or rejected
		// hide loading spinner for example
		console.log("FINALLY DONE.");
	});