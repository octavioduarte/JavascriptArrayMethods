//  reduce seeks to reduce an array. It will iterate through each element of this list in order to ultimately 
//  generate a single value (of any type), such as the sum of all the elements of that array.
//  Remembering that we are not just stuck with numbers.
//  https://medium.com/@raullesteves/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380


const spendingMay = [
    { cost: 240, product: 'beer' },
    { cost: 95, product: 'clothes' },
    { cost: 120, product: 'gasoline' }
]


const totalSpendingMay = spendingMay.reduce((accumulated, currentValue) => accumulated += currentValue.cost, 0)
console.log(`Total spending may ${totalSpendingMay}`)

// Output: 455

// Where

// accumulated  = accumulated result of callback method
// currentValue = current value used on callback
// 0 = initial value of accumulated 




// ------------------------------------------------------------------------------------------------------------------

const spendingApril = [
    { cost: 149.50, product: 'beer' },
    { cost: 120.31, product: 'clothes' },
    { cost: 83, product: 'gasoline' }
]


const totalSpendingMayAndApril = spendingMay.reduce((accumulatedMayAndApril, currentValueMayAndApril) =>
    accumulatedMayAndApril += currentValueMayAndApril.cost,
    spendingApril.reduce((accumulatedApril, currentValueApril) => accumulatedApril += currentValueApril.cost, 0)
)


console.log(`Total spending may and april ${Math.round(totalSpendingMayAndApril)}`)

// Output: 808

// In this case, we attribute the result of the April expenses to the accumulator of the first method reduce.
// This means that we can cumulatively add values ​​from different arrays