import Sound from "./sounds.js";
import Mode from "./darkmod.js";
import Timer from "./timer.js";
import Controls from "./controls.js";

const buttonPlay = document.querySelector('.button-play')
const buttonPause = document.querySelector('.button-pause')
const buttonStop = document.querySelector('.button-stop')
const buttonPlusTime = document.querySelector('.plus-time')
const buttonLessTime = document.querySelector('.less-time')
const buttonSoundRain = document.querySelector('.sounds-rain')
const buttonSoundWoods = document.querySelector('.sounds-woods')
const buttonSoundFire = document.querySelector('.sounds-fire')
const buttonSoundHome = document.querySelector('.sounds-home')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = document.querySelector('.minutes')
let timerTimerOut


const lightMode = document.querySelector(".mode-light")
const darkMode = document.querySelector(".mode-dark")
const bgDark = document.querySelector("body")
const alert = document.querySelector('.alert')


const volumeSongsRain = document.querySelector('.sliderrain')
const volumeSongsWoods = document.querySelector('.sliderwoods')
const volumeSongsFire = document.querySelector('.sliderfire')
const volumeSongsHome = document.querySelector('.sliderhome')
const volumeRangeRain = volumeSongsRain.querySelector('input')
const volumeRangeWoods = volumeSongsWoods.querySelector('input')
const volumeRangeFire = volumeSongsFire.querySelector('input')
const volumeRangeHome = volumeSongsHome.querySelector('input')

const mode = Mode({
  lightMode,
darkMode,
bgDark,
buttonPlay,
buttonPause,
buttonStop,
buttonPlusTime,
buttonLessTime,
buttonSoundRain,
buttonSoundWoods,
buttonSoundFire,
buttonSoundHome,
alert,
})
const sound = Sound({
  volumeSongsRain,
  volumeSongsWoods,
  volumeSongsFire,
  volumeSongsHome,
  volumeRangeRain,
  volumeRangeWoods,
  volumeRangeFire,
  volumeRangeHome,
})

const controls = Controls({
  buttonPlay,
  buttonPause,
  minutes,
  minutesDisplay,
  buttonSoundFire,
  buttonSoundHome,
  buttonSoundRain,
  buttonSoundWoods
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimerOut,
  sound,
  buttonPlay,
  buttonPause,
})
sound.soundsVolume()
mode.modedark()
mode.modeLight()


buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.buttonPress()

})
buttonPause.addEventListener('click', function () {
  controls.pause()
  clearTimeout(timerTimerOut)
  sound.buttonPress()
})

buttonStop.addEventListener('click', function () {
  controls.stop()
  timer.resetTimer()
  sound.buttonPress()

})

buttonPlusTime.addEventListener('click', function () {
  controls.moretime()
  sound.buttonPress()

})
buttonLessTime.addEventListener('click', function () {
  controls.lesstime()
  sound.buttonPress()
})

buttonSoundRain.addEventListener('click', function () {
  controls.rain()
  sound.soundRain()
})


buttonSoundWoods.addEventListener('click', function () {
  sound.soundWoods()
  controls.woods()
})

buttonSoundFire.addEventListener('click', function () {
  sound.soundFire()
  controls.fire()
})

buttonSoundHome.addEventListener('click', function () {
  sound.soundHome()
  controls.home()
})

buttonSoundRain.addEventListener('dblclick', function () {
  controls.turnOfSoundRain()
  sound.StopAllSounds()
})

buttonSoundWoods.addEventListener('dblclick', function () {
  controls.turnOfSoundWoods()
  sound.StopAllSounds()
})

buttonSoundFire.addEventListener('dblclick', function () {
  controls.turnOfSoundFire()
  sound.StopAllSounds()
})

buttonSoundHome.addEventListener('dblclick', function () {
  controls.turnOfSoundHome()
  sound.StopAllSounds()
})

document.onclick = function () {
  mode.alertSet.close()
}
