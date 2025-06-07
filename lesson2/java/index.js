'use strict';

//////1 
for (let index= 5; index <=100; index++) {
    console.log(index);
    
}


///////2

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let namber of array1) {
    if (namber > 0 && namber <10) {
        console.log(namber);
    }
}

///////3

let array2 = [1,2,3,4,5]
let sum = 0

for (let namber of array2) {
    sum+=namber 
}

console.log(sum);



////////4

let array3 = [1,2,3,4,5]
let nam=0

for (let namber of array3) {
    nam += namber
}

let avarage = sum / array3.length; 
console.log(avarage);

///////5 

let user= {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatuse: "active"
};
console.log(user.studentstatuse);


