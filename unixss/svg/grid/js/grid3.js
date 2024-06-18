function createGrid(svgElement, rows, cols, cellSize) {
    const svgNS = "http://www.w3.org/2000/svg";
    const width = cols * cellSize;
    const height = rows * cellSize;
    const midX = width / 2;
    const midY = height / 2;

    for (let i = 0; i <= rows; i++) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", 0);
        line.setAttribute("y1", i * cellSize);
        line.setAttribute("x2", width);
        line.setAttribute("y2", i * cellSize);
        line.setAttribute("stroke", "black");
        svgElement.appendChild(line);
    }

    for (let j = 0; j <= cols; j++) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", j * cellSize);
        line.setAttribute("y1", 0);
        line.setAttribute("x2", j * cellSize);
        line.setAttribute("y2", height);
        line.setAttribute("stroke", "black");
        svgElement.appendChild(line);
    }

    // Add X axis
    const xAxis = document.createElementNS(svgNS, "line");
    xAxis.setAttribute("x1", 0);
    xAxis.setAttribute("y1", midY);
    xAxis.setAttribute("x2", width);
    xAxis.setAttribute("y2", midY);
    xAxis.setAttribute("stroke", "red");
    xAxis.setAttribute("stroke-width", 2);
    svgElement.appendChild(xAxis);

    // Add Y axis
    const yAxis = document.createElementNS(svgNS, "line");
    yAxis.setAttribute("x1", midX);
    yAxis.setAttribute("y1", 0);
    yAxis.setAttribute("x2", midX);
    yAxis.setAttribute("y2", height);
    yAxis.setAttribute("stroke", "red");
    yAxis.setAttribute("stroke-width", 2);
    svgElement.appendChild(yAxis);
}

const svgElement = document.getElementById("grid");
// Create a 10x10 grid with each cell being 50x50 pixels
createGrid(svgElement, 20, 20, 50);
// vim: ft=javascript ts=4 et sw=4 nu
