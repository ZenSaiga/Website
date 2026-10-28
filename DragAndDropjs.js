
const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.dropable');

let score = 0;
const totalItems = 10; 


draggableElements.forEach(element => {
    element.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text", e.target.id);
        e.target.classList.add('dragging');
    });

    element.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});

droppableElements.forEach(dropZone => {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData("text");
        const correctItemId = dropZone.getAttribute('drop-zone'); 

        if (dropZone.querySelector('.box')) {
            document.getElementById('remarks').innerText = "Status: This year slot already has an event!";
            return;
        }

        if (draggedId === correctItemId) {
            dropZone.appendChild(document.getElementById(draggedId));
            
            score += 1;
            document.getElementById('remarks').innerText = "Status: Tama! Correct historical match.";
            document.getElementById('scores').innerText = `Score: ${score} / ${totalItems}`;

            if (score === totalItems) {
                document.getElementById('remarks').innerText = "Status: Congratulations! All historical events matched correctly!";
            }
        } else {
            document.getElementById('remarks').innerText = "Status: Mali! Incorrect timeline match. Try again.";
        }
    });
});

function resetGame() {
    score = 0;
    document.getElementById('scores').innerText = `Score: ${score} / ${totalItems}`;
    document.getElementById('remarks').innerText = "Status: Game reset. Match the history events!";

    const pool = document.getElementById('pool');
    
    draggableElements.forEach(item => {
        pool.appendChild(item);
    });
}
