let tweetButton = document.querySelector('#tweet-submit');
let tweetInput = document.querySelector('#tweet-input');

tweetButton.addEventListener('click', saveTweet);

function saveTweet(event){
    let tweet = tweetInput.value;
    localStorage.setItem(tweet, tweet);
    console.log(`${tweet} guardado con exito `);
    event.preventDefault();
}