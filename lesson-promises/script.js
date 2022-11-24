/**
 * Promises 101
 *
 */

const teacherIsNice = true;

const willWeGetTheAnswersToTheExam = () => {
	return new Promise ( (resolve, reject) => {
		// do something that takes some time to do
		// and when done, either resolve or reject the promise
		setTimeout(() => {
			if (teacherIsNice) {
				resolve();
			} else {
			reject();
			}
		}, 2000);
	} );
};

// Get promise of answers
willWeGetTheAnswersToTheExam()
	.then( () => {
		console.log('YAY! We will get the answers to the exam.');
		alert('YAY! We will get the answers to the exam.');
	})
	.catch( () => {
		console.log('NEY! Teacher was not nice.');
		alert('NEY! Teacher was not nice.');
	});

console.log('Promise started.');