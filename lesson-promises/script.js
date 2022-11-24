/**
 * Promises 101
 * 
 */

 const getJSON = (url, callback) => {
	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Attach an event-listener to the request
	request.addEventListener('readystatechange', () => {
		// Check if readyState is 4 (=== DONE)
		if (request.readyState === 4) {

			// Was the request successful (200 = OK)?
			if (request.status === 200) {
				// Request was 200 OK!

				// take the STRING in responseText and PARSE it into JavaScript object
				const data = JSON.parse(request.responseText);

				// invoke(call) callback
				callback( undefined, data );

			} else {
				// Something went wrong :'(
				console.log("ERROR ERROR DANGER WILL ROBINSON!");

				// invoke(call) callback
				callback( "Could not get data" );
			}
		}
	});

	request.open('GET', url);  // Set request to GET data
	request.send();  // Send the request
	console.log("Request sent!");
}

// Get cats
getJSON('data/cats.json', (err, cats) => {
	if (err) {
		alert("Could not get list of cats! Error was:" + err);
		return;
	}

	// Got cats!
	console.log("Got lists of cats:", cats);

	// Get doggos
	getJSON('data/dogs.json', (err, dogs) => {
		// Got dogs!
		console.log("Got lists of dogs:", dogs);

		// Get birds
		getJSON('data/birds.json', (err, birds) => {
		// Got birds!
		console.log("Got lists of birds:", birds);
		});
	});
});

// CALLBACK HELL
getJSON('data/cats.json', (err, cats) => {
	// Get doggos
	getJSON('data/dogs.json', (err, dogs) => {
		// Get birds
		getJSON('data/birds.json', (err, birds) => {
		})
	})
});

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