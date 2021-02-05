// We use forEach to take action for each item in the iteration, but it’s important 
// to note that forEach doesn’t manipulate data, it just takes action



// --------------------------------------------------------- When NOT to use forEach ---------------------------------------------------------


const numbers = [2, 4, 6, 8, 10]

numbers.forEach(item => item * 2)

console.log(`(Bad example forEach) : ${numbers}`)

// Output

// [ 2, 4, 6, 8, 10 ]

// Note that the array kept the value, as forEach does not manipulate the data 


// --------------------------------------------------------- When to use forEach ---------------------------------------------------------

const users = [
    { name: 'Ian Gillan', email: 'ian@dp.com' },
    { name: 'Bruce Dickinson', email: 'bruce@im.com' },
    { name: 'Ronnie James Dio', email: 'ronnie@dio.com' },
]



users.forEach(user => sendEmailUser(user.name, user.email))



function sendEmailUser(userName, userEmail) {
    console.log('-----------------------------')
    console.info(`(Good example forEach) Send email to : ${userName}`)
    console.info(`(Good example forEach) Email: ${userEmail}`)
}


// Note that an action was taken before each iteration, but the values ​​were not manipulated


// -------------------------------------------------------------------------------------------------------------------------------------------