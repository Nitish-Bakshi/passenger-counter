'use strict';
const countEL = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');
let count = 0;

function increment() {
    count += 1;
    countEL.textContent = count;
}
document.querySelector('#save-btn').addEventListener('click', function() {
    let string = count + ' - ';
    saveEl.textContent += string;
    countEL.textContent = 0;
    count = 0;
});