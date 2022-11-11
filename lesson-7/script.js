/**
 * Form and form events
*/

const passwordForm = document.querySelector('#passwordForm');

passwordForm.addEventListener('submit', e => {
		// prevent form from being submitted
		e.preventDefault();

		console.log('Form submitted but default behaviour prevented.');

        // Get the password that the user submitted
        const password = passwordForm.password.value;
        // console.log("Password:", passwordForm.password.value);

        console.log(`Checking password '${password}'`);
 
        if (password.length >= 16) {
            alert("Great! That's a long password.");
        
        } else if (password.length >= 12 && password.includes('-')) {
           alert("Great! That's a pretty good password.");
        
        } else if (password.length >= 8 && countSpecialChars(password)) {
           alert("Great! Such password, much secure, very hard to crack.");
        
        } else if (password.length >= 6 && countSpecialChars(password) >= 2) {
           alert("Great! Such password, much secure, VERY hard to crack.");
        
        } else {
           alert("Insecure password.");
        }
});

const specialChars = [
    "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

const countSpecialChars = (pwd) => {
    let specialCharCount = 0
 
        for (let i = 0;
            i < specialChars.length;
            i++
        ) {
            const specialChar = specialChars[i]
        
            if (pwd.includes(specialChar)) {
                specialCharCount++
            }
        }

        return specialCharCount;
};