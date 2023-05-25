/* თითოეულ საკითზე გაეცით პასუხი და მოიყვანეთ მაგალითები! */

/* variables */
// /რა არის ცვლადი (variable)?/;
// ცვლადი არის კონტეინერი რომელიც გამოიყენება მნიშვნელობების შშესანახად ე.წ value, მასში ვინახავთ მონაცემებს რომელსაც შემდეგ გამოვიყენებთ სხვადასხვა ოპერაციების შესასრულებლად, მაგალითად:
let username = "mari";
console.log(`hello ${username}`);


// /რა არის მინიჭების ოპერატორი (assignment operator)?/;
// მინიჭების ოპერატორი ცვლადს ანიჭებს მნიშვნელობას, ვიყენებთ ტოლობის ნიშანს
let surname = "abeadze";
// შევქმენით ცვლადი სახელით surname და ტოლობის ნიშნით ანუ მინიჭერბის ოპერატორით მივანიჭეთ მნიშვნელობა, ასევე შეგვიძლია შევასრულო მოქმედებები
let a = 7;
let b = 8;
let c = a + b;
console.log(c);



// /რა არის მნიშვნელობა (value)?/;
// მნიშვნელობა არის ის მონაცემი რაც ინახება ცვლადში, მNიშვნელობა შეიძლება იყოს სხვადასხვანაირი მაგალითად string,number, boolean,undefined, null, symbol
let animal = "cat";
let age = 21;
let isSunny = true;
let animals = ['dog', 'cat', 'shark', 'capybara'];



// /* conditionals */
// /რას ეწოდება კოდის ბლოკი (code block)?/;
// ბლოკი არის განცხადებების ერთობლიობა {}, იგი გვეხმარება რაღაც ლოგიკით დავაჯგუფოთ განცხადებები მაგალითად ვიყენებთ ფუნქციებში, ობიექტებში ან სხვა 
function greet(name){
    if (name){
        return `hello ${name}`
    }else{
        return `please write your name`
    }
}
console.log(greet())
// /რა არის [if | else | else if]?/;
// პირობითი განცხადებები რომელიც გამოიყენება რაღაც პირობების შესასრულებლად 
function myAge(age){
if (age < 18){
    return "forbidden in the club"
}else if( age < 30){
    return "u may enter"
}else {
    return "free enrtry"
}
}

console.log(myAge(14));



// /როგორ მუშაობს: [და, ან, არა] ოპერატორები (and, or, not)?/;
// იგივე ლოგიკური ოპერატორები, გამოიყენება ცვლადებსა და მნიშვნელობებს შორის ლოგიკის დასადგენად
// AND (&&) operator
let x = true;
let y = false;
let result1 = x && y; 

// OR (||) operator
let m = true;
let n = false;
let result2 = m || n; 

// NOT (!) operator
let g = true;
let result3 = !g; 

console.log(result1);
console.log(result2);
console.log(result3);



