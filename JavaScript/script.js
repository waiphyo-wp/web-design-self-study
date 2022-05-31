const car = {
    carBrand: "toyota",
    carName: "fielder",
    manufactureDate: 2020,
    drive: () => {
        alert ("left drive");
    }
}

//call object
//dot notation
car.manufactureDate //2020
car.drive() // "left drive"

//bracket notation
car["manufactureDate"] //2020
car["drive"]() //"left drive"


//send email using for loop
//retrieve object value from arrasy
const customers = [
    {name: "customer1", email: "customer1@gmail.com", dateOfBirth: "10-5-1998"},
    {name: "customer2", email: "customer2@gmail.com", dateOfBirth: "17-5-1994"},
    {name: "customer3", email: "customer3@gmail.com", dateOfBirth: "12-5-1995"},
    {name: "customer4", email: "customer4@gmail.com", dateOfBirth: "13-5-1996"},
    {name: "customer5", email: "customer5@gmail.com", dateOfBirth: "14-5-1996"},
    {name: "customer6", email: "customer6@gmail.com", dateOfBirth: "12-5-1995"},
    {name: "customer7", email: "customer7@gmail.com", dateOfBirth: "16-5-1993"},
    {name: "customer8", email: "customer8@gmail.com", dateOfBirth: "17-5-1994"},
    {name: "customer9", email: "customer9@gmail.com", dateOfBirth: "12-5-1995"}        
]

// get data using for loop

let customerEmail = customers[i].email

//for loop
for (let i = 0; i<customers.length; i++) {
    let customerEmail = customers[i].email;
    let customerName = customers[i].name;
    let customerDateOfBirth = customers[i].dateOfBirth
    if(customerDateOfBirth === "12-5-1995"){
        discountEmail(customerName,customerEmail)
    }else if(customerDateOfBirth === "17-5-1994"){
        specialDiscountEmail(customerName,customerEmail)
    }else{
        sendEmail(customerName,customerEmail)
    }
}

let sendEmail = (customerName,customerEmail) => {
    console.log(
        "sending email to_"+customerName+" : "+ customerEmail)
}

let discountEmail = (customerName,customerEmail) => {
    console.log (
        "sending discount email to_"+customerName+" : "+ customerEmail
    )
}

let specialDiscountEmail = (customerName, customerEmail) => {
    console.log (
        "sending special 50% discount email to_"+customerName+" : "+ customerEmail
    )
}

//for in loop for 
const customer = {name: "waip" , email: "michael@gmail.com", phoneNumber: 09420210874}

for (let loopFor in customer) {
    console.log(loopFor,customer[loopFor])
}

//for of loop for array
const customer = ["waip","kgkg","mgmg"]

for (const user of customer) {
    console.log(user)
}

//while loop
let startWhileLoop = true;

while (startWhileLoop) {
    let promptVal = prompt("Enter number between 1 and 1000")
    let changeInteger = parseInt(promptVal, 10)

    if(changeInteger >1 && changeInteger <1000){
        console.log("thanks your great job :: your prompt value: " + changeInteger)
        startWhileLoop = false;
    }
}

//error handling
//using try catch
const showChatBar = () => {
    for (const i=0; i<1; i++){ // this function was error function
        console.log("This is show chat bar")
    }
}

const showLeftBar = () => {
    console.log ("this is show left bar")
}

const showMainFeed = () => {
    console.log ("this is show main feed")
}

//using try catch
try {
    showChatBar()
} catch (error) {
    alert("Error Occur " , error)
}

showLeftBar()
showMainFeed()

//scope
//local scope
function myFunction() {
    var myCar = "Toyota";
    //not declaration
    num = 10; // no local scope cause not using declaration keyword , can call from global
}

myFunction() //call function

console.log(myCar); //call local var , raise error

console.log(num) // not raise error

//continue, break
//continue
const cars = [
    {carBrand: "Toyota", carModel: "2019", userEmail: "user1@gmail.com"},
    {carBrand: "RangeRover", carModel: "2019", userEmail: "user2@gmail.com"},
    {carBrand: "Toyota", carModel: "2019", userEmail: "user3@gmail.com"},
    {carBrand: "RangeRover", carModel: "2019", userEmail: "user4@gmail.com"},
    {carBrand: "Toyota", carModel: "2019", userEmail: "user5@gmail.com"}
]

//test continue and break using for loop
for (let i = 0; i<cars.length; i++ ) {
    let customCar = cars[i]
    if (customCar.carBrand === "RangeRover"){
        continue
    }
    console.log("sending email to ", customCar.userEmail)
}

for (let i = 0; i<cars.length; i++ ) {
    let customCar = cars[i]
    console.log("sending email to ", customCar.userEmail)
    if (i === 3){
        break
    }

}

//test continue and break using while loop
let i=0
while (i<cars.length){
    let customCar = cars[i]
    console.log("sending email to ", customCar.userEmail)
    i++

    if (customCar.carBrand === "RangeRover") {
        continue
    }

}

let i=0
while (i<cars.length) {
    let customCar = cars[i]
    console.log("sending email to ", customCar.userEmail)
    i++
    if (i === 3) {
        break
    }

    console.log("waip")
}

//two dimensional array
let twoDimenArray = [[1,2],[3,4],[5,6]]
for (let i = 0; i < twoDimenArray.length; i++) {
    const firstArr = twoDimenArray[i];
    for (let j = 0; j < firstArr.length; j++) {
        const secArr = firstArr[j];
        console.log(secArr) //1,2,3,4,5,6
    }
}

//destructing , spread operator , rest parameter
//destructuring
//object destructuring
const objDestruct = {name: "waip", email: "waip@gmail.com", phoneNumber: 09420210874}

const {name, email ,phoneNumber} = objDestruct

console.log (name,email, phoneNumber)

//Array destructuring
const arrDestruct = ["kg kg", "kgkg@gmail.com", 09420210874]

const [name, email , phoneNumber] = arrDestruct

console.log(name, email, phoneNumber)

//spread operator (...)
//object
const spreadOp = {name: "waiwai", email: "waiwai@gmail.com", phoneNumber: 09758334735}

const copySpreadOp = Object.assign(spreadOp)

const copySpreadOpUsed = {...spreadOp}

console.log(copySpreadOp)

const {name , email1 , phoneNumber} = copySpreadOp

console.log(email)

//array
const spreadOpArr = ["waiwai" , "wawa@gmail.com", 09758334735]

const copySpreadOpArr = [].concat(spreadOp)

const copySpreadOpArrUsed = [...spreadOpArr]

console.log(copySpreadOpArr)

console.log(copySpreadOpArrUsed)

//rest parameter
let total = 0;
const calculate = (...params) => {
    for (let i = 0; i < params.length; i++) {
     total += params[i]
    }
    return total
}

let result = calculate(1,2)

//callback function

const myFirstFun = (callback1) => {
    console.log("my first function")
    callback1()
    console.log("finish my first function")
}

const outerFun = () => {
    const mySecFun = () => {
        console.log("my second function")
        const myThirdFun = () => {
            console.log ("my third fun")
        }
        myFirstFun(myThirdFun)
    }

    myFirstFun(mySecFun)
}


outerFun()

myFirstFun(mySecFun)
mySecFun()

//Array Filter --> get array data if you want to mind by return true
const cars = [
    {carBrand: "Toyota", model: 2019, price: "$100000"},
    {carBrand: "RangeRover", model: 2020, price: "$100000"},
    {carBrand: "Toyota", model: 2030, price: "$100000"},
    {carBrand: "RangeRover", model: 2025, price: "$100000"},
]

cars.filter(carFilter) // array.filter(callback)

const carFilter = (arrElement) => {
    return arrElement.carBrand === "Toyota"
}

//array filter another way
let result = cars.filter(carIndex => carIndex.carBrand === "RangeRover")

//array map
const cars = [
    {carBrand: "Toyota", model: 2019, price: "$100000"},
    {carBrand: "RangeRover", model: 2020, price: "$100000"},
    {carBrand: "Toyota", model: 2030, price: "$100000"},
    {carBrand: "RangeRover", model: 2025, price: "$100000"},
]

cars.map(carMap)

const carMap = (arrElement) => {
    arrElement.carOwner = [] // insert new arr properties in car array every element
    return arrElement
}

//array map another way
let num = [1,2,3,4,5];
const result = num.map(arrElement => arrElement*2 )

//String
let textString = "Welcome To Myanmar"

textString.toUpperCase()
textString.toLowerCase()
textString.length()
textString.indexOf("M")

//Number
let num = "122"
num.parseInt(num,10 ) //change string to integer

let num = 122
num.toString() //change integer to string

//Object
const customer = {name: "waip", email: "michael@gmail.com"}

Object.keys(customer)
Object.values(customer)
Object.hasOwnProperty("waip")

//array splice, join, slice, shift , unshift

let cities = ["Mandalay", "Yangon", "Naypyitaw"]

cities.join("-")
let result = cities.slice(1, 3)
cities.unshift()
cities.shift()
cities.splice(1,2)

//Ternary Operator
const isMale = true

// ? --> if , : --> else
isMale ? console.log("male") : console.log("famale")

