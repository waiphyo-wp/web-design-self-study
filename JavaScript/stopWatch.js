//call button class
const startBtnTag = document.getElementsByClassName("startBtn")[0]
const stopBtnTag = document.getElementsByClassName("stopBtn")[0]
const continueBtnTag = document.getElementsByClassName("continueBtn")[0]
const restartBtnTag = document.getElementsByClassName("restartBtn")[0]
const finishBtnTag = document.getElementsByClassName("finishBtn")[0]
const stopWatchMinliSecTag = document.getElementsByClassName("stopWatchMinliSec")[0]


let ms = 0, sec = 59, min = 58, hr =0

const startTime = () => {
    ms += 1
    if (ms === 1000) {
        ms = 0
        sec += 1
    }
    if(sec === 60){
        sec = 0
        min += 1

    }
    if(min === 60) {
        min = 0
        hr += 1

    }

    let hours = hr < 10 ? "0" + hr.toString() : hr.toString()
    let minutes = min < 10 ? "0" + min.toString() : min.toString()
    let seconds = sec < 10 ? "0" + sec.toString() : sec.toString()
    let miliSeconds = ms < 10 ? "000" + ms.toString(): ms < 100? "00" + ms.toString() : "0" + ms.toString()

    const stopWatchTag = document.getElementsByClassName("stopWatchNum")[0]
    stopWatchTag.textContent = hours + ":" + minutes + ":" + seconds
    stopWatchMinliSecTag.textContent = miliSeconds
}

let intervalId;
const startWatch = () => {

    intervalId = setInterval(startTime, 1)
}

const stopWatch = () => {
    clearInterval(intervalId)
}

const continueWatch = () => {
    clearInterval(intervalId)
    intervalId = setInterval(startTime, 10000)
}

const restartWatch = () => {
    clearInterval(intervalId)
    sec = 0, min = 0, hr =0 , ms = 0
    intervalId = setInterval(startTime, 10000)
}

const finishWatch = () => {
    sec = 0 
    min = 0 
    hr =0
    ms = 0
    let hours = hr < 10 ? "0" + hr.toString() : hr.toString()
    let minutes = min < 10 ? "0" + min.toString() : min.toString()
    let seconds = sec < 10 ? "0" + sec.toString() : sec.toString()
    let miliSeconds = ms < 10 ? "000" + ms.toString(): ms < 100? "00" + ms.toString() : "0" + ms.toString()

    const stopWatchTag = document.getElementsByClassName("stopWatchNum")[0]
    stopWatchTag.textContent = hours + ":" + minutes + ":" + seconds
    stopWatchMinliSecTag.textContent = miliSeconds
    clearInterval(intervalId)
}

startBtnTag.addEventListener('click', startWatch)
stopBtnTag.addEventListener('click', stopWatch)
continueBtnTag.addEventListener('click', continueWatch)
restartBtnTag.addEventListener('click', restartWatch)
finishBtnTag.addEventListener('click', finishWatch)