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

const teacherPromise = willWeGetTheAnswersToTheExam();
// console.log(teacherPromise);

teacherPromise
	.then( () => {
		console.log('YAY! We will get the exam.');
	})
	.catch( () => {
		console.log('NEY! Teacher was not nice.');
	});

console.log('Promise started.');