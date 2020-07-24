const tweetButton = document.querySelector('#tweet-submit');
const tweetInput = document.querySelector('#tweet-input');
const list = document.querySelector('#list');
const myStorage = localStorage;

tweetButton.addEventListener('click', saveTweet);

function printListItemLocalStorage() {
    for (let index = 0; index < myStorage.length; index++) {
        let itemList = document.createElement('li')
        console.log(myStorage.getItem(myStorage.key(index)) );
        let storageItem = myStorage.getItem(myStorage.key(index))
        itemList.append(storageItem);
        list.appendChild(itemList);
    }
}

function saveTweet(event){
    let tweet = tweetInput.value;
    localStorage.setItem(tweet, tweet);
    console.log(`${tweet} guardado con exito `);
    event.preventDefault();
    printListItemLocalStorage();
}