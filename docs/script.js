import { startRecording } from './recorder.js';
import { playRecording } from './player.js';

const editor = document.getElementById("editor");
const playBtn = document.getElementById("play");
const saveBtn = document.getElementById("save");
const loadInput = document.getElementById("load");

let events = [];

startRecording(editor, events);

// ▶️ Odtwarzanie
playBtn.addEventListener("click", () => {
  playRecording(editor, events);
});

// 💾 Zapis do JSON
saveBtn.addEventListener("click", () => {
  const json = JSON.stringify(events, null, 2);

  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "recording.json";
  a.click();

  URL.revokeObjectURL(url);
});

// 📂 Wczytanie JSON
loadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      events = JSON.parse(event.target.result);
      alert("Wczytano nagranie!");
    } catch (err) {
      alert("Błąd pliku JSON");
    }
  };

  reader.readAsText(file);
});
