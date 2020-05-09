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

let sss = new ship(1, 42, 3, "Submarine")



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






