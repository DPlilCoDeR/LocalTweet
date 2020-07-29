const form = document.querySelector('.form')
const list = document.querySelector('#list');
const myStorage = localStorage;

eventListener();

function eventListener() {
    form.addEventListener('submit', createTweetNodeItemList);
    document.addEventListener('DOMContentLoaded', getTweetsLocalStorage);
}

function getTweetsLocalStorage() {
    for (let index = 0; index < myStorage.length; index++) {
        let storageItem = myStorage.getItem(myStorage.key(index));
        let itemList = document.createElement('li');
        let deleteButton = document.createElement('button');
        deleteButton.style.color = 'red'
        deleteButton.innerText = 'X';

        deleteButton.onclick = deleteTweet;
        itemList.appendChild(deleteButton);
        itemList.append(storageItem);
        list.append(itemList);
    }
}

function createTweetNodeItemList(event) {
    event.preventDefault();
    const tweet = document.querySelector('#tweet-input').value;

    let itemList = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.style.color = 'red'
    deleteButton.innerText = 'X';

    deleteButton.onclick = deleteTweet;
    itemList.appendChild(deleteButton);
    itemList.append(tweet);
    list.append(itemList);

    saveTweet(tweet);
}

function saveTweet(tweet){
    localStorage.setItem(tweet, tweet);
}

function deleteTweet(event) {
    let tweetNodeNumber = 1;
    let textTweetNode = event.target.parentNode.childNodes[tweetNodeNumber];
    event.target.parentNode.remove();
    myStorage.removeItem(myStorage.key(textTweetNode));
}