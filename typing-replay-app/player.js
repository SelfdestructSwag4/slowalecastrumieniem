export function playRecording(editor, events) {
  let output = "";

  events.forEach((event) => {
    setTimeout(() => {
      if (event.type === "insert") {
        output += event.char;
      } else if (event.type === "delete") {
        output = output.slice(0, -1);
      }

      editor.value = output;
    }, event.time);
  });
}