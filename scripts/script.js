let tweetButton = document.querySelector('#tweet-submit');
let tweetInput = document.querySelector('#tweet-input');

tweetButton.addEventListener('click', saveTweet);

function saveTweet(event){
    let tweet = tweetInput.value;
    console.log('bien', tweet);
    event.preventDefault();
}