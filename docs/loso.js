
export function randomPosition() {
  const obraz = document.getElementById("img");
  img.src = "Toyota-Celica-T200VI.jpg";      // 2
  img.className = "animan";

  img.style.position = "absolute";
  img.style.left = Math.random() * window.innerWidth + "px";
  img.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(img);
}

// zmienia pozycję co 1 sekundę
setInterval(randomPosition, 1000);

