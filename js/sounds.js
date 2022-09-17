

export default function Sound({
  volumeSongsRain,
  volumeSongsWoods,
  volumeSongsFire,
  volumeSongsHome,
  volumeRangeRain,
  volumeRangeWoods,
  volumeRangeFire,
  volumeRangeHome,

}) {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const audioRain = new Audio("./assets/chuva.wav")
  const audioWoods = new Audio("./assets/Floresta.wav")
  const audioFire = new Audio("./assets/Lareira.wav")
  const audioHome = new Audio("./assets/Cafeteria.wav")

  function soundsVolume() {

    volumeRangeRain.addEventListener('input', function (e) {
      audioRain.volume = volumeRangeRain.value / 100;

    })

    volumeRangeFire.addEventListener('input', function (e) {
      audioFire.volume = volumeRangeFire.value / 100;

    })
    volumeRangeWoods.addEventListener('input', function (e) {
      audioWoods.volume = volumeRangeWoods.value / 100;

    })
    volumeRangeHome.addEventListener('input', function (e) {
      audioHome.volume = volumeRangeHome.value / 100;

    })
  }

  function soundKitchen() {
    kitchenTimer.play()
  }

  function buttonPress() {
    buttonPressAudio.play()
  }

  function soundRain() {
    audioRain.play()
    audioWoods.pause()
    audioFire.pause()
    audioHome.pause()

    audioRain.loop = true
  }

  function soundWoods() {
    audioWoods.play()
    audioRain.pause()
    audioFire.pause()
    audioHome.pause()

    audioWoods.loop = true
  }

  function soundHome() {
    audioHome.play()
    audioWoods.pause()
    audioFire.pause()
    audioRain.pause()

    audioHome.loop = true

  }

  function soundFire() {
    audioFire.play()
    audioWoods.pause()
    audioRain.pause()
    audioHome.pause()

    audioFire.loop = true

  }

  function StopAllSounds() {
    audioFire.pause()
    audioWoods.pause()
    audioRain.pause()
    audioHome.pause()
  }

  return {
    soundRain,
    soundFire,
    soundHome,
    soundWoods,
    soundKitchen,
    buttonPress,
    StopAllSounds,
    soundsVolume,


  }

}