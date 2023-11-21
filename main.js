let robot; //declaring a variable for later use
//";" are known as syntactical sugar makes it's more readable

console.log("Your Mom") // to comment out.  console.log == print(python)

/** multi-line commit
 * 
 * 
 * 
 * --variable declaration 
 * 
 * 
 * types:
 * string, integers, booleans, float
 * 
 * 
 * array, objects=(dictionary in python)
 * Functions:
 * named func, arrow func (almost similar to lambda), 
 * 
 */

// Variable Declaration

// var can be redeclared and reassigned. 
var name = "Miguel"; //declaring a variable with var
//declaring will happen with declarartoin keyword, "var, let, const"
console.log(name)

name = "Avila"; //reassigning 
console.log(name)

var name = "Michael"; //redeclare with var
console.log(name)

// let
// lets us reassign but cannot redeclare

let maximal = "Rat Trap";
console.log(maximal)

// reassigning Rat Trap
maximal = "Tiger Hawk";
console.log(maximal)

//asigning a previously declared variable
robot = "Mega Man"
console.log(robot)

// let will not allow you to redeclare with let
// let maximal = "Dinobot"
// console.log(maximal) 
//WILL GET AN ERROR HERE.

// const think "constant"
// the most strict, cannot redeclare or reassign
const nbaGoat = 'Michael Jordan'
console.log(nbaGoat)

// cannot reassign a constant variable

// nbaGoat = "Lebron James"
// console.log(nbaGoat)

//cannot redeclare  block-scoped variable
// const nbaGoat = "Kobe Bryant"
// console.log(nbaGoat)


//declaring types: Integer
let somenumber = 8
console.log(somenumber)
console.log(typeof(somenumber))

//declaring type: float
let someFloat = 3.14
console.log(someFloat)
console.log(typeof(someFloat))

//array or a list in Python
let someArray = [5,6,7,8]
console.log(someArray)
console.log(someArray.length)

//object --dictionary in Python
//keys don't need to be in quotes but they should be
let someObject = {
    test: "Please test me",
    "test2": "still need testing"
}
console.log(someObject)

//operators like adding, subtracting, multiplying, dividing. 
//addition
let sum = 5 + 5
console.log(sum)
//short hand
sum += 5
console.log(sum)
//increment by one
sum ++
console.log(sum)

//subtraction
let difference = 10 - 5
console.log(difference)
//shorthand 
difference -= 3
console.log(difference)
//decrement by 1
difference -- 
console.log(difference)

// multiplicaton
let product = 5 * 5
console.log(product)
//short hand
product *= 5
console.log(product)

//division
let dividend = product / 5
console.log(dividend)
//shorthand
dividend /= 5
console.log(dividend)

//exponents
let exponent = 7 ** 2
console.log(exponent)

let exponent2 = 7
exponent2 **=2
console.log(exponent2)

//module
let mod= 5 % 2
console.log(mod)

let num = 6
if (num % 2 == 0){
    console.log('even')
}

// some other math stuff
let findFloor = Math.floor(26.7)
console.log(findFloor)

let findCeil = Math.ceil(16.3)
console.log(findCeil)

/**
 * 
 * 
 * ---------JavaScript functions
 * 
 */
//Regular, named function

function addNums(){
    let num = 4;
    let num2 = 5;
    console.log("This is a regular named function")
    return num + num2
};
console.log(addNums())

//named function with parameters
function subNum(x,y){
    return x-y

};
console.log(subNum(17,10))

// naming a function with a variable

const addNums2 = function(num1, num2){
    console.log("This is a function with a variable name and parameters")
    return num1 + num2
};
console.log(addNums2(10,8))

//Arrow Functions
// are like anonymous functions
//ES6+ EchmaScript6
//if your function only has one parameter, you don't need ()

let cubed3 = () => {
    return 3 ** 3
};
console.log(cubed3())
// .addEventListener('click', () => {
//     //function does something when something is click
// })

let cubed = num =>{
    return num **3
};
console.log(cubed(5))

//more than one parameter with an arrow function
const addNums3 = (num1, num2) => {
    return num1 +num2
};
console.log(addNums3(6,2))

//self-invoking functions. 
//calling itself. 
//javascript closure
//console.log in the example below is not required, it just for display
console.log(function(name){
    let hello = "Your Mom, " + name;
    return hello

}('Mang0'))

// Javascript Control Flow
// If statements
// && AND in conditional if this AND that are true
// || OR in a condition if this or that is true

function determineAge(age){
    if (age < 18) {
        return 'minor'
    } else if (age >= 18 && age <= 65){
        return "Adult not retired"
    } else if (age > 65 && age < 110){
        return "Elderly Person, retired...hopefully"
    } else {
        return "Maiar"
    }
}

console.log(determineAge(32))
console.log(determineAge(24000))

// JavaScript Ternary Operator
const getAge = (age) => {
    //condition if returned thing happens
    return(age < 18) ? "Minor" : 
        (age >= 18 && age <= 65) ? "Adult not yet retired":
            (age > 65 && age <110) ? "Elderly Person":
                "Maiar or Elf"
}

console.log(getAge(2931))

//Weird JavaScript typing
someFloat = 3.14
let crazyStuff = someFloat + '4'
console.log(crazyStuff)
console.log(typeof(crazyStuff))


// change typing of javascript variables
// str(), int(), float()

// parseFloat() to change into float or number type
let newCrazyStuff = parseFloat(crazyStuff)
console.log(typeof(newCrazyStuff))

// parseInt() to change into integer or number type
let anotherNum = '5'
console.log(typeof(anotherNum))
let newNum = parseInt(anotherNum)
console.log(typeof(newNum))

// .toString() will change type to string
let myNum = 10
let newMyNum = myNum.toString()
console.log(typeof(newMyNum))

//Brother may I have some loops
//Loops in javascript

function countByOne(){
    //for(iterator; condition; incrementation)
    for (let x = 0; x < 20; x++){
        console.log(x)
    }
}
//countByOne()
//looping through an array by index
let myNames = ['Ryan', 'Alex', 'Ben', 'Connor', 'Berik', 'Liz']
//loop through an array of names by index
//arrow function with one parameter so we don't need ()
const printNames = arr => {
    for (i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
printNames(myNames)

// looping with in 
const printNames2 = arr => {
    for (let i in arr){
        console.log(arr[i])
    }

}


//lopping with of --by value
const printNames3 = arr => {
    for (const name of arr){
        console.log(name)
    }
}
printNames3(myNames)

// While Loops

const countWithWhile = () => {
    let i = 0
    let text = ''
    //while loop
    while (i < 10){
        text += `This number is....${i} `
        i++
        console.log(i)
    }
    return text
}
console.log(countWithWhile())

// do While Loop
const countWithDoWhile = () => {
    let i = 0;
    let text = ''
    do {
        i++
        text += `The number above is ${i}`
    }
    //condition to run loop
    while (i <  10)
    return text 
}
console.log(countWithDoWhile())

// array stuff; indexing and method
let groupOfNames = ['Gary', "Ash", "Misty", "Brock", "Officer Jenny"]
// deconstruct array 
let [gary, ash, misty, ...lovers] = groupOfNames

console.log(gary)
// gary = groupOfNames[0]
console.log(ash)
// ash = groupOfNames[1]
console.log(misty)
// misty = groupOfNames[2]
console.log(lovers)

//another loop we forgot about for each
const showEachName = (arr) => {
    arr.forEach (
        name => console.log(name)
    )
}

showEachName(groupOfNames)

// built in array methods
//map
// map over group of names to check for names that start with the letter B
let bNames = groupOfNames.map((name) => {
    if(name[0] == "B"){
        return name
    } else {
        return "Gotta Catch Em All"
    }
})
console.log(bNames)

const checkBNames = name =>{
    if (name[0] == "B"){
        return name
    }
    else {
        return "Gotta Catch Em All"
    }
}
groupOfNames.forEach(name => console.log(checkBNames(name)))

//reduce 
let nums = [2,4,6,8,10]
let numsReduced = nums.reduce((accumulator, currentNum) => accumulator + currentNum)
console.log(numsReduced)

//filter
longishName = groupOfNames.filter(name => name.length > 4)
console.log(longishName)

//join 
console.log(groupOfNames.join(" gotta catch em all"))

//.slice
console.log(groupOfNames.slice(0,3))

//.splice
groupOfNames.splice(4,1, "Nurse Joy", "Professor Oak")
console.log(groupOfNames)

// added an item to the end of an array .push 
//similar to .append in python
groupOfNames.push("Ritchie")
console.log(groupOfNames)

//.includes()
// membership check
let numsList = [2,4,5, 6467, 5, 2, 1]
if (numsList.includes(4)) {
    console.log("ITS HERE! )))))))")
} else{
    console.log("its not here (((((")

}
//============================================HOMEWORK=============================================================
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

// has to take in 2 parameters, a string and name of dogs so needs (dogString, dogNames) 
// going to have to loop 
// you're going to have to increment and have to set a variable to 0; 
//CALL THE FUNCTION AT THE END. NOT A CONSOLE LONG. just like your whiteboard so call dogString and dogNames

const dogNameFinder = (dogString, dogNames) => {
    let here = 0;
    // REMEMBER: for(iterator; condition; incrementation)
    for(let i = 0; i < dogNames.length; i++){
        if (dogString.includes(dogNames[i])) {
            console.log("Matched " + dogNames[i]);
            here = 1;
        }
    }
    if (here == 0) {
        console.log("Not here");
    }
};

dogNameFinder(dogString, dogNames)

// 

//keep getting Sally back but Sally is a cat not a dog. 


/* Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move. 
*/

//using .splice
// only takes 1 parameter
//EVERY EVEN so there's going to have to be a something with 2 
// going to need to loop in this array 

arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

function removeEven(arr) {
    for(i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "obliterated");
    }
}

removeEven(arr)
console.log(arr)

// Codewars problems
/** In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*
* Examples
* makeNegative(1);    // return -1
* makeNegative(-5);   // return -5
* makeNegative(0);    // return 0
* makeNegative(0.12); // return -0.12
 * 
 * 
 */
function makeNegative(num) {
    if (num > 0){
      return -num;
    } else {
      return num;
    }
}

/** Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*
* Examples (input -> output)
* 6, "I"     -> "IIIIII"
* 5, "Hello" -> "HelloHelloHelloHelloHello"
 * 
 */

function repeatStr (n, s) {
    return s.repeat(n);
  }



