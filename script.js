// Get quotes from API

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn =  document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function newQuote() {
    loading();
    const randomQuotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

    !randomQuotes.author ? author.textContent = '- Unknown' : author.textContent = `- ${randomQuotes.author}`;
    randomQuotes.text.length > 150 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote');

    quoteText.textContent = randomQuotes.text;
    complete();
}

async function getQuoteAPI() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.errors(error);
    }
}


function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(tweetUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


getQuoteAPI();