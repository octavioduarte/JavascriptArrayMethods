// The find() method returns the value of the first element in an array that pass a test (provided as a function). (https://www.w3schools.com/jsref/jsref_find.asp)

const cars = [
    { id: 1, name: 'Cronos', manufacturer: 'Fiat', color: 'blue' },
    { id: 2, name: 'C3', manufacturer: 'Citroen', color: 'green' },
    { id: 3, name: 'Fox', manufacturer: 'Volkswagen', color: 'blue' },
    { id: 4, name: 'Sandero', manufacturer: 'Renault', color: 'pink' },
    { id: 5, name: 'Cruze', manufacturer: 'Chevrolet', color: 'yellow' }
]


const blueCar = cars.find(car => car.color === 'blue');
console.log(blueCar)

// Output

// { id: 1, name: 'Cronos', manufacturer: 'Fiat', color: 'blue' }

// Note that the Fox car also meets the search parameters, but the find method will always return the FIRST OBJECT that satisfies the search.
