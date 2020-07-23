let tweetButton = document.querySelector('#tweet-submit');
let tweetInput = document.querySelector('#tweet-input');

tweetButton.addEventListener('submit', getTweet);

function getTweet(event){
    console.log(event.target);
}