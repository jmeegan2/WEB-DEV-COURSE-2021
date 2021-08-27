
// let random = Math.random();
// if(random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
// }else {
//     console.log("Your number is greater than 0.5")
// }
// console.log(random);
// const dayOfWeek = prompt("Enter A DAY").toLowerCase();

// if(dayOfWeek === 'monday'){
//     console.log("UGHHH I HATE MONDAYS!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS")
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent especially after work")
// } else {
//     console.log("MEH")
// }

// const age = 89;

// if(age < 5) {
//     console.log("You are a baby, you get in for free")
// } else if (age < 10) {
//     console.log("You are a child, you pay 10 dollars")
// } else if (age < 65) {
//     console.log("You are an adult. You Pay $20")
// } else {
//     console.log("You are a senior. You pay $10")
// }

const password = prompt("please enter a new password");

// Password must be 6+ characters
if(password.length >= 6) {
    //Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password Too Short! Must be 6+ characteres")
}
// Password cannot include space

 