const tweetButton = document.querySelector('#tweet-submit');
const tweetInput = document.querySelector('#tweet-input');
const list = document.querySelector('#list');
const myStorage = localStorage;

tweetButton.addEventListener('click', saveTweet);
printListItemLocalStorage();

function printListItemLocalStorage() {
    for (let index = 0; index < myStorage.length; index++) {
        let itemList = document.createElement('li');
        let storageItem = myStorage.getItem(myStorage.key(index))
        itemList.append(storageItem);
        list.appendChild(itemList);
    }
}

function saveTweet(event){
    let tweet = tweetInput.value;
    localStorage.setItem(tweet, tweet);
}