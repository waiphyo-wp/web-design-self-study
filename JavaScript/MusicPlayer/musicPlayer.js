// get element data
const songContainerTag = document.getElementsByClassName("songContainer")[0]
const audioTag = document.getElementsByClassName("ad")[0]
const currentAndTotalTag = document.getElementsByClassName("currentAndTotal")[0]
const increaseCurrentProgressTag = document.getElementById("increaseCurrentProgress")

const playBtnTag = document.getElementsByClassName("playBtn")[0]
const pauseBtnTag = document.getElementsByClassName("pauseBtn")[0]
const backwardBtnTag = document.getElementsByClassName("backwardBtn")[0]
const forwardBtnTag = document.getElementsByClassName("forwardBtn")[0]

const audioList = [
    { audioId: "music/athonetawkhan.mp3", audioName: "A Thone Taw Khan", audioSinger: "Aung La" },
    { audioId: "music/ayoutematayoutakyaung.mp3", audioName: "A Youte Ma Ta Yout AKyaung", audioSinger: "Aung La" },
    { audioId: "music/Doe2YoutYaeAKyaung.mp3", audioName: "Doe 2Yout Yae AKyaung", audioSinger: "Tha O" },
    { audioId: "music/kominanarpyanlarp.mp3", audioName: "Ko Min Anar Pyan Lar P", audioSinger: "Tha O" }
]


for (let i = 0; i < audioList.length; i++) {

    const getAudioList = audioList[i];

    const songsDiv = document.createElement("div")
    songsDiv.classList.add("songs")

    const spreadLineTag = document.createElement("div")
    spreadLineTag.classList.add("spreadLine")

    songContainerTag.append(songsDiv, spreadLineTag)

    const songTitle = (i + 1).toString() + ". " + getAudioList.audioName + " - " + getAudioList.audioSinger

    songsDiv.textContent = songTitle

    //sound click function
    const clickSong = () => {
        playingMusicIndex = i
        songPlay()
    }
    songsDiv.addEventListener("click", clickSong)
}

//get duration event of audio tag
let audioTotalTime = 0
let audioTotalTimeText = "00:00"
audioTag.addEventListener("loadeddata", () => {
    audioTotalTime = Math.ceil(audioTag.duration)
    audioTotalTimeText = createMinAndsec(audioTotalTime)
})

audioTag.addEventListener("timeupdate", () => {
    let audioCurrentTime = Math.ceil(audioTag.currentTime)
    audioCurrentTimeText = createMinAndsec(audioCurrentTime)
    currentAndTotalTag.textContent = audioCurrentTimeText + " / " + audioTotalTimeText
    increaseProgressBar(audioCurrentTime) // call callback function
})

const createMinAndsec = (totalSec) => {
    const minutes = Math.floor(totalSec / 60)
    const seconds = totalSec % 60
    const mins = minutes < 10 ? "0" + minutes.toString() : minutes
    const secs = seconds < 10 ? "0" + seconds.toString() : seconds
    return mins + ":" + secs
}

//progress bar
const increaseProgressBar = (audioCurrentTime) => {
    let increaseProgressTime = (500 / audioTotalTime) * audioCurrentTime
    increaseCurrentProgressTag.style.width = increaseProgressTime.toString() + "px"

}

//play puse button
//play button
let isPlaying = false
let playingMusicIndex = 0
playBtnTag.addEventListener("click", () => {
    const currentPlayTime = Math.floor(audioTag.currentTime)
    if (currentPlayTime === 0) {
        songPlay()
    } else {
        audioTag.play()
        isPlaying = true
        updatePlayAndPauseBtn()
    }
})

//pause button
pauseBtnTag.addEventListener("click", () => {
    isPlaying = false
    audioTag.pause()
    updatePlayAndPauseBtn()
})

//backward button
backwardBtnTag.addEventListener("click", () => {
    if (playingMusicIndex === 0) {
        return
    }
    playingMusicIndex -= 1
    songPlay()
})

//forward button
forwardBtnTag.addEventListener("click", () => {
    if (playingMusicIndex === audioList.length - 1) {
        audioTag.ended()
    }
    playingMusicIndex += 1
    songPlay()
})

const songPlay = () => {
    const playingMusic = audioList[playingMusicIndex].audioId
    audioTag.src = playingMusic
    audioTag.play()
    isPlaying = true
    updatePlayAndPauseBtn()
}

const updatePlayAndPauseBtn = () => {
    if (isPlaying) {
        playBtnTag.style.display = "none"
        pauseBtnTag.style.display = "inline"
    } else {
        playBtnTag.style.display = "inline"
        pauseBtnTag.style.display = "none"
    }
}