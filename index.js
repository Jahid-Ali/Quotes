let realData = "";
let quotesData = "";

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweet = document.getElementById("tweet");


// To Post on twitter
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
};


// To Get New Post
const getNewQuotes = () => {
    let randNum = Math.floor(Math.random() * 1642);
    quotesData = realData[randNum];

    quotes.innerText = `${quotesData.text}`;
    // tenary operator
    (quotesData.author == null)
        ? (author.innerText = "UnKnown")
        : (author.innerText = `— ${quotesData.author}`);

};

// To Get Information From API
const getQuotes = async () => {                   //async..  function
    const api = "https://type.fit/api/quotes";
    try {

        let data = await fetch(api);
        realData = await data.json();       //convert json obj

        getNewQuotes();


        // console.log(realData.length);      //1643
        // console.log(realData[5].author);
        // console.log(realData[5].text);

    } catch (error) { }
};


// add event listener
newQ.addEventListener("click", getNewQuotes);

tweet.addEventListener("click", tweetNow);

getQuotes();
