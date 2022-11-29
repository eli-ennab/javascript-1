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
		throw new Error(`Response was not OK. Status returned was "${res.status} ${res.statusText}".`);
	}
	return await response.json();					// returns a promise (the result of the promise when resolved)
}

const getNewCat = async () => {
	console.log('New cat.');

	const cat = await getJSON(`${baseURL}/cat?json=true`)
	document.querySelector('#catImg').src = baseURL + cat.url;
}

document.querySelector('#getCatBtn').addEventListener('click', () => {
	getNewCat();
});

// Start of with a cat
getNewCat();

