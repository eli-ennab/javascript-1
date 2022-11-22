/**
 * XMLHttpRequest
 *
 */

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log(3);
// }, 2000);

// console.log(4);
// console.log(5);

// Create a new XML Http Request
const request = new XMLHttpRequest();

// Attach an event-listener to the request
request.addEventListener('readystatechange', () => {
    // Is equest finished?
    if (request.readyState === 4) {     // 4 = DONE
        // console.log("Got me some data.", request);

        // Was the request successful?
        if (request.status === 200) {
            // 200 OK
            console.log("200 OK!");

            // Take the STRING in responseText and PARSE it into Javascript object
            const data = JSON.parse(request.responseText);

            // Log the data
            // console.log("Got me some data:", data);
            console.table(data);

            // Loop over all users
            data.forEach(user => {
                // Append a listitem for each user
                document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
                // console.log(user.name);
            });
        
        } else {
            console.log("Something went wrong.");
        }
    }
});

// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

// Send the request
request.send();

// Done?
console.log("Request sent.");