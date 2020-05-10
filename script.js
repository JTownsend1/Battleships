var rows = 10;
var cols = 10;
let gridSize = rows * cols;
var squareSize = 50;
let grid = []; 
let id = 0;
let idd = 0;

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
    let s = new ship(0, Math.floor(Math.random() * gridSize), 3, "Submarine")

            // if (grid[s.startPosition] + grid[s.startPosition].shipSize > )

            if (grid[s.startPosition].state == 0) {
                for (i = 0; i < s.shipSize; i++) {
                    grid[s.startPosition].state = 1;
                    grid[s.startPosition + (i*10)].state  = 1;
                }

                
               
                
            // if (orientation === 0) {
            //     if 
            // }   
            
        }
}






placeShip()





//VIEW

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
		        

                console.log(idd);
                console.log(grid[idd].state);
                idd++;

                var topPosition = j * squareSize;
                var leftPosition = i * squareSize;

                sq.style.top = topPosition + 'px';
                sq.style.left = leftPosition + 'px';

        
            }
        }
    }

createGrid1() 
