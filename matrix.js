class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }
    sum(matrix1, matrix2) {
        let result = [[], [], []];
        for (let i = 0; i < matrix1.matrix.length; i++) {
            for (let j = 0; j < matrix2.matrix.length; j++) {
                result[i][j] = matrix1.matrix[i][j] + matrix2.matrix[i][j];
            }
        }
        return result;
    };
    multiply(matrix1, matrix2) {
        let result = [[], [], []];
        for (let i = 0; i < matrix1.matrix.length; i++) {
            for (let j = 0; j < matrix2.matrix.length; j++) {
                result[i][j] = 0;
                for (let k = 0; k < matrix1.matrix.length; k++) {
                    result[i][j] += matrix1.matrix[i][k] * matrix2.matrix[k][j];
                }
            }
        }
        return result;
    };
    sortMatrix(k, matrix) {
        let result = [[], [], []];
        for (let i = 0; i<matrix.matrix.length-1; i++ ) {
            for (let j = i+1; j<matrix.matrix.length; j++) {
                if (matrix.matrix[j][k-1]<matrix.matrix[i][k-1]) {
                    result=matrix.matrix[j]; matrix.matrix[j]=matrix.matrix[i]; matrix.matrix[i]=result;
                }
            }
        }
        return matrix;
    }
};

let resultMatrix = new Matrix();
const matrix1 = new Matrix([
    [3, 4, 5],
    [10, 8, 7],
    [1, 1, 1]
]);
const matrix2 = new Matrix([
    [5, 4, 1],
    [3, 6, 4],
    [1, 2, 5]
]);
resultMatrix.multiply(matrix1, matrix2);// перемножение матриц
// [32, 46, 44]
// [81, 102, 77]
// [9, 12, 10]
resultMatrix.sum(matrix1, matrix2); // сложение матриц
// [8, 8, 6]
// [13, 14, 11]
// [2, 3, 6]
resultMatrix.sortMatrix(1, matrix1); // сортировка матрицы по столбцу (первый аргумент - номер столбца)
// [1, 1, 1]
// [3, 4, 5]
// [10, 8, 7]
