// 2.Create a program on Random Quote that displays random quotes to users each time they click a button. It utilizes
//   JavaScript to select a quote randomly from an array and updates the HTML content dynamically using DOM manipulation.//Final JavaScript

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let button = document.getElementById("button");

const apiData = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(apiData)
        .then((res) => res.json())
        .then((data) => {
            if (data.content && data.author) {
                quote.innerHTML = `"${data.content}"`;
                author.innerHTML = `- ${data.author}`;
            } else {
                alert('Error retrieving the Quote!');
            }
        })
};
window.addEventListener("load", getQuote);
button.addEventListener("click", getQuote);