const bodyTag = document.getElementsByTagName("body")[0]
console.log (bodyTag)

const parentListDiv = document.createElement("div")
parentListDiv.classList.add("parentListDiv")

bodyTag.append(parentListDiv)

const inputFieldClass = document.getElementsByClassName("inputText")[0]
console.log(inputFieldClass)

let countList = 1
const bookList = (event) => {
    const getDataInputField = event.target.value

    const spanTag = document.createElement("span")
    spanTag.classList.add("spanTag", "textOverflow")
    spanTag.id = countList
    const countSpanList = "Book"+ "("+countList.toString() +")"+":"+ getDataInputField
    spanTag.append(countSpanList)

    //line through
    spanTag.addEventListener('click', () => {
        let hasLineThrough = spanTag.classList.contains("lineThrough")
        if (hasLineThrough) {
            spanTag.classList.remove("lineThrough")
        }else {
            spanTag.classList.add("lineThrough")
        }

    })

    //add trash
    //<i class="fa-duotone fa-circle-minus"></i>
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card", "text-center")

    const btnDelete = document.createElement("button")
    btnDelete.classList.add("btn", "btn-danger")
    btnDelete.append("Delete")
    console.log(btnDelete)

    const spanContainer = document.createElement("div")
    spanContainer.classList.add("spanContainer", "card-title")
    spanContainer.append(spanTag)

    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("buttonContainer")
    buttonContainer.append(btnDelete)

    parentListDiv.append(cardDiv)
    cardDiv.append(spanContainer, buttonContainer)

 
    //delete process
    btnDelete.addEventListener('click', () => {
        cardDiv.remove()
    })    

    inputFieldClass.value = null
    countList +=1
}

inputFieldClass.addEventListener('change', bookList)