let counter = document.querySelector('h1');
let count= 0;

setInterval(() => {
    counter.innerText = count;
    count++
    
}, 1000);