const exams = [ 10,32,33,44,65,76,87,98,99]

exams.every(score => score >= 75)
// numbers.filter(n => {
//     return n < 10
// })

const movies = [
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


movies.some(movie => movie.year > 2015)