// Unlike the forEach method, the map is recommended when we want to create data manipulation


const users = [
    {
        email: 'geezer@sv.com',
        isValidEmail: false,
        name: 'Geezer Butler'
    },
    {
        email: 'bill@server.com',
        isValidEmail: false,
        name: 'Bill Ward',
    },
    {
        email: 'ozzy@mail.com',
        isValidEmail: false,
        name: 'Ozzy Osbourne'
    },
    {
        email: 'tommy@mail.com',
        isValidEmail: false,
        name: 'Tommy Iommi'
    },
    {
        email: 'robhalford.com',
        isValidEmail: false,
        name: 'Rob Halford'
    }
]

const usersWithValidatedEmail = users.map((user) => ({
    ...user,
    isValidEmail: user.email.indexOf('@') > -1 // check if string contains @
}))

console.log(usersWithValidatedEmail)


// Note that we created a new array with manipulated information and assigned the constant: `usersWithValidationEmail`
// It is interesting to note that the use of the map method makes sense when the result is attributed to a variable
