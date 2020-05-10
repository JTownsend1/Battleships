var rows = 10;
var cols = 10;
let gridSize = rows * cols;
var squareSize = 50;
let grid = []; 
let id = 0;
let idd = 0;
let shipOrientation = 0;

class cell {
    constructor(id, row, col, state) {
        this.id = id;
        this.row = row;
        this.col = col;
        this.state = state;
    }
}

class ship {
    constructor(orientation, startPosition, shipSize, name) {
        this.orientation = orientation;
        this.startPosition = startPosition;
        this.shipSize = shipSize;
        this.name = name;
    }
}

function createGrid() {      
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            id ++;
            let p = new cell(id, i, j, 0);
            grid.push(p);
            // console.log(id);
        }
    }
}
createGrid();




function placeShip() {
    // let s = new ship(Math.floor(Math.random() * 4), Math.floor(Math.random() * gridSize), 4, "Submarine")
    let s = new ship(0, Math.floor(Math.random() * gridSize), 4, "Submarine")

        // Randomly choose a starting square
        // Determine starting orientation
        // Check that the squares that a ship is on are not already used
        // Check that the ships do not cross the edges of the grid
        // Then if all of the above is OK, place ship / change states of each cell

            
            //// DETERMINE STARTING ORIENTATION
            if (s.orientation == 0) { shipOrientation = cols};  // RIGHT
            if (s.orientation == 1) { shipOrientation = 1};  // DOWN  
            if (s.orientation == 2) { shipOrientation = -cols};  // LEFT
            if (s.orientation == 3) { shipOrientation = -1};  // UP
            
            // CHECKS STARTING POSITION
            function checkPlacement() {
                for (i = 0; i < s.shipSize; i++) {
                    if (grid[s.startPosition + (i * shipOrientation)].state  == 0) {
                    return true;
                    }
                }
            }

            // CHECK EDGES
            function checkEdges() {
                for (i = 0; i < s.shipSize; i++) {
                    if (grid[s.startPosition + (i * shipOrientation)].id-1 < gridSize) {
                    return true;   
                    }
                }  
            }

            
if (checkEdges() == true) {console.log('Placement squares unnoccupied')};
if (checkEdges() == true) {console.log('All within edges')};



if (grid[s.startPosition].state == 0) {
    for (i = 0; i < s.shipSize; i++) {
        grid[s.startPosition].state = 1;
        grid[s.startPosition + (i * shipOrientation)].state = 1;
    }
}


}

placeShip()

// function check() {
//     if (rows == 100) {
//         return true;
//     }
// }

// check();

// if (check()==true) {
//     console.log('YES')
// }


//// VIEW

function createGrid1() {
        let gameBoardContainer = document.getElementById("gameboard");
        for (i = 0; i < cols; i++) {
            for (j = 0; j < rows; j++) {
              	
          
                let sq = document.createElement("div");

                

                if (grid[idd].state == 0) {
                    sq.style.backgroundColor = "lightblue"
                } else {
                    sq.style.backgroundColor = "red"
                }

                gameBoardContainer.appendChild(sq);
		        

                // console.log(idd);
                // console.log(grid[idd].state);
                idd++;

                var topPosition = j * squareSize;
                var leftPosition = i * squareSize;

                sq.style.top = topPosition + 'px';
                sq.style.left = leftPosition + 'px';

        
            }
        }
    }

createGrid1() 
