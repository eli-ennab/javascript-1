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

let password;
// password = "password"; // inte giltigt
// password = "p@$swo"; // giltigt
// password = "pa$sword"; // giltigt
password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

password.length;
const specialChars = [
    "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// set status variable to initial value false
let specialCharCount = 0 // 0 har Boolean-värde false!

// iterate (loop) over each item in specialChars
for (let i = 0; i < specialChars.length; i++) {
    const specialChar = specialChars[i];

    if (password.includes(specialChar)) {
		specialCharCount++
    }
}

console.log(`Checking password... "${password}"`);

if (password.length >= 16) {
    console.log(`Congrats, your password is at least 16 characters long!`);

} else if (password.length >= 12 && password.includes('-')){
    console.log(`Congrats, your password is at least 12 characters long and contains a hyphen.`);

} else if (password.length >= 8 && specialCharCount >= 1){
    console.log(`Congrats, your password is at least 8 characters long and contains at least one special char.`);

} else if (password.length >= 6 && specialCharCount >= 2) {
    console.log(`Congrats, your password is at least 6 characters long and contains at least two different special chars.`);

} else {
    console.log(`Insecure password. Try again!`);
}