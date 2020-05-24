var rows = 10;
var cols = 10;
let gridSize = rows * cols;
var squareSize = 50;
let grid = []; 
let id = 0;
let idd = 0;
let shipOrientation = 0;

// let fleetSetup = [1,2,3,4,5,6,7,8,9,0];
let fleetSetup = [5,4,3,3,2];
// let fleetSetup = [10,10,1,2,3,4,5,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];

let fleet = [];

// let shipSize = 4;



class cell {
    constructor(id, row, col, state) {
        this.id = id;
        this.row = row;
        this.col = col;
        this.state = state;
    }
}

class shipCell {
    constructor(id, row, col, state, orientation) {
        this.id = id;
        this.row = this.id - (Math.floor(this.id/10)*10);
        this.col = Math.floor(this.id/10);
        this.state = state;
        this.orientation = orientation;
    }
}

function createGrid() {      
    for (x = 0; x < cols; x++) {
        for (y = 0; y < rows; y++) {
            let p = new cell(id, y, x, 0);
            id ++; // put this incrementor before or after the cell object creation to change the id number of the cell (i.e array number or "real" number)
            grid.push(p);
            
        }
    }
}
createGrid();

// grid[60].state = 1;
// grid[20].state = 1;
// grid[99].state = 1;



function createShip() {
    let shipLength = [];
    let shipCount  = 0;
    let fleetCount = 0;
    // let shipSize = 3; // Placed in global scope for time being. Will need to be replaced with an array that spits out values for this.
    
    while (shipCount  < fleetSetup.length) {
        let shipSection = Math.floor(Math.random() * gridSize);

        let shipSize = fleetSetup[shipCount];

        let orientation = Math.floor(Math.random() * 2)


            while (fleetCount < shipSize) {
                shipLength.push(new shipCell(shipSection + fleetCount, this.row, this.col, 0, Math.floor(Math.random() * 2)));
                // console.log(shipLength[fleetCount].id);

                

                if (orientation == 0) {

                                if ( // VERTICAL
                                    (grid[shipSection+fleetCount].state == 1) 
                                    || (grid[shipSection].id + shipSize > ((grid[shipSection].col*cols)+10))
                                
                                ) {
                                    shipSection = Math.floor(Math.random() * (gridSize));
                                    shipLength = [];
                                    fleetCount = 0; 
                                } else {
                                fleetCount++;
                                }   
                            }
                

                else if (orientation == 1) {

                            while (fleetCount < shipSize) {
                                shipLength.push(new shipCell(shipSection + (fleetCount*cols), this.row, this.col, 1));
                                // console.log(grid[shipLength[fleetCount].id].state)
                        
                                if ( // HORIZONTAL
                                    (grid[shipSection+fleetCount*cols].state == 1) 
                                    || (grid[shipSection].col + (shipSize) > cols)
                                        
                                ) {
                                    shipSection = Math.floor(Math.random() * (gridSize));
                                    shipLength = [];
                                    fleetCount = 0; 
                                } else {
                                fleetCount++;        
                                }   
                            }
                        }
                    }

            fleet.push(shipLength);

            // console.log(shipLength);
            
            for (t=0; t < shipLength.length; t++) {
            // console.log(grid[shipLength[t].id].id)
            grid[shipLength[t].id].state = 1;
            }
                      
            fleetCount = 0;
            shipCount ++;
            shipLength = [];
    }
          
    } 
    
createShip();






//// VIEW

function createGrid1() {
        let gameBoardContainer = document.getElementById("gameboard");
        for (i = 0; i < cols; i++) {
            for (j = 0; j < rows; j++) {
              	
                let sq = document.createElement("shipcell");
                sq.addEventListener("click", changeState);

                if (grid[idd].state == 0 || 1) {
                    sq.style.backgroundColor = "lightblue"
                } 
                
                // if (grid[idd].state == 2){
                //     sq.style.backgroundColor = "red"
                // }

                if (grid[idd].state == 3){
                    sq.style.backgroundColor = "navy"
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
		    
                idd++;

                var topPosition = j * squareSize;
                var leftPosition = i * squareSize;

                sq.style.top = topPosition + 'px';
                sq.style.left = leftPosition + 'px';

                // let nodeList = documemt.querySelector("div")
                // console.log(nodeList)
        
            }
        }
    }

createGrid1() 



function changeState() {

    console.log(event.target.parentNode.childNodes)
   
    let v = event.target.childNodes[2].textContent

    // console.log(typeof v)

    console.log(v)
    parseInt(v)

    if (grid[v].state == 0) {
    
    event.target.style.backgroundColor = "navy"
    } else if (grid[v].state == 1) {
        event.target.style.backgroundColor = "red"
    }
  
}
    



