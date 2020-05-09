var rows = 10;
var cols = 10;
var squareSize = 50;
let grid = []; 
let id = 0;

class cell {
    constructor(id, row, col, state) {
        this.id = id;
        this.row = row;
        this.col = col;
        this.state = state;
    }
}

function createGrid() {      
        for (i = 0; i < cols; i++) {
            for (j = 0; j < rows; j++) {
                id ++;
                let p = new cell(id, i, j, 0);
                grid.push(p);
        }
    }
}
createGrid();


class ship {
    constructor(orientation, startPosition, size, name) {
        this.orientation = orientation;
        this.startPosition = startPosition;
        this.size = size;
        this.name = name;
    }
}





// let sss = new ship(1, 42, 3, "Submarine")


// function placeShip() {
//     let sss = new ship(1, 42, 3, "Submarine")

        
//         function checkStartPosition() {
//             if (grid[sss.startPosition].state = 0) {
//                 return true
//             } else {
//                 return false
//             }
//         }

//         function checkForEdges() {
//             if (grid[sss.startPosition].col + sss.size > cols) {
//                 return true
//             } else {
//                 return false
//             }
//         }
 
//         if (checkStartPosition = true) { }

// }

// placeShip()

//VIEW

function createGrid1() {
        var gameBoardContainer = document.getElementById("gameboard");
        for (i = 0; i < cols; i++) {
            for (j = 0; j < rows; j++) {
                id = 0;
                id ++;
                sq = document.createElement("div");
                gameBoardContainer.appendChild(sq);

                var topPosition = j * squareSize;
                var leftPosition = i * squareSize;			
    
                sq.style.top = topPosition + 'px';
                sq.style.left = leftPosition + 'px';	

                if (grid[id].state == 0) {
                    sq.style.background = 'lightBlue';
                } else if (grid[id].state == 1) {
                    sq.style.background = 'darkBlue';
                } else if (grid[id].state == 2) {
                    sq.style.background = 'brown';
                } else if (grid[id].state == 3) {
                    sq.style.background = 'red'
                }
                
            }
        }
    }

createGrid1() 


// function createCell() {

//     var gameBoardContainer = document.getElementById("gameboard");
//     // create a new div HTML element for each grid square and make it the right size
//     var square = document.createElement("div");
//     gameBoardContainer.appendChild(square);

//     // give each div element a unique id based on its row and column, like "s00"
//     square.id = 's' + j + i;			
//     square.state = 0;
//     // set each grid square's coordinates: multiples of the current row or column number
//     var topPosition = j * squareSize;
//     var leftPosition = i * squareSize;			
    
//     // use CSS absolute positioning to place each grid square on the page
//     square.style.top = topPosition + 'px';
//     square.style.left = leftPosition + 'px';	

//     var row = square.id.substring(1,2);
//     var col = square.id.substring(2,3);

// }

// function createGrid() {
//     var gameBoardContainer = document.getElementById("gameboard");
//     for (i = 0; i < cols; i++) {
//         for (j = 0; j < rows; j++) {
//             createCell()
//         }
//     }
// }

// createGrid();






