const divContainerTag = document.querySelector(".divContainer")

const buttonTag = document.querySelector(".button")

buttonTag.addEventListener("click", () => {
    divContainerTag.classList.add("startTransform")
})