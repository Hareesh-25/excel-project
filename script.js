const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let agents = [
  {x: 200, y: 200, color: 'lime'},
  {x: 400, y: 300, color: 'orange'}
];

// Draw sectors
function drawSectors() {
  ctx.strokeStyle = 'cyan';
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 5]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
}

// Draw agents
function drawAgents() {
  agents.forEach(agent => {
    ctx.beginPath();
    ctx.arc(agent.x, agent.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = agent.color;
    ctx.shadowBlur = 20;
    ctx.shadowColor = agent.color;
    ctx.fill();
  });
}

// Animate random agent movement
function animateAgents() {
  agents.forEach(agent => {
    let newX = agent.x + (Math.random() - 0.5) * 100;
    let newY = agent.y + (Math.random() - 0.5) * 100;
    gsap.to(agent, {x: newX, y: newY, duration: 2, ease: "power1.inOut"});
  });
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSectors();
  drawAgents();
  requestAnimationFrame(loop);
}

// Trigger random movement every 3 seconds
setInterval(animateAgents, 3000);

loop();
