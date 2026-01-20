//traditional funciton declaration
function add(a,b){
    return a + b;
};

//traditional anonymous functions
// function (a,b){
//     return a + b;
// };

let add = function (a,b){
    return a + b;
};

add(5, 6);

//arrow function
let add = (a,b) => a + b;
add(5, 6);

//if there is only one argument, () can be removed 
let show = a => console.log("Hello", a);

//if there is no argument, use empty parathesis to indicate
let showData = () => console.log("Hello All");

//if body contains more than one statement, use brackets
let showDatas = (a,b) =>{
    console.log("Hello All :");
    a = a % 2;
    return a + b;
}
