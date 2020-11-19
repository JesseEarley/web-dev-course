const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

const array = [1,2,10,16];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

const mapArray = array.map((num) => {
    return num * 2;
});

//map
const mapArray = array.map(num => num * 2);

//filter
const filterArray = array.filter(num => num > 5);

console.log(filterArray);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log("reduce", reduceArray);