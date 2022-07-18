// function changeName() {
//   document.getElementById("demo").innerHTML = "Shwe zin thant";
//   console.log("ok");
// }

// function statement() {
//   //   var total = 5; //number
//   //   var dividedBy = 2;
//   //   var result = total % dividedBy; // % =>reminder , / =>result
//   //   console.log(result);
//   //
//   //   var total, dividedBy, result;
//   //   total = 5;
//   //   dividedBy = 2;
//   //   result = total / dividedBy;
//   //   console.log(result);
//   //
//   //   var firstName = "Shwe Zin"; //String
//   //   var lastName = "Thant";
//   //   var fullName = firstName + " " + lastName;
//   //   console.log(fullName);
//   //
//   //   const pi = 3.14;
//   //   pi = 3.67;
//   //   console.log(pi);
//   //
//   //   let result = (5 + 6) * 10;
//   // console.log(result);
//   //
//   //   let you = 5;
//   //   let YOU = 10;
//   //   console.log(YOU);
//   //
//   //   if (true) {
//   //     let x = 5;
//   //     console.log("x value", x);
//   //   }
//   //   console.log("x value", x);  //err
//
//   //   let num1 = 3;
//   //   num1++;
//   //   console.log(num1);
//   //
//   //   let num1 = 10;
//   //   let num2 = 5;
//   //   num1 += num2;
//   //   console.log(num1);
//   //
//   //   var profile = {
//   //     firstName: "Shwe",
//   //     middleName: "Zin",
//   //     lastName: "Thant",
//   //     age: 25,
//   //     address: "kpg",
//   //   };
//   //   console.log(profile.firstName);
//   //

//   //   var subjectOne = "myanmar";
//   //   var subjectTwo = "english";
//   //   var subjectThree = "Bio";
//   //   var subjects = ["myanmar", "english", "Bio"];
//   //   console.log(subjects[2]);

//   var num1 = 5 + "5";
//   console.log(typeof num1);
// }

//
// function displayName(name) {
//   console.log(name);
// }

// displayName("Sa Yar Ma gyi Shwe Zin");
// displayName("Sa Yar Gyi Nay Paing Soe");

// function displayName() {
//   var name = "Sa yar gyi nay";
//   var age = 25;
//   console.log(name, age);
// }
// displayName();

// function displayName(name, age, address) {
//   console.log(name, age, address);
// }
// displayName("Zin", 25, "kpg");
// displayName("Nay", 26, "chauk");

// function multiply(num1, num2) {
//   var result = num1 * num2;
//   console.log(result);
//code

// }
// multiply(10, 1);
// multiply(10, 2);

// function getName() {
//   return "Nay";
//   var reult = 3 + 8;
//   console.log(reult);
// }
// getName();
// console.log(getName());

// let name = Nay;
// console.log(name);

// let string1 = "sdflksfdlksoreifpsodkflsajklsfjd";
// var len = string1.length;
// console.log(len);

//String to array
// var string1 = "a,b,c,d,e,f";
// var result = string1.split(",");
// console.log(result.length, result);

//Template Literals
// var numberOne = 45;
// var numberTwo = 34;
// var numberThree = 34;

// var result =
//   "This is number one " +
//   numberOne +
//   "This is number two " +
//   numberTwo +
//   "This is number three" +
//   numberThree;

// console.log(result);

// var result1 = `This is number one ${numberOne} , This is number two ${numberTwo}, This is number three${numberThree} `;
// console.log(result1);

// toString()
// var numberOne = 300;
// console.log(numberOne + 100);

// var result = numberOne.toString();
// console.log(result + 100);

//toFixed
// var num1 = 99.4634;
// console.log(num1.toFixed(0));
// console.log(num1.toFixed(2));
// console.log(num1.toFixed(7));

// const cars = ["Saab", "Volvo", "BMW"]; //create
// cars[0] = "Opel";

//arrray.push()
// var fruits = ["mango", "orange", "apple"];
// fruits.push("Lemon");
// console.log(fruits);
//
// var profile = { firstName: "shw", lastName: "zin", age: 45 };
// console.log(profile.firstName);

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// console.log(person["firstName"], person["lastName"], person["age"]);
//

// const person1 = [];
// person1[0] = "John";
// person1[1] = "Doe";
// person1[2] = 46;
// console.log(person1, person1.length, person1[0]);

//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.toString());
//
//   v
//delete array from last နောက္ကနေ ဖ်က္
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();
// console.log(fruit);
// console.log(fruits);

//delete array from first ရေွ့ကနေ ဖ်က္
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();
// console.log(fruit);
// console.log(fruits);

//add new array from first ရေွ့ကနေ ထည့္
// const fruits = ["Orange", "Apple", "Mango"];
// let fruit = fruits.unshift('Banana');
// console.log(fruit);
// console.log(fruits);

//
//array ထဲကို position တိက် ယူျပီး ထည့္
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// var firstName = "Shwe Zin"; //string
// var lastName = "Thant"; //string
// var isMarriaged = false; //boolean type

// var profile = { firstName: "Shwe Zine", lastName: "thant", isMarriaged: true };

// || &&
// var age = 45;
// var gender = "female";
// if (age > 20 || gender === "male") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// var age = 45;
// var gender = "female";
// if (age > 20 || gender === "male") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// var age = 50;
// if (age > 20) {
//   console.log("You are old");
// } else {
//   console.log("You are still young");
// }
// age > 20 ? console.log("you are old") : console.log("you are still young");
//

// var day = 4;
// if (day == 1) {
//   console.log("Sun Day");
// } else if (day == 2) {
//   console.log("Monday");
// } else if (day == 3) {
//   console.log("Tueday");
// } else if (day == 4) {
//   console.log("wednesday");
// } else if (day == 5) {
//   console.log("Thursday");
// } else if (day == 6) {
//   console.log("Fri day");
// } else if (day == 7) {
//   console.log("Saturaday");
// }

// var day = 1;

// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tueday");
//     break;
//   case 4:
//     console.log("Wedday");
//     break;
//   case 5:
//     console.log("Thrday");
//     break;
//   case 6:
//     console.log("Firday");
//     break;

//   default:
//     console.log("Saturaday");
//     break;
// }
//
//for loop
// for (let i = 2; i <= 5; i++) {
//   console.log(i);
// }

// const person = { fname: "John", lname: "Doe", age: 25 };

// let txt = "";
// for (let x in person) {
//   console.log(x);
//   txt += person[x] + " ";
// }

// const numbers = [45, 4, 9, 16, 25];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// numbers.forEach((num) => {
//   console.log(num);
// });

// try {
//   alert("Welcome guest");
// } catch (error) {
//   console.log(error);
// }
// function myFunction() {
//   console.log(this);
// }
// myFunction();

// function myFunction(name) {
//   console.log("this is my function");
// }
// myFunction = () => console.log("this is my arrow function");

// myFunction = () => console.log("this is my function");

// {
//   user: [{}, {}, {}];
// }
// let firstName = null;
// console.log(firstName);
