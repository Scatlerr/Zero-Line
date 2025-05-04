const canvas = document.getElementById("battlefield");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas(); // set on load
window.addEventListener('resize', resizeCanvas); // update on window resize
