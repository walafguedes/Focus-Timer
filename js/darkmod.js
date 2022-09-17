export default function Sound({
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

}) {
  const alertSet = {
    Element: document.querySelector(".alert"),
    open() {
      alertSet.Element.classList.remove('hide')
    },
    close() {
      alertSet.Element.classList.add("hide")
    }
  }


  lightMode.addEventListener('click', function () {
    modedark()
  })
  darkMode.addEventListener('click', function () {
    modeLight()
  })

  function modeLight() {
    lightMode.addEventListener('click', function () {
      lightMode.classList.add('hide')
      darkMode.classList.remove('hide')
      bgDark.classList.add('dark')
      buttonSoundRain.classList.add('dark')
      buttonSoundWoods.classList.add('dark')
      buttonSoundFire.classList.add('dark')
      buttonSoundHome.classList.add('dark')
      buttonLessTime.classList.add('dark')
      buttonPlusTime.classList.add('dark')
      buttonPause.classList.add('dark')
      buttonPlay.classList.add('dark')
      buttonStop.classList.add('dark')
      alert.classList.add('dark')
    })


  }
  function modedark() {
    darkMode.addEventListener('click', function () {
      lightMode.classList.remove('hide')
      darkMode.classList.add('hide')
      bgDark.classList.remove('dark')
      buttonSoundRain.classList.remove('dark')
      buttonSoundWoods.classList.remove('dark')
      buttonSoundFire.classList.remove('dark')
      buttonSoundHome.classList.remove('dark')
      buttonLessTime.classList.remove('dark')
      buttonPlusTime.classList.remove('dark')
      buttonPause.classList.remove('dark')
      buttonPlay.classList.remove('dark')
      buttonStop.classList.remove('dark')
      alert.classList.remove('dark')

    })
  }

  return {
    modeLight,
    modedark,
    alertSet


  }
}
