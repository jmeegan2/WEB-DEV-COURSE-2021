const numbers = [ 1,2,3,4,5,6,7,8,9]

numbers.filter(n => {
    return n < 10
})

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

// const goodMovies = movies.filter(movies => {
//     return movies.score > 80
// })

//another way

const goodMovies = movies.filter(m => m.score > 80)
movies.filter(m => m.score > 80).map(m => m.title)
const goodTitles = goodMovies.map(m => m.title)

const badMovies = movies.filter(m => m.score < 70)
const recentMovies = movies.filter(m => m.year > 2000)


