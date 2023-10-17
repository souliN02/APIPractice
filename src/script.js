const KanyeAPI = "https://api.kanye.rest"

document.addEventListener("DOMContentLoaded", async function() {
    getKanyeQuote()
})

async function getKanyeQuote() {
    let request = new Request(KanyeAPI)
    const response = await fetch(KanyeAPI)
    const quote = await response.json()

    console.log(quote)
    populateSection(quote)
}

function populateSection(data) {
    let section = document.querySelector("section");
    let quoteElement = document.createElement("h2");
    quoteElement.textContent = data.quote;
    section.appendChild(quoteElement);
}