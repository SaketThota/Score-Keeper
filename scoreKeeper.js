var p1Score = 0;
var p2Score = 0;
var maxScore = 0;
var finish = false;

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var maxButton = document.querySelector("#max-score-button");

var p1Display = document.querySelector("#p1-display");
var p2Display = document.querySelector("#p2-display");
var maxDisplay = document.querySelector("#max-score-display");

p1Button.addEventListener("click", function () {
    if (!finish) { 
        p1Score++;
        p1Display.textContent = p1Score;
    } 
    if (p1Score === maxScore && !finish) { 
        finish = true;
        p1Display.classList.add("final");
    }
});

p2Button.addEventListener("click", function () {
    if (!finish) { 
        p2Score++;
        p2Display.textContent = p2Score;
    } 
    if (p2Score === maxScore && !finish) {
        finish = true;
        p2Display.classList.add("final");
    }
});

resetButton.addEventListener("click", reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    maxScore = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    maxDisplay.textContent = maxScore;
    maxButton.value = maxScore;
    p1Display.classList.remove("final");
    p2Display.classList.remove("final");
    finish = false;
}

maxButton.addEventListener("change", function () {
    maxScore = Number(maxButton.value);
    maxDisplay.textContent = maxScore;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("final");
    p2Display.classList.remove("final");
    finish = false;
});
