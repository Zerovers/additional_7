module.exports = function solveSudoku(matrix) {
    solve(matrix);
    console.log(matrix);
    return matrix;
    
}

function unknowElements(matrix, mass) {
    for (let i = mass[0]; i < 9; i++) {
        for (let j = mass[1]; j < 9; j++) {
            if (matrix[i][j] === 0) {
                mass[0] = i;
                mass[1] = j;
                return 1;
            }
        }
    }
    return 0;
}

function rowContent(matrix, r, num) {
    for (let i = 0; i < 9; i++) {
        if (matrix[r][i] === num) {
            return 1;
        }
    }
    return ;
}

function colContent(matrix, c, num) {
    for (let i = 0; i < 9; i++) {
        if (matrix[i][c] === num) {
            return 1;
        }
    }
    return ;
}

function sectContent(matrix, r, c, num) {
    let massR = (Math.floor(r / 3)) * 3;
    let massC = (Math.floor(c / 3)) * 3;
    for (let i = massR; i < massR + 3; i++)
        for (let j = massC; j < massC + 3; j++) {
            if (matrix[i][j] === num) {
                return 1;
            }
        }
    return ;
}

function solve(matrix) {
    let mass = [0, 0];
    if (!unknowElements(matrix, mass)) {
        return 1;
    }
    let r = mass[0];
    let c = mass[1];
    for (let i = 1; i <= 9; i++) {
        if (!rowContent(matrix, r, i) && !colContent(matrix, c, i) && !sectContent(matrix, r, c, i)) {
            matrix[r][c] = i;
            if (solve(matrix)) {
                return 1;
            }
            matrix[r][c] = 0;
        }
    }
    return ;
}