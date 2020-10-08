

var officeQuotes = event => {
    fetch('https://www.officeapi.dev/api/quotes/random')
    .then(response => response.json())
    .then(function(json){

        var quote = document.createElement('h2');
        var node = document.createTextNode(json.data.content); 
        quote.appendChild(node);
        var element = document.getElementById("quoteContainer");
        element.appendChild(quote);

})
.catch(err => console.log('Request Failed', err));
   
}

var officeButton = document.querySelector(".btn-main");
officeButton.addEventListener('click', officeQuotes);