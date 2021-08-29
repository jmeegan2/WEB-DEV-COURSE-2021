function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

function greet(firstName, lastname) {
    console.log(`Hey there, ${firstName} ${lastname[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
}