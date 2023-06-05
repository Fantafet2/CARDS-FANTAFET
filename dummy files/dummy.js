

// for moveing an object arround with mouse
/*window.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('container');
    const object = document.querySelector('.movable-object');
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    object.addEventListener('mousedown', startDragging);
    object.addEventListener('mousemove', dragObject);
    object.addEventListener('mouseup', stopDragging);

    function startDragging(e) {
        isDragging = true;
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function dragObject(e) {
        if (!isDragging) return;

        const deltaX = e.clientX - prevX;
        const deltaY = e.clientY - prevY;
        const currentX = parseInt(object.style.left || 0);
        const currentY = parseInt(object.style.top || 0);

        object.style.left = `${currentX + deltaX}px`;
        object.style.top = `${currentY + deltaY}px`;

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function stopDragging() {
        isDragging = false;
    }
});
*/


// to move element from one div to another 
window.addEventListener('DOMContentLoaded', () => {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const element = document.querySelector('.movable-element');

    element.addEventListener('click', moveElement);

    function moveElement() {
        container2.appendChild(element);
    }
});


