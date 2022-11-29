/**
 * Cat of the Day
 *
 * <https://cataas.com/>
 * <https://cataas.com/cat?json=true>
 */ 

// // My solution
// const catImg = document.querySelector('#catImg');

//  const getCat = async () => {
// 	const response = await fetch('https://cataas.com/cat?json=true');
// 	if(!response.ok) {
// 		throw new Error("Response was not OK.");
// 	}
// 	const cat = await response.json();

// 	catImg.src = `https://cataas.com/${cat.url}`;
// };

// document.querySelector('#getCatBtn').addEventListener('click', () => {
// 	getCat();
// });

// // Start of with a
// getCat();

// -----------------------------------------------------------------------------------------------------------------

// Johans solution
const baseURL = 'https://cataas.com';

const getJSON = async(url) => {
	const response = await fetch(url);				// we want to wait (await) for the promise to be resolved (fetch)
	if (!response.ok) {
		throw new Error(`Response was not OK. Status returned was "${response.status} ${response.statusText}".`); // throws the error
	}
	return await response.json();					// returns a promise (the result of the promise when resolved)
}

const getNewCat = async () => {
	const errorEl = document.querySelector('#error');
	errorEl.classList.add('hide');

	try {
		const cat = await getJSON(`${baseURL}/cat?json=true`);
		document.querySelector('#catImg').src = baseURL + cat.url;
	} catch (e) {									// e is error/exception and catches all the errors happening in the block
		console.log('Caught the error', e);

		// Show error message for user
		errorEl.innerText = e;
		errorEl.classList.remove('hide');
	} finally {
		// Do this either if success or fail
	}
}

document.querySelector('#getCatBtn').addEventListener('click', () => {
	getNewCat();
});

// Start of with a cat
getNewCat();

