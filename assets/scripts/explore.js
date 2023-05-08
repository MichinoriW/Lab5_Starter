// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];
  const inputForm = document.querySelector("#text-to-speech");
  const voiceSelect = document.querySelector("select");
  window.speechSynthesis.onvoiceschanged;
  voices = synth.getVoices();
  console.log(voices.length);//why length 0???
  for(let i = 0; i < voices.length; i++){
    let option = document.createElement('option');
    console.log(option);
    option.textContent = voices[i];
    document.querySelector('#voice-select').appendChild(option);
  }
}