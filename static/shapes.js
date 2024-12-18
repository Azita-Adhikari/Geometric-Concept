function drawShape() {
    const canvas = document.getElementById("shapeCanvas");
    const context = canvas.getContext("2d");
    const shape = document.getElementById("shapes").value;

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw shapes
    context.beginPath();
    switch (shape) {
        case "Rectangle":
            context.fillStyle = "blue";
            context.fillRect(50, 50, 150, 100);
            break;
        case "Circle":
            context.fillStyle = "green";
            context.arc(150, 150, 75, 0, Math.PI * 2);
            context.fill();
            break;
        case "Triangle":
            context.fillStyle = "red";
            context.moveTo(150, 50);
            context.lineTo(75, 250);
            context.lineTo(225, 250);
            context.closePath();
            context.fill();
            break;
        case "Square":
            context.fillStyle = "yellow";
            context.fillRect(75, 75, 150, 150);
            break;
        case "Ellipse":
            context.fillStyle = "purple";
            context.ellipse(150, 150, 100, 50, 0, 0, Math.PI * 2);
            context.fill();
            break;
        default:
            alert("Please select a shape!");
    }
}
