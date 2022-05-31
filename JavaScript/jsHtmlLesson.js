/*
//DOM (CRUD) Example
//create
const h1Element = document.createElement("h1")
const textNode = document.createTextNode("Testing Starting 12345...")
h1Element.appendChild(textNode)
const bodyElement = document.getElementsByTagName("body")
const bodyElementText = bodyElement[0]
console.log(bodyElementText)
bodyElementText.appendChild(h1Element)

//read
const readH1Element = document.getElementsByTagName("h1")[0]
console.log("before" ,readH1Element.textContent)

//update
readH1Element.textContent = "Hello 1212"
console.log("after", readH1Element.textContent)

//delete
readH1Element.remove()


//create html div tag by DOM
 <div class = "parent"> 
    <div class = "childOne">First Child</div>
    <div class = "secondChild">Second Child</div>
</div>

const parentDiv = document.createElement("div")
parentDiv.classList.add("parent")

const childOneDiv = document.createElement("div")
childOneDiv.classList.add("childOne")
childOneDiv.append("First Child")

const childTwoDiv = document.createElement("div")
childTwoDiv.classList.add("childTwo")
childTwoDiv.append("Second Child")

parentDiv.append(childOneDiv,childTwoDiv)
const bodyDiv = document.getElementsByTagName("body")[0]
bodyDiv.appendChild(parentDiv)

//get external css properties
const styleDiv = document.getElementsByClassName("divStyle")[0]
// console.log("Div Width :" , getComputedStyle(styleDiv).width) // getComputedStyle -> get external css properties window object
// console.log("Div Height :" , getComputedStyle(styleDiv).height)
// console.log("Div Background Color :" , getComputedStyle(styleDiv).backgroundColor)

console.log("Div Background Color :" , styleDiv.style.backgroundColor) // style -> for incline css



//Events
//onClick

const clicked = document.getElementById("click1")

const clickFunction = () => {
    clicked.style.backgroundColor = "red"
}

//clicked.onclick = clickFunction; // can call only one function

clicked.addEventListener("click",clickFunction) // can call multiple function 

// image in array
// counter
// get image using counter

*/

const clicked = document.getElementById("click1")
const img = document.getElementsByClassName("image")[0]
const orignalImg = img.src
const imgArray = [
    "https://images.unsplash.com/photo-1645317008756-01acb5734f2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1641291333327-4e94c76f9445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1645265136873-5d0abe4bc6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1645281365705-bd398ed6adc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1643188911907-ce3bbb540a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1645281506090-4649f0259ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1645207803533-e2cfe1382f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
]

let counter = 0;
const imageChange = () => { //2
    if (counter === imgArray.length) {
        img.src = orignalImg
        counter = 0
        return
    }
    img.src = imgArray[counter]
    console.log("Counter : " , imgArray[counter])
    counter += 1
    
}

clicked.addEventListener("click", imageChange) // 1

