import quotes from "./quote";

import { useState } from "react";

function QuoteBox({ quote, author }) {
  return (
    <blockquote id="quote-block">
      <p id="text">{quote}</p>
      <footer>
        <cite id="author">{author}</cite>
      </footer>
    </blockquote>
  )
}

function Controls({ onNewQuote, tweetURL }) {
  return (
    <div id="control-bar">
      <a id="new-quote" className="clickable" title="New Quote" onClick={onNewQuote}>
        <i class="fa-solid fa-square-plus fa-2xl"></i>
      </a>
      <a id="tweet-quote" className="clickable" title="Tweet Quote" href={tweetURL}>
        <i class="fa-brands fa-square-twitter fa-2xl"></i>
      </a>
    </div>
  );
}

export default function RandomQuoteMachine() {
  const length = quotes.length;

  const [index, setIndex] = useState(getRandomIndex(length));

  const { quote, author } = quotes[index];
  const quoteText = `"${quote}" -${author}`
  const tweetURL = encodeURI(
    `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quoteText}`
  );

  function handleNewQuote() {
    setIndex(getRandomIndex(length));
  }
  
  return (
    <div id="quote-box">
      <QuoteBox quote={quote} author={author}/>
      <Controls onNewQuote={handleNewQuote} tweetURL={tweetURL}/>
    </div>
  );
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}