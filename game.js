let score = 0;
let question_number = 1;
let prog_value = 10;
let div = document.createElement("div");
div.setAttribute(
  "class",
  "container d-flex flex-column align-items-center whole text-light"
);
let info_row = document.createElement("div");
info_row.setAttribute("class", "row info_row mt-5");

// one column
let ques_info_col = document.createElement("div");
ques_info_col.setAttribute("class", "col-md-6 col-lg-4");
let ques_info = document.createElement("p");
ques_info.setAttribute("class", "h5 d-block text-light");
ques_info.id = "progressText";
ques_info.innerText = "Question " + question_number + "/10";
let prog_div = document.createElement("div");
prog_div.setAttribute("class", "progress mt-3");
let inner_prog_div = document.createElement("div");
inner_prog_div.setAttribute("class", "progress-bar");
inner_prog_div.setAttribute("role", "progressbar");
inner_prog_div.setAttribute("aria-valuemin", "0");
inner_prog_div.setAttribute("aria-valuemax", "100");
inner_prog_div.setAttribute("aria-valuenow", "60");
inner_prog_div.style.width = prog_value + "%";
prog_div.append(inner_prog_div);
ques_info_col.append(ques_info, prog_div);
//end of column

//another column
let score_col = document.createElement("div");
score_col.setAttribute(
  "class",
  "col-md-4 text-end col-lg-2 offset-md-2 offset-lg-6"
);
let score_info = document.createElement("p");
score_info.setAttribute("class", "h5 d-block text-light text-center");
score_info.innerText = "Score";
let actual_score = document.createElement("p");
actual_score.setAttribute("class", "h4 d-block text-light text-center");
actual_score.innerText = score;
score_col.append(score_info, actual_score);
//end of column

//end of row

//requesting trivia questions declaration
let data;
let request = async function () {
  try {
    data = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    data = await data.json();
    data = data.results;
    displayQuestions(data, question_number - 1);
  } catch (error) {
    console.log(error);
  }
};
//calling the trivia questions request
request();
//div for qna
let qna_div = document.createElement("div");
qna_div.setAttribute("class", "col-12 qna mt-4");
let question = document.createElement("p");
question.setAttribute("class", "h4 d-block text-light mb-4");
let option1 = createOption("A", "one");
let option2 = createOption("B", "two");
let option3 = createOption("C", "three");
let option4 = createOption("D", "four");

//adding event listeners
option1.addEventListener("click", () => {
  if (
    document.querySelector("#one").innerHTML ==
    data[question_number - 1].correct_answer
  ) {
    score++;
  }
  question_number++;
  prog_value += 10;
  if (question_number == 11) {
    localStorage.setItem("score", String(score));
    location.href = "end.html";
    return;
  }
  editQuestionScore(question_number, prog_value, score);
  displayQuestions(data, question_number - 1);
});
option2.addEventListener("click", () => {
  if (
    document.querySelector("#two").innerHTML ==
    data[question_number - 1].correct_answer
  ) {
    score++;
  }
  question_number++;
  prog_value += 10;
  if (question_number == 11) {
    localStorage.setItem("score", String(score));
    location.href = "end.html";
    return;
  }
  editQuestionScore(question_number, prog_value, score);
  displayQuestions(data, question_number - 1);
});
option3.addEventListener("click", () => {
  if (
    document.querySelector("#three").innerHTML ==
    data[question_number - 1].correct_answer
  ) {
    score++;
  }
  question_number++;
  prog_value += 10;
  if (question_number == 11) {
    localStorage.setItem("score", String(score));
    location.href = "end.html";
    return;
  }
  editQuestionScore(question_number, prog_value, score);
  displayQuestions(data, question_number - 1);
});
option4.addEventListener("click", () => {
  if (
    document.querySelector("#four").innerHTML ==
    data[question_number - 1].correct_answer
  ) {
    score++;
  }
  question_number++;
  prog_value += 10;
  if (question_number == 11) {
    localStorage.setItem("score", String(score));
    location.href = "end.html";
    return;
  }
  editQuestionScore(question_number, prog_value, score);
  displayQuestions(data, question_number - 1);
});

qna_div.append(question, option1, option2, option3, option4);
info_row.append(ques_info_col, score_col, qna_div);
div.append(info_row);
document.body.append(div);

//creating option function declaration
function createOption(str, id) {
  let button = document.createElement("button");
  button.setAttribute("class", "btn-block btns mt-0 mb-1 d-flex p-0");
  let option_alpha = document.createElement("div");
  option_alpha.setAttribute("class", "option_labels bg-primary");
  option_alpha.innerText = str;
  let option_data = document.createElement("div");
  option_data.id = id;
  option_data.setAttribute("class", "option_data choice-text");
  button.append(option_alpha, option_data);
  return button;
}

function editQuestionScore(question, progress, score) {
  ques_info.innerText = "Question " + question + "/10";
  inner_prog_div.style.width = progress + "%";
  actual_score.innerText = score;
}

function displayQuestions(data, question_number) {
  question.innerHTML = data[question_number].question;
  let temp = [];
  temp.push(data[question_number].correct_answer);
  temp.push(...data[question_number].incorrect_answers);
  let random_ind = [];
  while (random_ind.length != 4) {
    let a = Math.floor(Math.random() * 4);
    if (random_ind.indexOf(a) == -1) {
      random_ind.push(a);
    }
  }
  let options = document.querySelectorAll(".choice-text");
  let start = 0;
  options.forEach((val) => {
    val.innerHTML = temp[random_ind[start]];
    start++;
  });
}
