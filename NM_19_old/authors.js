// JavaScript code for the project corresponding to authors.html. Do not rename this file.
//Author: Jackson Weatherspoon

fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendAuthors(data);
        //function to process stuff
    })
   .catch(function (err) {
        console.log('error: ' + err);
   });

function appendAuthors(data){
    let authors = data.authors;
    let grid = document.getElementById("albumGrid");

    for(let author of authors){
        console.log(author);
        let col = document.createElement("div");
        col.className = "col";

        let card = document.createElement("div");
        card.className = "card shadow-sm";
        card.innerHTML = `<img src=${author.imagePath} alt=${author.imageAlt}>`


        let cardBody = document.createElement("div");
        cardBody.className = "card-body"
        cardBody.innerHTML = `<h2>${author.name}</h2> <p class="card-text"> ${author.description} </p>`;

        card.appendChild(cardBody);

        col.appendChild(card);

        grid.appendChild(col);

    }
}
