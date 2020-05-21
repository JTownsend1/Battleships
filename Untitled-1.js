if (shipSection.orientation == 0) { // HORIZONTAL
    if ((grid[shipSection+fleetCount].state == 1) 
    || (grid[shipSection].id + shipSize > (((shipLength[fleetCount].col)*cols+10)))) {
        shipSection = Math.floor(Math.random() * (gridSize-shipSize));
        shipLength = [];
        fleetCount = 0; 
    } else {
    fleetCount++;
    }
}   

if (shipLength.orientation == 1) { // VERTICAL
    if ((grid[shipSection+fleetCount].state == 1) 
    || (grid[shipSection].id + (shipSize * cols) > (gridSize))) {
        shipSection = Math.floor(Math.random() * (gridSize-shipSize));
        shipLength = [];
        fleetCount = 0; 
    } else {
    fleetCount = fleetCount + cols;
    }
}