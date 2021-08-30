// const add = fuction(x,y) {
//     return x + y;
// }

// const add = (x,y) => {
//     return x + y;
// }

// const square = num => {
//     return num * num;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1 
// }

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1 
// )

// const add = (a, b) => a + b

movies = [
    {
        title: 'Amadeus',
        score: 98

    },
    {
        title: 'Stand by ME!',
        score: 84
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map(movie => 
    `${movie.title} - ${movie.score / 10}`
)

