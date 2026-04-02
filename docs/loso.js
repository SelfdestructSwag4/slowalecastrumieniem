
export function randomPosition() {
  const obraz = document.getElementById("car");

  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  img.style.left = x + "px";
  img.style.top = y + "px";
}

// zmienia pozycję co 1 sekundę
setInterval(randomPosition, 1000);

