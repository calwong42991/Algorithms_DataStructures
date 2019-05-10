const rotateImage = (matrix) => {

    rotateColumns(matrix);
    rotateEachDiagonal(matrix);
    return matrix;
}

const swap = (matrix, x1, y1, x2, y2) => {
    let tmp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = tmp;
}

const rotateColumns = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        let low = 0;
        let ceil = matrix.length - 1;

        while (low < ceil) {
            swap(matrix, low, i, ceil, i);
            low++;
            ceil--;
        }
    }
}

const rotateEachDiagonal = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            swap(matrix, i, j, j, i);
        }
    }
}

module.exports = rotateImage;