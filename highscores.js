let div = document.createElement("div");
div.setAttribute(
  "class",
  "container d-flex flex-column justify-content-center bg-dark align-items-center"
);
div.style.height = "100vh";
let head = document.createElement("p");
head.setAttribute("class", "display-4 text-center text-light");
head.innerText = "High Scores";

let highscore_data = document.createElement("p");
highscore_data.setAttribute("class", "h1 text-center text-light");
let data = localStorage.getItem("highScores").split(",");
data = data.slice(2);
if (data.length != 0) {
  let obj = [];
  for (let i = 0; i < data.length; i = i + 2) {
    let temp = {};
    temp.name = data[i];
    temp.score = parseInt(data[i + 1]);
    obj.push(temp);
  }
  obj.sort((a, b) => {
    if (a.score == b.score) {
      return a.name - b.name;
    }
    return b.score - a.score;
  });
  highscore_data.innerHTML = "";
  obj.forEach((val) => {
    highscore_data.innerHTML += `${val.name} - ${val.score}<br/>`;
  });
} else {
  highscore_data.innerHTML = "No Highscores";
}
let home_button = document.createElement("button");
home_button.setAttribute("class", "btn btn-outline-primary btn-lg mt-3");
home_button.id = "goHome";
home_button.innerText = "Go Home";
home_button.addEventListener("click", () => {
  location.href = "index.html";
});
div.append(head, highscore_data, home_button);
document.body.append(div);
