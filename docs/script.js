import { startRecording } from './recorder.js';
import { playRecording } from './player.js';

const editor = document.getElementById("editor");
const playBtn = document.getElementById("play");

const events = [];

startRecording(editor, events);

playBtn.addEventListener("click", () => {
  playRecording(editor, events);
});