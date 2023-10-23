const hoursEl = document.getElementById("hours-el")
const minutesEl = document.getElementById("minutes-el")
const secondsEl = document.getElementById("seconds-el")
const calculateBtn = document.getElementById("calculate-btn")
const totalTimeEl = document.getElementById("total-time-el")

let totalSeconds = 0
let hours = 0
let minutes = 0
let seconds = 0

calculateBtn.addEventListener("click", () => {
    saveCurrentTime()
    calculateTotalTime()
    renderResults()
})

function saveCurrentTime() {
    // convert hours and minutes to seconds
    const hoursInSeconds = hoursEl.value * 3600
    const minutesInSeconds = minutesEl.value * 60
    
    const currentTimeInSeconds = hoursInSeconds + minutesInSeconds + Number(secondsEl.value)
    totalSeconds += currentTimeInSeconds
}

function calculateTotalTime() {
    minutes = Math.floor(totalSeconds / 60)
    if (minutes > 59) {
        hours = Math.floor(minutes / 60)
        minutes = minutes - hours * 60
    }
    seconds = totalSeconds - hours * 3600 - minutes * 60
}

function renderResults() {
    // check if it is needed to add 0
    let min = minutes < 10 ? `0${minutes}` : minutes
    let sec = seconds < 10 ? `0${seconds}` : seconds
    // render the result
    totalTimeEl.textContent = `${hours}h ${min}min ${sec}sec`
    // reset the input fields
    hoursEl.value = ""
    minutesEl.value = ""
    secondsEl.value = ""
}

