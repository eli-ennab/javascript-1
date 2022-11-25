/**
 * Cat of the Day
 *
 * <https://cataas.com/>
 * <https://cataas.com/cat?json=true>
 */

const catImg = document.querySelector('#catImg');

 const getCat = async () => {
	const response = await fetch('https://cataas.com/cat?json=true');
	if(!response.ok) {
		throw new Error("Response was not OK.");
	}
	const cat = await response.json();

	catImg.src = `https://cataas.com/${cat.url}`;
};

document.querySelector('#getCatBtn').addEventListener('click', () => {
getCat();
});

// Start of with a
getCat();