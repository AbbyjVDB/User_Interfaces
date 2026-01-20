//Exercise 1
let n1 = 11;
let n2 = 10;
function maxOfTwo(x, y) {
    if (x > y){
        return x;
    }else if (x < y){
        return y;
    }else{
        return null;
    }
}

console.log(`The max between ${n1} and ${n2} is : `, maxOfTwo(n1, n2));

//Exercise 2
let array = [10, 11, 1024, 125, 9, 201];
function maxOfArray(array){
    let start = array[0];
    for(let value of array){
        if(value > start){
            start = value;
        }
    }
    return start;
}

console.log(`The max of the array ${array} is : `, maxOfArray(array));

//Exercise 3
const movie = {
    title: 'Some Movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg'
};
function showProperties(movie){
    console.log('List of Keys: ')
    for (let key in movie){
        console.log(`
            ${key}`);
    }
    console.log('List of Values: ')
    for (let value in movie){
        console.log(`
            ${movie[value]}`);
    }
}
showProperties(movie);

//Exercise 4
const circle = {
    radius: 2,
    area: function(){
        return Math.PI * this.radius * this.radius;
    }
}
console.log(circle.area())

//Exercise 5
const circle2 = {
    radius: 2,
    area: function(){
        return Math.PI * this.radius * this.radius;
    },
    get radiusValue(){
        return this.radius;
    },
    set radiusValue(value){
        this.radius = value;
    }

}
console.log(`Area with ${circle2.radiusValue} :`,circle2.area());
circle2.radiusValue = 3;
console.log(`Area with ${circle2.radiusValue} :`,circle2.area());

//Exercise 6
const circle3 = {
    radius: 2,
    area: function(){
        return Math.PI * this.radius * this.radius;
    },
    getRadiusValue: function(){
        return this.radius;
    },
    setRadiusValue: function(value){
        this.radius = value;
    }

}
console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());
circle3.setRadiusValue(3);
console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());

//Exercise 7
function calculateAverageGrade(grades) {
  const values = Object.values(grades);
  const sum = values.reduce((acc, grade) => acc + grade, 0);
  const average = sum / values.length;
  return average;
}

const grades = {
    math: 85,
    science: 90,
    history: 75,
    literature: 88,
};
console.log(calculateAverageGrade(grades));
