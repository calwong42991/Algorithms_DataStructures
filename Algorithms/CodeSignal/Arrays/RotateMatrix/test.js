const rotateMatrix = (matrix) => {
    reverseColumns(matrix);
    trapose(matrix)
    return matrix;
}

let swap = (matrix, x1, y1, x2, y2) => {
    let tmp = matrix[x2][y2];
    matrix[x2][y2] = matrix[x1][y1];
    matrix[x1][y1] = tmp;
}

const reverseColumns = (matrix) => {
    for(let i = 0; i < matrix.length; i++){
        let low = 0;
        let ceil = matrix.length - 1;

        while(low < ceil){
            swap(matrix, low, i, ceil, i)
            low++;
            ceil--;
        }   
    }
}

const trapose = (matrix) => {
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            swap(matrix, i, j, j, i);
        }
    }
}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]


console.log(rotateMatrix(matrix1));
console.log(rotateMatrix(matrix2));