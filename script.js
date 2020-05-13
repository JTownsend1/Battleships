var rows = 10;
var cols = 10;
let gridSize = rows * cols;
var squareSize = 50;
let grid = []; 
let id = 0;
let idd = 0;
let shipOrientation = 0;

let fleetSetup = [5,4,3,3,2];
let fleet = [];

class cell {
    constructor(id, row, col, state) {
        this.id = id;
        this.row = row;
        this.col = col;
        this.state = state;
    }
}

class ship {
    constructor(id, orientation, row, col, shipSize, name) {
        this.id = id;
        this.orientation = orientation;
        this.row = Math.floor(this.id/10);
        this.col = this.id - (Math.floor(this.id/10)*10);
        this.shipSize = shipSize;
        this.name = name;
    }
}

function createGrid() {      
    for (x = 0; x < cols; x++) {
        for (y = 0; y < rows; y++) {
            let p = new cell(id, y, x, 0);
            id ++; // put this incrementor before or after the cell object creation to change the id number of the cell (i.e array number or "real" number)
            grid.push(p);
            // console.log(id);
        }
    }
}
createGrid();


function xxx() {
        // while (y.length < x.length) {

        //     let v = new cell(Math.floor(Math.random() * 20))
        //     if (v.id < 1) {
        //     y.push(v);
        //     }
        // }
        
        while (fleet.length < fleetSetup.length) {

            let s = new ship(Math.floor(Math.random() * gridSize), 0, this.row, this.col, 3, "Submarine")

            // if  (
            //     ((s.id + ((s.shipSize-1)*cols)) < gridSize) &
            //     (grid[s.id].state == 0)
            //     )
                    
            //     {
            //     for (i = 0; i < s.shipSize; i++) {
            //         grid[s.id + (i * cols)].state = 1;
            //     }

            if  (
                ((s.id + ((s.shipSize-1)*cols)) < gridSize) &
                (grid[s.id].state == 0)
                )
                    
                {
                for (i = 0; i < s.shipSize; i++) {
                    grid[s.id + (i * cols)].state = 1;
                }



                fleet.push(s); 
                }
                

        }    
}    
xxx();

        // Randomly choose a starting square
        // Determine starting orientation
        // Check that the squares that a ship is on are not already used
        // Check that the ships do not cross the edges of the grid
        // Then if all of the above is OK, place ship / change states of each cell

            
           
            
            // // CHECKS STARTING POSITION
            // function checkPlacement() {
            //     for (i = 0; i < s.shipSize; i++) {
            //         if (grid[s.startPosition + (i * shipOrientation)].state  == 0) {
            //         return true;
            //         }
            //     }
            // }

//             // CHECK EDGES
//             function checkEdges() {
//                 for (i = 0; i < s.shipSize; i++) {
//                     if (grid[s.startPosition + (i * shipOrientation)].id-1 < gridSize) {
//                     return true;   
//                     }
//                 }  
//             }

            
// if (checkEdges() == true) {console.log('Placement squares unnoccupied')};
// if (checkEdges() == true) {console.log('All within edges')};



// if (grid[s.startPosition].state == 0) {
//     for (i = 0; i < s.shipSize; i++) {
//         grid[s.startPosition].state = 1;
//         grid[s.startPosition + (i * shipOrientation)].state = 1;
//     }
// }

/////////////////////////////

// function placeShip() {
//     // let s = new ship(Math.floor(Math.random() * 4), Math.floor(Math.random() * gridSize), 4, "Submarine")
//     let s = new ship(0, Math.floor(Math.random() * gridSize), 4, "Submarine")

//         // Randomly choose a starting square
//         // Determine starting orientation
//         // Check that the squares that a ship is on are not already used
//         // Check that the ships do not cross the edges of the grid
//         // Then if all of the above is OK, place ship / change states of each cell

            
//             //// DETERMINE STARTING ORIENTATION
//             if (s.orientation == 0) { shipOrientation = cols};  // RIGHT
//             if (s.orientation == 1) { shipOrientation = 1};  // DOWN  
//             if (s.orientation == 2) { shipOrientation = -cols};  // LEFT
//             if (s.orientation == 3) { shipOrientation = -1};  // UP
            
//             // CHECKS STARTING POSITION
//             function checkPlacement() {
//                 for (i = 0; i < s.shipSize; i++) {
//                     if (grid[s.startPosition + (i * shipOrientation)].state  == 0) {
//                     return true;
//                     }
//                 }
//             }

//             // CHECK EDGES
//             function checkEdges() {
//                 for (i = 0; i < s.shipSize; i++) {
//                     if (grid[s.startPosition + (i * shipOrientation)].id-1 < gridSize) {
//                     return true;   
//                     }
//                 }  
//             }

            
// if (checkEdges() == true) {console.log('Placement squares unnoccupied')};
// if (checkEdges() == true) {console.log('All within edges')};



// if (grid[s.startPosition].state == 0) {
//     for (i = 0; i < s.shipSize; i++) {
//         grid[s.startPosition].state = 1;
//         grid[s.startPosition + (i * shipOrientation)].state = 1;
//     }
// }


// }

// placeShip()

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
                let tn1 = document.createTextNode( grid[idd].col +', '+grid[idd].row );
                let tnbr = document.createElement("br")
                let tn2 = document.createTextNode( grid[idd].id)

                // sq.style.color = "red";
                sq.style.verticalAlign = "bottom";
                sq.appendChild(tn1);
                sq.appendChild(tnbr);
                sq.appendChild(tn2);
		        

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
