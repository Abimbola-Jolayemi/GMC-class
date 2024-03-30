console.log("omo pedro");

// alert hello world

let cake = "strawberry";

// declaring my full name
let firstName = "Abimbola";
let lastName = "Jolayemi";
let middleName = "Comfort";

let fullName = firstName + " " + middleName + " " + lastName;

console.log("My name is", fullName);

// const goToDate = confirm("Will you go on a Date with me")

// if(goToDate){
//  alert("I got a girl")
// }else{
//     alert("Hustle continues")
// }

// conditional statement
// const happy = confirm("Are you happy?")
// if(happy){
//     console.log("I am happy")
// }else{
//     console.log("I am not happy")
// }

// const payment = confirm("Confirm Payments option?")
// if(payment){
//     console.log("Payment confirmed")
// }else{
//     console.log("Payment cancelled")
// }

// const username = prompt("What is your name")

// if (username === "Betty"){
//     console.log ("Welcome Betty")
// } else if (username === "Tobi"){
//     console.log("Welcome Tobi")
// } else{
//     console.log("Invalid Username")
// }

// const age = parseInt(prompt("How old are you?"))

// if (age>=18){
//     console.log("Welcome to the bar")
// }else{
//     console.log("You are not allowed in")
// }

// Functions in Javascript
// 1.
function greetings(user) {
  console.log("Welcome", user);
}
greetings("Tobi");
greetings("Abimbola");

// 2.
function greetings(user = "Zikas") {
  console.log("Welcome", user);
}
greetings("Tobi");
greetings("Abimbola");
greetings();

// 3.
function add(num, boo = 1) {
  return num * boo;
}
console.log(add(7, 3));

// ASSIGNMENT
// const age = parseInt(prompt("Kindly indicate your age?"))
// if (age < 18){
//     console.log("You are too young to apply for our training")
// }else if (age >= 18 && age <= 25){
//     console.log("You are eligible to apply for class 1");
// }else if(age > 25 && age <= 35){
//     console.log("You are eligible to apply for adult class 2");
// }else if(age > 35 && age <= 40){
//     console.log("You are eligible to apply for adult class 3");
// }else{
//     console.log("Do not apply because you are too old");
// }

// switch cases
// const pizza = prompt(
//   "Select your preference \n 1. Small size\n 2. Medium sized pizza\n 3. Large size\n 4. Family sized pizza"
// );

// switch (pizza) {
//   case "1":
//     confirm("You've selected the Small-sized pizza");
//     break;
//   case "2":
//     confirm("You've selected the Medium-sized pizza");
//     break;
//   case "3":
//     confirm("You've selected the Large-sized pizza");
//     break;
//   case "4":
//     confirm("You've selected the Family-sized pizza");
//     break;
//   default:
//     alert("Invalid input");
// }

// const drinks = prompt(
//   "Select your preference of drinks\n 1. Fanta\n 2. Coke\n 3. Mirinda\n 4. Sprite"
// );

// switch (drinks) {
//   case "1":
//     confirm("You chose to purchase Fanta");
//     break;
//   case "2":
//     confirm("You chose to purchase Coke");
//     break;
//   case "3":
//     confirm("You chose to purchase Mirinda");
//     break;
//   case "4":
//     confirm("You chose to purchase Sprite");
//     break;
//   default:
//     alert("Invalid input");
// }

// OBJECTS
const bender = {
    name: "Aang",
    age: "78",
    power: "Air",
    nation: "Air Nation",
}

const bender2 = {
    name: "Zuko",
    age: "83",
    power: ["Fire", "Water", "Air", "Earth"],
    nation: "Fire Nation",
    fight: function(){
        return "I will fight for peace with my "+this.power[0]+ " power"
    }
}

console.log(bender)
console.log(bender2.fight())

//for loop
//while loop
//for-while loop
//for-in loop
//for-of loop
let num=0

// while(num < 100){
//     console.log(`i will be a good girl ${num}`)
//     num++
// }

// do{
//     console.log("I love dancing")
//     num++
// } while(num < 110)

//Modern approach to concatenation
//Using template literals


//FOR LOOP
for (let i = 0; i < 7; i++){
  console.log("say hi", i)
}

//A SIMPLE ARRAY
let techskills = ["Fronten-Dev", "Cybersecurity", "Product Design", "Backend"]

for (let i=0; i<techskills.length; i++){
  console.log(`${techskills[i]} is a tech skill`)
}

for (let i=0; i<10; i++){
  if(i%2===0){
    console.log(`The number ${i} is even`)
  }else{
    console.log(`The number${i} is an odd number`)
  }
}

// for (let x=0; x<50; x++){
//   if(x%10===0){
//     console.log(`The number ${x} is even`)
//   }else{
//     console.log(`The number${x} is an odd number`)
//   }
// }


// const arr = []

// while (arr.length < 5){
//   const items = prompt("Enter an item")
//   arr.push(items)

// }

// console.log(arr)

// // FOR IN LOOP
// for(i in arr){
//   console.log('You have entered', arr[i])
// }


const plenty = [23, 78, 90, 12]
let sum = 0

for(let value of plenty){
  sum+=value
  }

  console.log(sum)

