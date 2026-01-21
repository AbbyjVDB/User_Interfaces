// JavaScript code for the project corresponding to page3.html. Rename the file as per your project idea and make sure to include the author's name at the top in comments
//Jackson Weatherspoon

fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendConsoles(data);
        //function to process stuff
    })
   .catch(function (err) {
        console.log('error: ' + err);
   });

function appendConsoles(data){
    let consoles = data.risingConsoles;
    let grid = document.getElementById("albumGrid");

    for(let c of consoles){
        console.log(c);
        let col = document.createElement("div");
        col.className = "col";

        let card = document.createElement("div");
        card.className = "card shadow-sm";
        card.innerHTML = `<img src=${c.imagePath} alt=${c.imageAlt}>`


        let cardBody = document.createElement("div");
        cardBody.className = "card-body"
        cardBody.innerHTML = `<h2>${c.name}</h2> <p class="card-text"> Released:${c.released}<br>By: ${c.company}</p>`;

        card.appendChild(cardBody);

        col.appendChild(card);

        grid.appendChild(col);

    }
}
