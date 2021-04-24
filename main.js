let quotes = [{
    author: "Audrey Hepburn.",
    quote: "The most important thing is to enjoy your life — to be happy— it's all that matters."
},
{
    author: "Steve Jobs",
    quote: "Your time is limited, so don't waste it living someone else's life."
},
{
    author: "Epictetus",
    quote: "How long are you going to wait before you demand the best for yourself?"
},
{
    author: "Marcus Aurelius",
    quote: "The happiness of your life depends upon the quality of your thoughts."
},
{
    author: "Mark Strand",
    quote: "The future is always beginning now"
},
{
    author: "Harper Lee",
    quote: "You never really understand a person until you consider things from his point of view … Until you climb inside of his skin and walk around in it."
},
{
    author: "J.R.R Tolkein",
    quote: "All we have to decide is what to do with the time that is given us."
},
{
    author: "René Descartes",
    quote: "I think; therefore I am."
},
{
    author:"Mircea Eliade",
    quote: "If we pay no attention to it, time does not exist."

},
{
    author: "Spinoza",
    quote: "I can control my passions and emotions if I can understand their nature."
}];

document.getElementById("box").onclick = function displayQuote() {
    let random = quotes[Math.floor(Math.random() * (quotes.length))];
    document.getElementById("author").innerHTML = random.author;
    document.getElementById("quote").innerHTML = random.quote;
}