// Fisher-Yates Shuffle
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

const names = ["Abdirahman Ali", "Albin Lindeborg", "Alexander Olsson", "Amer El-Jechi", "Amin Hassani", "André Lang", "Andreas Gustafsson", "Andreas Xu", "Arden Haldorson", "Asenakew Zegeye", "Astrid Lindfors", "Bob Oskar Kindgren", "Christine Nilsson", "Daniella Dam", "Elina Ennab", "Felicia Gartz Levin", "Gunnar Omander", "Hanna Björling", "Harald Henriksson", "Helga Börjesson", "Isak Westerberg", "Jimmy Nguyen", "Joakim Ottosson", "Jonas Nilsson", "Kristopher Gray", "Linnea Saxvik", "Linus Ohlander", "Louise Keinström", "Louise Murray", "Ludvig Lundberg", "Malin Kyttä", "Måns Edenfalk", "Marcus Birgersson", "Maryia Tamasheuskaya", "Michelle Klemendz", "Mohammad Mzien", "Nastassia Martin", "Patrik He", "Philippe Le Gall", "Sandra Vidalin", "Simon Bengtsson", "Sofia Travnicek Mattiasson", "Sonja Svidén", "Tanja Söderholm", "Viktor Pettersson"];

// shuffleArray(names);
// console.log("Dissy students:", names);

shuffleArray(names);
console.log("Shuffled student:", names[0]);








// Click event
// Promise with fetch
// const getJoke = () => {
// 	document.querySelector('#getJokeBtn').addEventListener('click', () => {
// 		fetch('https://api.chucknorris.io/jokes/random')
// 		.then(response => {
// 			if(!response.ok) {
// 				throw new Error("Response was not OK.");
// 			}

// 			// output joke
// 			return response.json();
// 		})
// 		.then(joke => {
// 			// console.log("Joke:", joke);
// 			document.querySelector('#joke').innerText = joke.value;
// 		})
// 		.catch(err => {
// 			console.log("Could not fetch joke. Reason:", err);
// 			document.querySelector('#joke').innerText = "ERROR. You don't summon Chuck Norris, Chuck Norris summons you.";
// 		});
// 	})
// };

// getJoke();