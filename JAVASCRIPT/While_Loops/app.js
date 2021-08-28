// let count = 0;
// while(count <= 10){
//     console.log(count)
//     count++;
// }

// while(!gameOver) {
//     //player 1 move
//     //player 2 move
// }

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while(guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!")