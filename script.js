let score = 0;
let div = document.createElement("div");
div.setAttribute(
  "class",
  "container d-flex flex-column justify-content-center align-items-center whole text-light"
);
let p1 = document.createElement("p");
p1.setAttribute("class", "h2");
p1.innerText = " Quick quiz";
let play_button = document.createElement("button");
play_button.setAttribute("id", "play");
play_button.setAttribute("class", "btn btn-lg btn-outline-dark mt-2 btns");
play_button.innerText = "Play!";
let high_scores_button = document.createElement("button");
high_scores_button.setAttribute("id", "highScores");
high_scores_button.setAttribute(
  "class",
  "btn btn-lg btn-outline-dark mt-2 btns"
);
play_button.addEventListener("click", () => {
  location.href = "game.html";
});
high_scores_button.addEventListener("click", () => {
  location.href = "highscores.html";
});
high_scores_button.innerText = "High Scores";
div.append(p1, play_button, high_scores_button);
document.body.append(div);
if (localStorage.getItem("highScores") == null) {
  localStorage.setItem("highScores", ["dummy", 0].join(","));
}
