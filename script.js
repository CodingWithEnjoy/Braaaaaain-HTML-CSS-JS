const cont = document.getElementById("cont");
const idea = document.getElementById("idea");

let ideas = [];
const gravity = 0.03;

const generateIdea = (bulb) => {
  const x = 50;
  const y = 50;
  const r = 0;
  const s = 1 * (Math.random() * 0.5 + 0.5);
  const ax = 3 * (Math.random() * 1 - 0.5);
  const ay = 2 * (Math.random() * 1 - 0.9);
  const ar = 5 * (Math.random() * 1 - 0.5);
  bulb.style.transform = `translate(${50}vw, ${50}vh) rotate(${0}deg) scale(${s})`;
  return { node: bulb, x, y, r, s, ax, ay, ar };
};

const creationInterval = setInterval(() => {
  const newBulb = idea.cloneNode(true);
  newBulb.className = "cloned";
  newBulb.innerText = [..."💡💭?🗿🫡🤝🙃"][Math.floor(Math.random() * 5)];
  cont.appendChild(newBulb);
  const bulb = generateIdea(newBulb);
  ideas.push(bulb);
  if (ideas.length > 20) {
    clearInterval(creationInterval);
  }
}, 500);

function step(timestamp) {
  ideas = ideas.map((bulb) => {
    let { node, x, y, r, s, ax, ay, ar } = bulb;
    ay += gravity;
    let nx = x + ax;
    let ny = y + ay;
    let nr = r + ar;

    if (nx < -20 || nx > 120 || ny < -20 || ny > 120) {
      return generateIdea(bulb.node);
    } else {
      node.style.transform = `translate(${nx}vw, ${ny}vh) rotate(${nr}deg) scale(${s})`;

      return { node, x: nx, y: ny, r: nr, s, ax, ay, ar };
    }
  });
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);