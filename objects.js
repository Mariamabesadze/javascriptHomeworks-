// 1. Write a JavaScript program to list the properties of a JavaScript object.

let student = {
    name: 'mari',
    class: '4',
    rollno: '7',

}
console.log(student.name);
console.log(student.class);
console.log(student.rollno);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

delete student.rollno
console.log(student.rollno);

// 3. Write a JavaScript program to get the length of a JavaScript object. 

let size = Object.keys(student).length;
console.log(size);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

let library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for(let i=0; i<library.length; i++){
    let book = `${library[i].title} by ${library[i].author}`
    if(library[i].readingStatus){
        console.log("already read " + book);
    }else{
        console.log("u still need to read " + book);
    }
}

// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes. 
function cylVolume(radius,height){
    let volume;
    volume = Math.PI * radius * radius * height;
    return `volume = ${volume} `;
}

console.log(cylVolume(3, 4));

// 6. Write a bubble sort algorithm in JavaScript.

let numbers = [6,4,0, 3,-2,1];
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

// 7. Write a JavaScript program that returns a subset of a string. 

function combination(string){
    let subset = [];
    for(let i=0; i<string.length+1; i++){
         for(let m = string.length + 1; m>0; m--){
            subset.push(string.substring(i,m));
         }
    }
 return [...new Set(subset)];
}

console.log(combination('dog'));


