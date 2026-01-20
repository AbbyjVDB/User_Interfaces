fetch('./superheroes.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendMoreData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })



function appendMoreData(data) {
    let mainContainer = document.getElementById("myData2");
    for (let person of data) {
    console.log(person);
    let div = document.createElement("div");
    div.innerHTML = `<br>
        <h1> Superhero : </h1>
        Firstname : ${person.firstName} <br>
        Lastname : ${person.lastName} <br>
        Job : ${person.job} <br>
        Roll : ${person.roll}`;
    mainContainer.appendChild(div);
    }
} // end of function appendData