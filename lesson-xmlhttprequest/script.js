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
    if (request.readyState === 4) {
        // console.log("Got me some data.", request);

        // Was the request successful?
        if (request.status === 200) {
            console.log("200 OK!");

            // Take the STRING in responseText and PARSE it into Javascript object
            const data = JSON.parse(request.responseText);

            // Log the data
            console.log("Data:", data);
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