const numbers = [99, 55, 2, 1, 1, 32, 83, 22, 18, 14]

let selectionSort = (array) => {
    for (let j = 0; j < array.length; j ++) {
        let lowestNumberIndex = j
        for (let i = j + 1; i < array.length; i++) {
            if (array[i] < array[lowestNumberIndex]) {
                lowestNumberIndex = i;
            }
        }
        temp = array[j]
        array[j] = array[lowestNumberIndex];
        array[lowestNumberIndex] = temp;
    }return array
}
console.log(selectionSort(numbers))