const form = document.querySelector('.form')
const list = document.querySelector('#list');
const myStorage = localStorage;

eventListener();

function eventListener() {
    form.addEventListener('submit', createTweetNodeItemList);
}
function getTweetsLocalStorage() {
    for (let index = 0; index < myStorage.length; index++) {
        let storageItem = myStorage.getItem(myStorage.key(index));
    }
}

function createTweetNodeItemList(event) {
    event.preventDefault();
    const tweet = document.querySelector('#tweet-input').value;

    let itemList = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.style.backgroundColor = 'red'
    deleteButton.innerText = 'X';
    deleteButton.onclick = deleteTweet;
    itemList.appendChild(deleteButton);
    itemList.append(tweet);
    list.append(itemList);
}

function saveTweet(){
    let tweet = tweetInput.value;
    localStorage.setItem(tweet, tweet);
}

function deleteTweet(event) {
    let tweetNodeNumber = 1;
    let textTweetNode = event.target.parentNode.childNodes[tweetNodeNumber];
    event.target.parentNode.remove();
    myStorage.removeItem(myStorage.key(textTweetNode));
}