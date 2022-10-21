let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    for (let secIndex = 0; secIndex < numbers.length; secIndex += 1) {
        if (numbers[index] < numbers[secIndex]) {
            let position = numbers[index]
            numbers[index] = numbers[secIndex];
            numbers[secIndex] = position;
        }
    }
}
console.log(numbers);