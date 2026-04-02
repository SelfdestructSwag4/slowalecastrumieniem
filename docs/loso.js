
export function randomPosition() {
  const obraz = document.createElement("img");
  obraz.src = "Toyota-Celica-T200VI.jpg";      // 2
  obraz.className = "animan";

 obraz.style.position = "absolute";
  obraz.style.left = Math.random() * window.innerWidth + "px";
  obraz.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(obraz);
}



