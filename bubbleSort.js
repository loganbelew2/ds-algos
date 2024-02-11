// big O time complexity is O(n^2) for bubble sort, space complexity is O(1)
const numbers = [99, 55, 2, 1, 1, 32, 83, 22, 18, 14]

let bubbleSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                temp = array[j + 1];
                array[j+1] = temp;
            }
        }
    }return array
}


console.log(bubbleSort(numbers))
