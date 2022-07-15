import quotes from './quotes.js';

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');


function generateQuote() {

  // return a random index in the range of 0 and quote lenght

  const quoteIndex = Math.floor(Math.random() * (quotes.length - 1));
  const generatedQuote = quotes[quoteIndex];

  quote.textContent = `"${generatedQuote.quote}"`;
  author.textContent = generatedQuote.author;

  console.log(quotes.length);

}


newQuote.onclick = generateQuote;
window.onload = generateQuote;
