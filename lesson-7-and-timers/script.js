/**
 * Timers
 *
 */

 const btnScareMe = document.querySelector('#btnScareMe');
 const ghostEl = document.querySelector('#ghost');

 btnScareMe.addEventListener('click', () => {
    // hide button
    btnScareMe.classList.add('hide');

    const delay = getRandomNumber() * 1000;

    // start timer
    setTimeout ( () => {
        // this will be executed after 2000 milliseconds (2 seconds)
        // alert('Boo!');
        ghostEl.classList.remove('hide');

        //
        setTimeout (() => {
        ghostEl.classList.add('hide');
            btnScareMe.classList.remove('hide');
        }, 4000);
    }, 2000 );
});
