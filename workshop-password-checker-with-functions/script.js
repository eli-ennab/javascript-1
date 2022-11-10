/**
 * Workshop: Password Checker with functions
 *
 * STEG 1
 * Istället för att vi har lösenordet hårdkodat (dvs vi testar samma lösenord
 * alltid), fråga användaren efter ett lösenord och berätta därefter om det
 * är ett säkert lösenord eller ej.
 *
 * STEG 2
 * Lägg koden för att hitta antalet specialtecken i en egen funktion som tar
 * emot lösenordet att kontrollera som en parameter, och returnerar antalet
 * specialtecken som hittades i det mottagna lösenordet.
 *
 * Byt ut specialCharCount i if-satserna till att kalla på din nya funktion
 * och kolla att allt fortfarande fungerar.
 *
 * STEG 3
 * Berätta för användaren om lösenordet var säkert eller ej med hjälp av
 * `alert` istället för `console.log`
 *
 *
 * GAMMAL KRAVSPECIFIKATION
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två (olika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

//  let password;
//  // password = "password"; // inte giltigt
//  // password= "passwordpassword" // giltligt, har minst 16 tecken
//  // password= "passwo-" // inte giltligt
//  // password= "password-pass" // giltligt, har minst 12 tecken och minst 1 bindestreck
//  // password= "password!" // giltligt, minst 8 tecken varav minst ett specialtecken enligt nedan
//  // password= "pass!" // inte giltligt
//  // password = "pa$$word"; // giltigt
// //  password = "pa$sw@"; // giltigt
 
//  password.length;
//  const specialChars = [
//      "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
//  ];
 
//  let specialCharCount = 0 // false
 
//  for (let i = 0; i < specialChars.length; i++) {
//      const specialChar = specialChars[i];
 
//      if (password.includes(specialChar)) {
//          specialCharCount += 1
//      }
//  }

/**
 * Johans lösning
 */

// STEG 1

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

const countSpecialChars = (pwd) => { // pwd = "lolcats"
    let specialCharCount = 0

    // iterate (loop) over each item in specialChars
    for (let i = 0;  // only executed once, at the beginning of the loop
        i < specialChars.length;  // should we continue another round?
        i++  // AFTER each round, increase i by 1
    ) {
        const specialChar = specialChars[i]
        console.log(`At index ${i}, does '${pwd}' contain '${specialChar}'?`, pwd.includes(specialChar));
    
        if (pwd.includes(specialChar)) {
            specialCharCount++
        }
    }
}

let password = prompt("Please enter password to check:"); // "lolcats"
// password = "password"; // inte giltigt
// password = "p@$swo"; // giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

console.log(`🕵🏻 Checking password '${password}'`);

countSpecialChars(password); // countSpecialChars("lolcats")

// console.log("Loop is done, found:", specialCharCount);

/*
if (password.length >= 16) {
	console.log("- ✅ Great! That's a long password!");

} else if (password.length >= 12 && password.includes('-')) {
	console.log("- ✅ Great! That's a pretty good password!");

} else if (password.length >= 8 && specialCharCount) {
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

} else if (password.length >= 6 && specialCharCount >= 2) {
	console.log("- ✅ Great! Such password, much secure, VERY hard to crack!");

} else {
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}
*/

/**
 * A try with function
 */

/*
 function passwordChecker() {
    let userPassword = prompt("Please enter your password.");
    let passwordSecure = false;

        if (password.length >= 16) {
            passwordSecure = true;
            prompt(`That is a secure password.`);
        } else if (password.length >= 12 && password.includes('-')){
            passwordSecure = true;
            prompt(`That is a secure password.`);
        } else if (password.length >= 8 && specialCharCount >= 1){
            passwordSecure = true;
            prompt(`That is a secure password.`);
        } else if (password.length >= 6 && specialCharCount >= 2) {
            passwordSecure = true;
            prompt(`That is a secure password.`);
        } else {
            prompt(`That is not a secure password.`);
        }

  };

  passwordChecker();
*/

/**
 * Form with validaton and REGEX
 */

/*
const form = document.querySelector('.password-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = form.password.value;
    const passwordPattern = /^[a-zA-Z\@\$\%\*\^\<\>\?\!\(\)\[\]\{\}\']{6,10}$/;

    if(passwordPattern.test(password)){
        feedback.textContent = 'That password is valid.';
    } else {
        feedback.textContent = 'That password is NOT valid.';
    }
});
*/