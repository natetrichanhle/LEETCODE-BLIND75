var spiralOrder = function(matrix) {
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    const result = [];
    // gets the size of the array.
    const size = matrix.length * matrix[0].length;
    
    while (result.length < size) {
        
        for (let i = left; i <= right && result.length < size; i++) {
            // top most row to the ith column [row][column]
            result.push(matrix[top][i]);
        }
        top++;
        
        for (let i = top; i <= bottom && result.length < size; i++) {
            // ith row at the right most column [row][column]
            result.push(matrix[i][right]);
        }
        right--;
        
        for (let i = right; i >= left && result.length < size; i--) {
            // bottom most row to the ith column [row][column]
            result.push(matrix[bottom][i]);
        }
        bottom--;
        
        for(let i = bottom; i >= top && result.length < size; i--) {
            // ith most row at the left most column [row][column]
            result.push(matrix[i][left]);
        }
        left++;
        
    } 
    return result;
};