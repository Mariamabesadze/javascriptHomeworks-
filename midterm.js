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

// /როგორ მუშაობს switch (case და default)?/;
// switch ფუნქცია ადარებს სხვადასხვა შემთხვეცებს, case , ერთმანეთს. if else else if გამოყენების მაგივრად შეგვიძლია გამოვიყენოთ switch ფუნქცია.
let season = 3;
let seasonName;

switch (season) {
  case 1:
    seasonName = "spring";
    break;
  case 2:
    seasonName = "summer";
    break;
  case 3:
    seasonName = "autumn";
    break;
  case 4:
    seasonName = "winter";
    break;
  default:
    dayName = "Invalid season";
}

console.log(seasonName); // Output: Wednesday

// /* array */

// /ახსენით რა არის და რისთვის გამოიყენება მონაცემთა სტრუქტურები (data structures)?/;
// მონაცემთ სტრუქტურები არის მონაცემთა დახარისხების ფორმა jsში, იგი ხელს გვიწყობს ინფორმაციის უფრო ეფექტურად  დახარისხებაში:array, object, map, set

// /რა არის მასივი (array)?/;
// array არის მონაცემტა სტრუქტურა jsში რომელიც საშვალებას გვაძლევს შევინახოთ ბევრი მნიშვნელობა ერთ ცვლადში
let fruits = ["apple", "orange", "bannana", "kiwi", "strawberry"];
console.log(fruits[2]);

// /როგორ ხდება მასივის მანიპულირება [წვდომა, წაშლა, ჩამატება, შეცვლა]?/;
fruits.push("watermelon");
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.splice(1, 1, "melon");
console.log(fruits);

// /* loops */
// /რა არის ციკლი?/;
// loop გამოიყენება რაიმე კოდის ბლოკის განმეორებით შესასრულებლად, სანამ გარკვეული პირობა არ დაკმაყოფილდება.არსებობს for, while, dowhile ლუპები 



// /რა არის იტერაცია იგივე ბიჯი?/;

// /როგორ მუშაობს for ციკლი?/;
for(let i= 0; i<10; i++){
    console.log(i);
}


// /როგორ მუშაობს while ციკლი?/;
let i = 0;
while(i<10){
    console.log(i);
    i++
}

// /როგორ მუშაობს do while ციკლი?/;
let f = 0;
do{
    console.log(f);
    f++;
}while(f<4);

// /რა სხვაობაა [break -ს და continue -ს] შორის?/;
// break განცხადება ასრულებს ლუპს ანუ გამოდის მარყუჟიდან ხოლო continue განცხადება ახტება კონკრეტულს შემთხვევას და აგრდძელებს ლუპს 
for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);
  }

  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }

// /* functions */
// /რა არის ფუნქცია და როგორ მუშაობს ის?/;
//  ფუნქციები არის კოდის მრავალჯერადი გამოყენების ბლოკები, რომლებიც შეიძლება განისაზღვროს და გამოიძახოს კონკრეტული დავალების შესასრულებლად. 
function functionName(parameter1, parameter2) {
    // Function body
    // Code to be executed
    return result; // Optional: Return a value
  }
  

// /რა არის ფუნქციის ტანი (function body)?/;
// ფუნქციის ტანი არის ის რაც იწერება ფიგურულ ფრჩხილებში 

// /რას ნიშნავს ფუნქციის განსაზღვრა (definition)?/;
// ჯერ უნდა განისაზღვროს ფუნქცია და შემდეგ უნდა გამოვიძახოთ, დავარქმევთ ფუნქციას სახელს, გადავცემთ პარამეტრს რომელიც შეიძლება იყოს ერთი ან ერთზე მეტი და შეგვიძლია გამოვყოთ მძიმით function(parameter1, parameter2...),განცხადებები რომელიც განსაზღვრავენ ფუნქციას {} ფრჩხილებში
function square(number) {
    return number * number;
  }



