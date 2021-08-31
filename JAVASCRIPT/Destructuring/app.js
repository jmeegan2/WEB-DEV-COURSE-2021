// const scores = [929321, 899341, 888336, 772739,4]

// const highScore = scores[0];
// const secondsHighScore = scores[1];

// const [gold, silver, bronze, ...everyoneElse] = scores;

const user ={
    email: 'harvey@gmail.com',
    password: 'boobies',
    firstName: 'James',
    lastName: 'Meegan',
    born: '1979',
    died: '2000'
    
}

const user2 ={
    email: 'hay@gmail.com',
    password: 'bs',
    firstName: 'The Snake',
    lastName: 'slither',
    born: '1984',
    city: 'buffalo',
    state: 'New York'
 
    
}

// const firstName = user.firstName
// const lastName = user.lastName

// const { email, firstName, lastName, died } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const {city, state, died} = user2

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user) {
//     const {firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`
}

movies = [
    {
        title: 'Amadeus',
        score: 98,
        year: 1984

    },
    {
        title: 'Stand by ME!',
        score: 79,
        year: 2013
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2004
    },
    {
        title: 'Arrival',
        score: 69,
        year: 2016
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score}) => 90)

// const movieCrap = movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map (({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})