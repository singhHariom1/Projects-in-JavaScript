document.addEventListener("DOMContentLoaded", () => {
    const draggables = document.querySelectorAll(".draggable");
    const boxes = document.querySelectorAll(".box");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", draggable.id);
        });
    });
    

    boxes.forEach(box => {
        box.addEventListener("dragover", (e) => {
            e.preventDefault(); 
        });

        box.addEventListener("drop", (e) => {
            e.preventDefault();
            const itemId = e.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(itemId);
            box.appendChild(draggedElement);
        });
    });
});
