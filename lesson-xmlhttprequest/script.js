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
    // Check status of request
    console.log("Request:", request);
    console.log("Request readyState:", request.readyState);
    console.log("Request responseText:", request.responseText);
});

// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

// Send the request
request.send();

// Done?
console.log('Request sent!');