/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

let password;
// password = "password"; // inte giltigt
// password= "passwordpassword" // giltligt, har minst 16 tecken
// password= "passwo-" // inte giltligt
// password= "password-pass" // giltligt, har minst 12 tecken och minst 1 bindestreck
// password= "password!" // giltligt, minst 8 tecken varav minst ett specialtecken enligt nedan
// password= "pass!" // inte giltligt
// password = "pa$$word"; // giltigt
password = "pa$sw@"; // giltigt

password.length;
const specialChars = [
    "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// set status variable to initial value false
let specialCharCount = 0 // 0 har Boolean-värde false!

// check for any special chars in password
// for each specialChar in specialChars
// does password include specialChar?
// if true, set hasSpecialChar to true
for (let i = 0; i < specialChars.length; i++) {
    const specialChar = specialChars[i];

    if (password.includes(specialChar)) {
        specialCharCount = specialCharCount + 1
        // specialCharCount += 1
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

//  password= "passwordpassword" // giltligt, har minst 16 tecken
//  password= "password-pass" // giltligt, har minst 12 tecken och minst 1 bindestreck
//  password= "password!" // giltligt, minst 8 tecken varav minst ett specialtecken enligt nedan
//  password= "passwo?!" // giltligt, minst 6 tecken varav minst två specialtecken enligt nedan

 // password = "pa$sword"; // giltigt
 // password = "p@ssw%rd"; // giltigt
 // password = "pa$$word"; // giltigt
 // password = "secretpassword"; // inte giltigt
 // password = "secret-password"; // giltigt
 // password = "such-password-much-secure-very-long"; // giltigt
