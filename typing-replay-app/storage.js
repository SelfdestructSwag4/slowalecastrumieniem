export function save(events) {
  localStorage.setItem("session", JSON.stringify(events));
}

export function load() {
  return JSON.parse(localStorage.getItem("session")) || [];
}