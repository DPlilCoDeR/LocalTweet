const tweetButton = document.querySelector('#tweet-submit');
const tweetInput = document.querySelector('#tweet-input');
const list = document.querySelector('#list');
const myStorage = localStorage;

tweetButton.addEventListener('click', saveTweet);
printListItemLocalStorage();

function printListItemLocalStorage() {
    for (let index = 0; index < myStorage.length; index++) {
        let storageItem = myStorage.getItem(myStorage.key(index));
        createNodeItemList(storageItem);
    }
}

function createNodeItemList(storageItem) {
    let itemList = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.style.backgroundColor = 'red'
    deleteButton.innerText = 'X';
    deleteButton.onclick = deleteTweet;
    itemList.appendChild(deleteButton);
    itemList.append(storageItem);
    list.append(itemList);
}

function saveTweet(){
    let tweet = tweetInput.value;
    localStorage.setItem(tweet, tweet);
}

function deleteTweet(event) {
    let tweetNodeNumber = 1;
    let textTweetNode = event.target.parentNode.childNodes[tweetNodeNumber];
    myStorage.removeItem(myStorage.key(textTweetNode));
}