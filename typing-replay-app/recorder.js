export function startRecording(editor, events) {
  let startTime = null;

  editor.addEventListener("keydown", (e) => {
    if (!startTime) startTime = Date.now();

    const time = Date.now() - startTime;

    if (e.key.length === 1) {
      events.push({ type: "insert", char: e.key, time });
    } else if (e.key === "Backspace") {
      events.push({ type: "delete", time });
    }
  });
}