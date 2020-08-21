let div = document.createElement("div");
div.setAttribute(
  "class",
  "container d-flex flex-column align-items-center whole text-light justify-content-center"
);
let row_div = document.createElement("div");
row_div.setAttribute("class", "row justify-content-center");
let col_div = document.createElement("div");
col_div.setAttribute("class", "col-12");
let disp_score = document.createElement("p");
disp_score.setAttribute(
  "class",
  "h1 d-block text-primary font-weight-bold onesec text-center"
);
let score = parseInt(localStorage.getItem("score")) * 10;
disp_score.innerText = score;
let user_name = document.createElement("input");
user_name.type = "text";
user_name.setAttribute("class", "form-control");
user_name.id = "username";
user_name.placeholder = "User name";
let save_button = document.createElement("button");
save_button.setAttribute("id", "saveScoreBtn");
save_button.setAttribute("class", "btn btn-lg btn-outline-primary mt-3 sb");
user_name.addEventListener("input", () => {
  save_button.disabled = false;
});
save_button.disabled = true;
save_button.innerText = "Save";
save_button.addEventListener("click", () => {
  let a = localStorage.getItem("highScores").split(",");
  let player_name = user_name.value;
  a.push(player_name, score);
  localStorage.setItem("highScores", a.join(","));
  alert("Score saved");
  save_button.disabled = true;
});
let play_again_button = document.createElement("button");
play_again_button.setAttribute("id", "playAgain");
play_again_button.setAttribute(
  "class",
  "btn btn-lg btn-outline-warning mt-3 pb"
);
play_again_button.innerText = "Play Again!";
play_again_button.addEventListener("click", () => {
  location.href = "game.html";
});
let home_button = document.createElement("button");
home_button.setAttribute("id", "goHome");
home_button.setAttribute("class", "btn btn-lg btn-outline-danger mt-3 hb");
home_button.innerText = "Go home";
home_button.addEventListener("click", () => {
  location.href = "index.html";
});
col_div.append(
  disp_score,
  user_name,
  save_button,
  play_again_button,
  home_button
);
row_div.append(col_div);
div.append(row_div);
document.body.append(div);
