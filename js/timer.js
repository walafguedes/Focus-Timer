
export default function Timer ({
  minutesDisplay,
  secondsDisplay,
  timerTimerOut,
  sound,
  buttonPlay,
  buttonPause,
  
}){

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

 function resetTimer() {
  updateTimerDisplay(15, 0)
  clearTimeout(timerTimerOut)
  sound.StopAllSounds()
}

function countdown() {
  timerTimerOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateTimerDisplay(minutes, 0)

    if (isFinished) {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
      resetTimer()
      sound.soundKitchen()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes

    }
    updateTimerDisplay(minutes, String(seconds - 1))
    countdown()
  }, 1000)
}

return{
  countdown,
  updateTimerDisplay,
  resetTimer,
}
}