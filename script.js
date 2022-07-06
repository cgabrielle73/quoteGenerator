// Get quotes from API

let apiQuotes = [];

async function getQuoteAPI() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();

        for(let i = 0; i <= apiQuotes.length; i++) {
            console.log(apiQuotes[i])
            return apiQuotes[i];
        }
        // console.log(apiQuotes);

        // return quotes;
    } catch (error) {
        console.errors(error);
    }
}

getQuoteAPI();