window.AudioContext = window.webkitAudioContext||window.AudioContext;
const audioctx = new AudioContext();

const osc = audioctx.createOscillator();
osc.connect(audioctx.destination);

document.getElementById('play').onclick = function() {
  osc.start();
}
document.getElementById('stop').onclick = function() {
  osc.stop();
}
