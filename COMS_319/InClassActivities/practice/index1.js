fetch('./persons.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    appendData(data);
})
.catch(function(err){
    console.log('Error: '+ err);
})

function appendData(data){
    var mainContainer = document.getElementById("myData1");
    var div = document.createElement("div");
    div.innerHTML = `<br>
                    <H1> Hello ${data.firstName} Welcome to the application!
                    <h4>Your details:</h4>
                    Your first name: ${data.firstName}<br>
                    Your last name: ${data.lastName}<br>
                    Your Age: ${data.age}<br>
                    Your Profession: ${data.profession}<br>
                    Your ID: ${data.id}`;
    mainContainer.appendChild(div);
}