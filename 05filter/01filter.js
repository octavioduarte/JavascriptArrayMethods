// The filter() method creates an array filled with all array elements that pass a test (provided as a function).



const cars = [
    { id: 1, name: 'Cronos', manufacturer: 'Fiat', color: 'blue' },
    { id: 2, name: 'C3', manufacturer: 'Citroen', color: 'green' },
    { id: 3, name: 'Fox', manufacturer: 'Volkswagen', color: 'blue' },
    { id: 4, name: 'Sandero', manufacturer: 'Renault', color: 'pink' },
    { id: 5, name: 'Cruze', manufacturer: 'Chevrolet', color: 'yellow' }
]


const blueCars = cars.filter(car => car.color === 'blue');
console.log(blueCars)


// Output 

// [
//    { id: 1, name: 'Cronos', manufacturer: 'Fiat', color: 'blue' },
//    { id: 3, name: 'Fox', manufacturer: 'Volkswagen', color: 'blue' }
// ]


// The filter method is useful when we need all the items that satisfy the search
