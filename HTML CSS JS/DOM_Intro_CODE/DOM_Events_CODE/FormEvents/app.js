

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}
/////////////////////////////////////////////////


// const form = document.querySelector('form');
// const ulContainer = document.querySelector('ul')
 
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const qty = form.elements.qty.value; // you need to use .elements here (plural)
//     const prod = form.elements.product.value; // you need to use .elements here (plural)
 
//     const newLi = document.createElement('li');
//     // newLi.append(qty);
//     // newLi.append(prod);
//     newLi.innerText = `${qty} ${prod}`;
//     // ulContainer.append(newLi);
//     ulContainer.appendChild(newLi);
 
//     form.elements.qty.value = ''; // you need to use .elements here (plural)
//     form.elements.product.value = ''; // you need to use .elements here (plural)
// });