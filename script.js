const questions = [
    {
        question: "What does HTML stands for ?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true},
            { text: "High Tech Markup Language", correct: false},
            { text: "Hyperlink Text Markup Language", correct: false},
            { text: "Home Tool Markup Language", correct: false},
        ]
    },
    {
        question: "What does CSS stand for ?",
        answers: [
            { text: "Creative Style Sheets", correct: false},
            { text: "Cascading Style Sheets", correct: true},
            { text: "Computer Style Sheets", correct: false},
            { text: "Custom Style Sheets", correct: false},
        ]
    },
    {
        question: "Which programming language is mainly used for adding interactivity to websites?",
        answers: [
            { text: "HTML", correct: false},
            { text: "CSS", correct: false},
            { text: "Python", correct: false},
            { text: "Javascript", correct: false},
        ]
    },
    {
        question: "Which part of web development is responsible for handling data storage and retrieval?",
        answers: [
            { text: "Front-end", correct: false},
            { text: "Back-end", correct: true},
            { text: "Full-stack", correct: false},
            { text: "Middleware", correct: false},
        ]
    },
    {
        question: "What is the purpose of the script tag in HTML?",
        answers: [
            { text: "To define the page's structure", correct: false},
            { text: "To include external CSS styles", correct: false},
            { text: "To include external Javascript code", correct: true},
            { text: "To create hyperlinks", correct: false},
        ]
    }



];

const questionButton = document.getElementById("question-area");
const answerButton = document.querySelector(".answer-options");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionButton.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function selectAnswer(e){

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");

    }else{
        selectedButton.classList.add("incorrect");
    }

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();