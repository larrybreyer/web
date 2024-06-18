function createGrid(svgElement, rows, cols, cellSize) {
    const svgNS = "http://www.w3.org/2000/svg";
    const width = cols * cellSize;
    const height = rows * cellSize;
    const midX = width / 2;
    const midY = height / 2;

    // Create a mask to hide the grid lines inside the circle
    const defs = document.createElementNS(svgNS, "defs");
    const mask = document.createElementNS(svgNS, "mask");
    mask.setAttribute("id", "gridMask");

    const maskRect = document.createElementNS(svgNS, "rect");
    maskRect.setAttribute("x", 0);
    maskRect.setAttribute("y", 0);
    maskRect.setAttribute("width", width);
    maskRect.setAttribute("height", height);
    maskRect.setAttribute("fill", "white");
    mask.appendChild(maskRect);

    const maskCircle = document.createElementNS(svgNS, "circle");
    maskCircle.setAttribute("cx", midX);
    maskCircle.setAttribute("cy", midY);
    maskCircle.setAttribute("r", 250);
    maskCircle.setAttribute("fill", "black");
    mask.appendChild(maskCircle);

    defs.appendChild(mask);
    svgElement.appendChild(defs);

    // Create grid lines with the mask applied
    for (let i = 0; i <= rows; i++) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", 0);
        line.setAttribute("y1", i * cellSize);
        line.setAttribute("x2", width);
        line.setAttribute("y2", i * cellSize);
        line.setAttribute("stroke", "black");
        line.setAttribute("mask", "url(#gridMask)");
        svgElement.appendChild(line);
    }

    for (let j = 0; j <= cols; j++) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", j * cellSize);
        line.setAttribute("y1", 0);
        line.setAttribute("x2", j * cellSize);
        line.setAttribute("y2", height);
        line.setAttribute("stroke", "black");
        line.setAttribute("mask", "url(#gridMask)");
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

    // Add shaded circle
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", midX);
    circle.setAttribute("cy", midY);
    circle.setAttribute("r", 250);
    circle.setAttribute("fill", "url(#grad1)");
    svgElement.appendChild(circle);

    // Add gradient for shading
    const radialGradient = document.createElementNS(svgNS, "radialGradient");
    radialGradient.setAttribute("id", "grad1");
    radialGradient.setAttribute("cx", "50%");
    radialGradient.setAttribute("cy", "50%");
    radialGradient.setAttribute("r", "50%");
    radialGradient.setAttribute("fx", "50%");
    radialGradient.setAttribute("fy", "50%");

    const stop1 = document.createElementNS(svgNS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("style", "stop-color:rgb(255,255,255);stop-opacity:0");

    const stop2 = document.createElementNS(svgNS, "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("style", "stop-color:rgb(0,0,0);stop-opacity:1");

    radialGradient.appendChild(stop1);
    radialGradient.appendChild(stop2);
    defs.appendChild(radialGradient);
    svgElement.appendChild(defs);
}

const svgElement = document.getElementById("grid");
// Create a 20x20 grid with each cell being 50x50 pixels
createGrid(svgElement, 20, 20, 50);
