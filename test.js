let mover = document.getElementById('clickmeq');
const container2 = document.getElementById('testrun2');
const element = document.querySelector('.movable');

//window.addEventListener('DOMContentLoaded', () =>{
function movethis() {   
    container2.appendChild(element);
}; 

mover.addEventListener('click',movethis);








