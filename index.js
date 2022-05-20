// const input = document.getElementById('input');

function addingEventListener() {
    const input = document.getElementById('input');
    function clickAlert() {
        alert('I was clicked');
    }
    input.addEventListener('click', clickAlert);
    
}


// input.addEventListener('click', clickAlert);


const input = document.getElementById('input');
input.addEventListener('click', addingEventListener());

// const input = document.getElementById('input');

// function addingEventListener() {
//     alert('I was clicked!')
// }

// // input.addEventListener('click', clickAlert);

// const input = document.getElementById('input');
// input.addEventListener('click', addingEventListener);

// function addingEventListener() {
//     const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);
// }

// addingEventListener();