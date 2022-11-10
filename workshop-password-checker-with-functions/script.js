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

 const specialChars = [
    "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

const countSpecialChars = (pwd) => {
    let specialCharCount = 0
 
        // iterate (loop) over each item in specialChars
        for (let i = 0;  // only executed once, at the beginning of the loop
            i < specialChars.length;  // should we continue another round?
            i++  // AFTER each round, increase i by 1
        ) {
            const specialChar = specialChars[i]
            // console.log(`At index ${i}, does ${pwd} contain '${specialChar}'?`, pwd.includes(specialChar));
        
            if (pwd.includes(specialChar)) {        // Finns specialtecken? Sant eller falskt bara, inte antal.
                specialCharCount++
            }
        }

        return specialCharCount;
};

 let password = prompt("Please enter password to check.");
 
 console.log(`Checking password '${password}'`);

// call `countSpecialChars`, pass in the value in `password` 
// and save the return value in `nbrOfSpecialChars`
// const nbrOfSpecialChars = countSpecialChars(password);       // returnerar => 0, 1 eller 2
 

//  console.log(`Loop is done, special chars found:`, nbrOfSpecialChars);
 
 if (password.length >= 16) {
     alert("Great! That's a long password!");
 
 } else if (password.length >= 12 && password.includes('-')) {
    alert("Great! That's a pretty good password!");
 
 } else if (password.length >= 8 && countSpecialChars(password)) {
    alert("Great! Such password, much secure, very hard to crack!");
 
 } else if (password.length >= 6 && countSpecialChars(password) >= 2) {
    alert("Great! Such password, much secure, VERY hard to crack!");
 
 } else {
    alert("Insecure password, my grandma can crack it!");
 }