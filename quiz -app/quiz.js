const questions = [
    {
        question: "Which is largest animal in the world?",
        answers:[
            {text: "shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "dog", correct: false},
            {text: "cat", correct: false}
        ]
    },
    {
        question: "Which is smallest animal in the world?",
        answers:[
            {text: "shark", correct: false},
            {text: "blue whale", correct: false},
            {text: "dog", correct: false},
            {text: "cat", correct: true}
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers:[
            {text: "shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "dog", correct: false},
            {text: "cat", correct: false}
        ]
    },
    {
        question: "Which is smallest animal in the world?",
        answers:[
            {text: "shark", correct: false},
            {text: "blue whale", correct: false},
            {text: "dog", correct: false},
            {text: "cat", correct: true}
        ]
    }
];


const questionElement = document.getElementById("question");
const answreButtons = document.getElementById("answer-buttons");
const nextButton  = document.getElementById("next-btn");


let currentQuestionIndex= 0;
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
    //how to update question
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("Button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answreButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
    });
}



function resetState(){
    nextButton.style.display = "none"
    while(answreButtons.firstChild){
        answreButtons.removeChild(answreButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answreButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} ou of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
})
startQuiz();