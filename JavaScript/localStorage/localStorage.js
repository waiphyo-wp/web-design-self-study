const textareaTag = document.querySelector("textarea")

console.log(textareaTag.value)

const commentTextContainerTag = document.querySelector(".commentTextContainer")

const btnTagCont = document.querySelector(".btnTag")

 const getTextAreaValueFun = (event) => {
    
    console.log(textareaTag.event.target.value)
}

// btnTagCont.addEventListener('click', (event) => {
//     commentTextContainerTag.classList.add("showCommentTextContainerTag")
//     console.log(textareaTag.event.target.value())
// })