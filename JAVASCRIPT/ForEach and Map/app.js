const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const doubles =numbers.map(function(num){
//     return num * 2;
// })


// numbers.forEach(function (el) {
//     if(el % 2 === 0){
//     console.log(el)
//     }
// })

// for (let el of numbers) {
//     console.log(el);
// }

movies = [
    {
        title: 'Amadeus',
        scorre: 99

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

const titles = movies.map(function (movie){
    return movie.title.toUpperCase();
})
// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })