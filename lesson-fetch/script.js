/**
 * Fetch
 * 
 */

fetch('data/cats.json')
	.then(response => {
		console.log("Response:", response);
		// check if response was ok
		if (!response.ok) {
			throw new Error("Response was not OK!");
		}
		return response.json()
	})
	.then(data => {
		console.log("Gots data:", data);
	})
	.catch(err => {
		console.log("Something went wrong:", err);
	});

fetch('data/dogs.json')
	.then(response => {
		if (!response.ok) {
			throw new Error("Response was not OK!");
		}
		return response.json()
	})
	.then(data => {
		console.log("Gots data:", data);
	})
	.catch(err => {
		console.log("Something went wrong:", err);
	});




