/**
 * DOM - Document Object Model - Petslist
 *
 * TODO:
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet:
 *
 * NAME is a SPECIES of AGE year(s) old.
 * His owner is OWNER and his favorite hobbies is to HOBBIES.
 */

// Array of pets
// En array med två object (Mr Barksby & Meow Jr)
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	}
];

// for (let i = 0, i < pets.length, i++) {
//         const pet = pets[i];
//     }

// Get a reference to the `<ul>` element in the DOM
const petsListEl = document.querySelector('#petslist'); // #petslist är ett ID som finns i HTML!


// For each pet in pets
// Loop over pets and pass each pet to the function
// för varje sak i 'pets', kör 'pet' (som kan heta vad som helst!
pets.forEach( function(pet) {
    // first time pet will be pets[0]   (Mr Barksby)
    // second time pet will be pets[1]  (Meow Jr)

    // create a string with the info
    let info;

    // does pet have an owner?
    if (pet.owner) {
        // yay, pet had an owner
        info = `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. 
        His owner is ${pet.owner.name} and his favorite hobbies is to ${pet.hobbies}.</li>`;
    } else {
        // pet had no owner :(
        info  = `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. Please adopt him!</li>`;
    }

    // append the string to the `<ul>`'s innerHTML
    petsListEl.innerHTML += info;
});


// KORTARE
/*
pets.forEach( function(pet) {
    let info;
    if (pet.owner) {
        petsListEl.innerHTML +=  `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. 
        His owner is ${pet.owner.name} and his favorite hobbies is to ${pet.hobbies}.</li>`;
    } else {
        petsListEl.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. Please adopt him!</li>`;
    }
});
*/

// Få ut namn ur listan
// pets.forEach( function(pet){
//     // console.log(pet.name);
//     let info = `Pet's name is: ${pet.name}`;
//     console.log(info);
// });

// Albins lösning

// const petList = document.querySelector('ul');

// pets.forEach(pets => {
//     petList.innerHTML += (`<li>${pets.name} is a ${pets.species} of ${pets.age} year(s) old. 
//     His owner is ${pets.owner} and his favorite hobbies is to ${pets.hobbies}.</li>`);
// });