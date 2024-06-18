function createGrid() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.getElementById("svgGrid");

    // Background
    const background = document.createElementNS(svgNS, "rect");
    background.setAttribute("width", "100%");
    background.setAttribute("height", "100%");
    background.setAttribute("fill", "white");
    svg.appendChild(background);

    // Horizontal Grid Lines
    for (let i = 50; i < 1000; i += 50) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", 0);
        line.setAttribute("y1", i);
        line.setAttribute("x2", 1000);
        line.setAttribute("y2", i);
        line.setAttribute("stroke", "lightgray");
        line.setAttribute("stroke-width", 1);
        svg.appendChild(line);
    }

    // Vertical Grid Lines
    for (let i = 50; i < 1000; i += 50) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", i);
        line.setAttribute("y1", 0);
        line.setAttribute("x2", i);
        line.setAttribute("y2", 1000);
        line.setAttribute("stroke", "lightgray");
        line.setAttribute("stroke-width", 1);
        svg.appendChild(line);
    }

    // Axes
    const xAxis = document.createElementNS(svgNS, "line");
    xAxis.setAttribute("x1", 0);
    xAxis.setAttribute("y1", 500);
    xAxis.setAttribute("x2", 1000);
    xAxis.setAttribute("y2", 500);
    xAxis.setAttribute("stroke", "black");
    xAxis.setAttribute("stroke-width", 2);
    svg.appendChild(xAxis);

    const yAxis = document.createElementNS(svgNS, "line");
    yAxis.setAttribute("x1", 500);
    yAxis.setAttribute("y1", 0);
    yAxis.setAttribute("x2", 500);
    yAxis.setAttribute("y2", 1000);
    yAxis.setAttribute("stroke", "black");
    yAxis.setAttribute("stroke-width", 2);
    svg.appendChild(yAxis);
}

// Call the function to create the grid
createGrid();

