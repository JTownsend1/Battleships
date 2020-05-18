var rows = 10;
var cols = 10;
let gridSize = rows * cols;
var squareSize = 50;
let grid = []; 
let id = 0;
let idd = 0;
let shipOrientation = 0;

let fleetSetup = [5];
let fleet = [];

// let shipL = [];
// let count = 0;


class cell {
    constructor(id, row, col, state) {
        this.id = id;
        this.row = row;
        this.col = col;
        this.state = state;
    }
}

class shipCell {
    constructor(id, row, col, state) {
        this.id = id;
        this.row = this.id - (Math.floor(this.id/10)*10);
        this.col = Math.floor(this.id/10);
        this.state = state
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

grid[60].state = 1;

// console.log(grid[60].id);

// let shipL = [];

function createShip() {
let shipL = [];
let shipC = [];
let z = 0;
let y = 0;
let shipSize = 50;

// let shipID = Math.floor(Math.random() * (gridSize-shipSize));
// let limit = gridSize-shipSize;


while (z < fleetSetup.length) {

    let shipID = Math.floor(Math.random() * (gridSize-shipSize));

        while (y < shipSize) {
            
            shipL.push(new shipCell(shipID+y, this.row, this.col, 1));
            
            // y++;
            // console.log(shipID+y)

            if (grid[shipID+y].state == 1) {
                // break;
                // shipL = [];
                shipID = 0;
                shipL = [];
                y = 0;
                // z = 0;
            }
            
            else {
            y++;
            // y=0
            }
            // y++;
            
           
        }
        
        fleet.push(shipL);

        y=0;
        z++;
        shipL = [];
        

}
// console.log(shipID)
// console.log(shipL);
// console.log(fleet);

} 



createShip();
    
// console.log(shipL);
console.log(fleet);


// createFleet();


//////////////////////////////////////////
// let p = Math.floor(Math.random()*10);
// let q = [];
// t = () => { return Math.floor(Math.random()*10)}

// for (i=0; i<10; i++) {
    

//     q.push(t());

//     if (t() < 2) {
//         console.log("ZERO")
//         i = 0
//         q = []
//     }

//     console.log(i)


// }
//////////////////////////////////////////
// console.log(p)










//  experiment = () =>  console.log("hhhhhhhh");

//  experiment();

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
