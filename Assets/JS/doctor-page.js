const data = [
{
    "question":"Dr.Sarah",
    "answer":{
        "a":"Dr.Sarah",
        "b":"Dr.Michaels",
        "c":"Dr.Kimberly",
        "d":"Dr.Christian",
        "e":"Dr.Samuel",
        "correct":"a",
    }
},
{
    "question":"Dr.Michaels",
    "answer":{
        "a":"Dr.Sarah",
        "b":"Dr.Michaels",
        "c":"Dr.Kimberly",
        "d":"Dr.Christian",
        "e":"Dr.Samuel",
        "correct":"b",
    }
},
{
    "question":"Dr.Kimberly",
    "answer":{
        "a":"Dr.Sarah",
        "b":"Dr.Michaels",
        "c":"Dr.Kimberly",
        "d":"Dr.Christian",
        "e":"Dr.Samuel",
        "correct":"c",
    }
},
{
    "question":"Dr.Christian",
    "answer":{
        "a":"Dr.Sarah",
        "b":"Dr.Michaels",
        "c":"Dr.Kimberly",
        "d":"Dr.Christian",
        "e":"Dr.Samuel",
        "correct":"d",
    }
},
{
    "question":"Dr.Samuel",
    "answers":{
        "a":"Dr.Sarah",
        "b":"Dr.Michaels",
        "c":"Dr.Kimberly",
        "d":"Dr.Christian",
        "e":"Dr.Samuel",
        "correct":"e",
    }
}
]

let count = 0;
let score = 0;
// setting path for call of professional doctor
const dataquestion = document.querySelector(".question");
const opt1 = document.querySelector("#option1");
const opt2 = document.querySelector("#option2");
const opt3 = document.querySelector("#option3");
const opt4 = document.querySelector("#option4");
const opt5 = document.querySelector("#option5");
const opt6 = document.querySelector("#option6");
const call = document.querySelector("#call");
const answers1 = document.querySelectorAll(".answer")
const available = document.querySelector("#All doctors are on-call please wait"); 
const loaddata = () => {
    const listOfQuestions = data[count];
    dataquestion.innerHTML = listOfdataquestion;
    opt1.innerHTML = listOfQuestions.answers.a;
    opt2.innerHTML = listOfQuestions.answers.b;
    opt3.innerHTML = listOfQuestions.answers.c;
    opt4.innerHTML = listOfQuestions.answers.d;
}
// loading question in html file and storing option
loadQuestions();
const getAnswer = () => {
    let ans;
    answers1.forEach(currentAnswer => {
        if (currentAnswer.checked) {
            ans = currentAnswer.id;
        }
    });
    const corAnswer = {ans1:'a', ans2:'b', ans3:'c', ans4:'d'};
    return corAnswer[ans];
}
// call button function
call.addEventListener('click', () => {
    const checkanswer = getAnswer();
    console.log({ checkanswer, correct: data[count].answers.correct, score});
// Output
    if (checkanswer == data[count].answers.correct) {
        score = score + 1;
    };
    count++;
    if (count < data.length) {
        loadQuestions();

    } else {
        available.innerHTML = `
        <h4> Search:  ${score}/ ${data.length}</h4>
       <button class="Call" onClick="location.reload()"></button>
        `;

        available.classList.remove("Currently Busy")
    }

});
/;/