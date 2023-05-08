// expose.js

window.document.addEventListener('DOMContentLoaded', init);
//const requiredModule = require("./assets/scripts/expose.js");
//init();

function init() {
  let hornType;
  let images = document.querySelectorAll('img');
  let hornSound = document.querySelector('audio');
  let img1 = Array.from(images).find(img => img.src.endsWith('assets/images/no-image.png'));
  document.querySelector('#horn-select').addEventListener('change', (event) => {
    //console.log('Selected horn type:', event.target.value);
    hornType = event.target.value;
      if(hornType == "air-horn"){
        img1.src = "assets/images/air-horn.svg";
        hornSound.src = "assets/audio/air-horn.mp3";
      }
      else if(hornType == 'car-horn'){
        img1.src = 'assets/images/car-horn.svg';
        hornSound.src = "assets/audio/car-horn.mp3";
      }
      else if (hornType == 'party-horn'){
        img1.src = 'assets/images/party-horn.svg';
        hornSound.src = "assets/audio/party-horn.mp3";
      }
    });

    let vol;
    let img2 = Array.from(images).find(img => img.src.endsWith('assets/icons/volume-level-2.svg'));
    document.querySelector('#volume').addEventListener('change', (event) => {
      //console.log('volume at', event.target.value);
      vol = event.target.value
      hornSound.volume = vol * 0.01;
      if(vol == 0){
        img2.src = "assets/icons/volume-level-0.svg";
      }
      else if(vol > 0 && vol < 33){
        img2.src = "assets/icons/volume-level-1.svg";
      }
      else if(vol > 32 && vol < 67){
        img2.src = "assets/icons/volume-level-2.svg";
      }
      else if(vol > 66){
        img2.src = "assets/icons/volume-level-3.svg";
      }
    });

    document.querySelector('button').addEventListener('click', (event) => {
      //console.log('clicked');
      hornSound.play();
      if(hornType == 'party-horn'){
        //const canvas = document.getElementById('your_custom_canvas_id')
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
       });
      }
    });
}