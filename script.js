var rows = 10;
var cols = 10;
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
    constructor(orientation, startPosition, size, name) {
        this.orientation = orientation;
        this.startPosition = startPosition;
        this.size = size;
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
    let sss = new ship(1, 5, 0, "Submarine")

            if (grid[sss.startPosition].state == 0) {
                console.log(grid[sss.startPosition].state)
                grid[sss.startPosition].state = 1
                console.log(grid[sss.startPosition].state)              
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
                    sq.style.backgroundColor = "red"
                } else {
                    sq.style.backgroundColor = "blue"
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
