/**
 * Async & await
 * 
 */

const getJSON = async (url) => {		// async function, promise
	// fetch url
	// return "i love promises";
	const response = await fetch(url);	// await that the promise will be fulfilled and the result will be in 
										// 'response'
	// check if response was ok
	if (!response.ok) {
		throw new Error("Response was not OK!");
	}

	// parse from json
	const data = await response.json(); // takes response and omvandlar det som vi kan använda i javascript

	// profit
	return data;						// result of the promise that we return
}

const res = getJSON('data/dogs.json')	// promise
	.then(data => {						// data = what is returned in getJSON
		console.log("Data:", data);
	});

console.log("Res:", res);






