// problem 5

const numbers = [];
for (let i = -100; i<=100; i++){
    numbers.push(i);
}
console.log(numbers);

// problem 6

for(let i = -100; i<=100; i++){
    numbers.push(i*i*i);
}
console.log(numbers);

// problem 7

const firstNames = ["Nika", "Mari", "Nikita", "Eka", "Tama", "Giorgi", "Nuca", "Teo", "daviti", "mariami"];
const lowerCased =firstNames.map( firstNames => firstNames.toLowerCase());
console.log(lowerCased);

// problem 8

const capitalized = firstNames.map(firstNames => {
    const firstLetter = firstNames.charAt(0).toUpperCase();
    const rest = firstNames.slice(1).toLowerCase();

    return firstLetter + rest;
});

console.log(capitalized);

// problem 9

const lastNames = ["gotsadze", "abesadze", "beridze", "rekhviashvili", "tchanturia", "kizivadze", "giorgadze", "sarjveladze", "paikidze"];
const upperCased= lastNames.map(lastNames => lastNames.toUpperCase());

console.log(upperCased);



// problem 10


for (let i = 0; i<10; i++){
    const fullNames = [firstNames[i]+ ' ' + lastNames[i]];
    console.log(fullNames)
    
}







