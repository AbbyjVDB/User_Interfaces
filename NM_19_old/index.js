// JavaScript code for the project corresponding to index.html
//Jackson Weatherspoon
fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendFeaturette(data);
        //function to process stuff
    })
   .catch(function (err) {
        console.log('error: ' + err);
   });

function appendFeaturette(data){
    let featurettes = data.featurettes;
    let mainRow = document.getElementById("featurette-container");
    
    // let p = document.createElement("p");
    // p.innerHTML = `${featurettes[0].content}`;

    // mainRow.appendChild(p);

    imgRight = true;

    for(let featurette of featurettes){
        console.log(featurette);

        contentClass = "";
        imgClass = "";

        if(imgRight){
            //sets columns so content is on the left and image on the right
            contentClass = "col-md-7";
            imgClass = "col-md-5";
        }
        else{
            //sets columns so content is on the right and image on the left

            contentClass = "col-md-7 order-md-2";
            imgClass = "col-md-5 order-md-1";
        }

        //adds divider at the top
        let hr = document.createElement("hr");
        hr.className = "featurette-divider";
        mainRow.appendChild(hr);

        let rowFeaturette = document.createElement("div");
        rowFeaturette.className = "row featurette";

        let contentDiv = document.createElement("div");
        contentDiv.className = contentClass;
        contentDiv.innerHTML = `
             <h2 class="featurette-heading fw-normal lh-1">
              ${featurette.title}
              <span class="text-body-secondary">${featurette.secondaryText}</span>
            </h2>
            <p class="lead"> ${featurette.content}</p>
            `;

        let imgDiv = document.createElement("div");
        imgDiv.className = imgClass;
        imgDiv.innerHTML = `<img id="featurette-img" height="500" width="500" src=${featurette.imagePath} alt=${featurette.imageAlt}>`;

        rowFeaturette.appendChild(contentDiv);
        rowFeaturette.appendChild(imgDiv);
        mainRow.appendChild(rowFeaturette);

        imgRight = !imgRight;
    }

     let hr = document.createElement("hr");
    hr.className = "featurette-divider";
    mainRow.appendChild(hr);

}
