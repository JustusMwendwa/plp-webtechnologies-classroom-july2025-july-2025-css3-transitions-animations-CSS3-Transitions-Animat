/*****************************************
 * Part 2: JavaScript Functions & Scope
 *****************************************/
let globalMessage = "I'm a global variable";

function showScopeExample() {
  let localMessage = "I'm local to showScopeExample()";
  // Combine global and local messages
  return `${globalMessage} | ${localMessage}`;
}

// Function with parameters and return value
function addNumbers(a, b) {
  return a + b;
}

// Display results
document.getElementById("scopeMessage").textContent = showScopeExample();
document.getElementById("sumResult").textContent = addNumbers(12, 8);

/*****************************************
 * Part 3: Combining CSS + JS
 *****************************************/
function toggleBoxAnimation(boxElement) {
  boxElement.classList.toggle("animate-move");
}

const animatedBox = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => toggleBoxAnimation(animatedBox));
