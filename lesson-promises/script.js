/**
 * Promises 101
 * 
 */

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