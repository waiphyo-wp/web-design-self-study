const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer")

const overlayContainerTag = document.querySelector(".overlayContainer")

const liTag = document.getElementsByTagName("li")

const line1Tag = document.querySelector(".line1")
const line2Tag = document.querySelector(".line2")
const line3Tag = document.querySelector(".line3")

hamburgerMenuContainerTag.addEventListener("click", () => {
    if (hamburgerMenuContainerTag.classList.contains("isOpened") ){
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.remove("liTagUp")
        }
        line2Tag.classList.remove("hideLine2")
        line1Tag.classList.remove("rotatePlus45Deg")
        line3Tag.classList.remove("rotateMinus45Deg")
        hamburgerMenuContainerTag.classList.remove("isOpened")
        overlayContainerTag.classList.remove("showOverlayContainer")
    } else {
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.add("liTagUp")
        }
        line2Tag.classList.add("hideLine2")
        line1Tag.classList.add("rotatePlus45Deg")
        line3Tag.classList.add("rotateMinus45Deg")
        hamburgerMenuContainerTag.classList.add("isOpened")
        overlayContainerTag.classList.add("showOverlayContainer")
    }

})

