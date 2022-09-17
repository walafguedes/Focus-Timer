export default function Controls ({
  buttonPlay,
  buttonPause,
  minutes,
  minutesDisplay,
  buttonSoundFire,
  buttonSoundHome,
  buttonSoundRain,
  buttonSoundWoods
}){

  function play (){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }
  function pause (){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }
  function stop (){
    buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  }
  function moretime (){
    minutes = Number(minutesDisplay.textContent) + 1
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }
  
  function lesstime (){
    minutes = Number(minutesDisplay.textContent) - 1
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }
  function rain (){
    buttonSoundRain.classList.add('pressed')
  buttonSoundFire.classList.remove('pressed')
  buttonSoundWoods.classList.remove('pressed')
  buttonSoundHome.classList.remove('pressed')
  }
  function woods (){
    buttonSoundWoods.classList.add('pressed')
  buttonSoundFire.classList.remove('pressed')
  buttonSoundRain.classList.remove('pressed')
  buttonSoundHome.classList.remove('pressed')
  }
  function home (){
    buttonSoundHome.classList.add('pressed')
    buttonSoundFire.classList.remove('pressed')
    buttonSoundRain.classList.remove('pressed')
    buttonSoundWoods.classList.remove('pressed')
  }
  function fire (){
    buttonSoundFire.classList.add('pressed')
    buttonSoundWoods.classList.remove('pressed')
    buttonSoundRain.classList.remove('pressed')
    buttonSoundHome.classList.remove('pressed')
  }

  function turnOfSoundRain ( ){
    buttonSoundHome.classList.remove('pressed')
    buttonSoundFire.classList.remove('pressed')
    buttonSoundRain.classList.remove('pressed')
    buttonSoundWoods.classList.remove('pressed')
  }
  function turnOfSoundWoods ( ){
    buttonSoundHome.classList.remove('pressed')
    buttonSoundFire.classList.remove('pressed')
    buttonSoundRain.classList.remove('pressed')
    buttonSoundWoods.classList.remove('pressed')
  }
  function turnOfSoundFire ( ){
    buttonSoundHome.classList.remove('pressed')
    buttonSoundFire.classList.remove('pressed')
    buttonSoundRain.classList.remove('pressed')
    buttonSoundWoods.classList.remove('pressed')
  }
  function turnOfSoundHome ( ){
    buttonSoundHome.classList.remove('pressed')
    buttonSoundFire.classList.remove('pressed')
    buttonSoundRain.classList.remove('pressed')
    buttonSoundWoods.classList.remove('pressed')
  }


  return{
    play,
    pause,
    stop,
    moretime,
    lesstime,
    rain,
    woods,
    fire,
    home,
    turnOfSoundRain,
    turnOfSoundWoods,
    turnOfSoundHome,
    turnOfSoundFire,

  }
}