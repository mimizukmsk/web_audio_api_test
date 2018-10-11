window.AudioContext = window.webkitAudioContext||window.AudioContext;
const audioctx = new AudioContext();

let play = 0;
const osc = audioctx.createOscillator();
const gain = audioctx.createGain();
osc.connect(gain);
gain.connect(audioctx.destination);

function Setup() {
  if(play == 0) {
    osc.start();
    play = 1;
  }
  let type = document.getElementById("type").value;
  let freq = parseFloat(document.getElementById("freq").value);
  let level = parseFloat(document.getElementById("level").value);

  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = level;
}

const setup = document.getElementsByClassName("setup");
for (let i = 0; i < 3; i++) {
  setup[i].onchange = function() {
    Setup();
  }
}
setup[3].onclick = function() {
  Setup();
}
document.getElementById("stop").onclick = function() {
  osc.stop();
}