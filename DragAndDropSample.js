const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.dropable');

let score = 0;

draggableElements.forEach(element => {
    element.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('dragging');
        console.log("Drag start event activated");
    });

    element.addEventListener('dragend', (event) => {
        event.target.classList.remove('dragging');
    });
});

droppableElements.forEach(zone => {
    zone.addEventListener('dragover', (event) => {
        event.preventDefault(); 
    });

    zone.addEventListener('drop', (event) => {
        event.preventDefault();
        const draggedElementId = event.dataTransfer.getData('text/plain');
        const targetDropZoneID = event.target.getAttribute('drop-zone');

        const remarksDisplay = document.getElementById('remarks');
        const scoresDisplay = document.getElementById('scores');

        
        if (draggedElementId === targetDropZoneID) {
            remarksDisplay.innerText = "Tama (Correct)";
            score += 1;
            scoresDisplay.innerText = score;
            
            
            const draggedElement = document.getElementById(draggedElementId);
            event.target.appendChild(draggedElement);
        } else {
            remarksDisplay.innerText = "Mali (Incorrect)";
        }
    });
});