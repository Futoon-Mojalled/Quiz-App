const questions = [
    {
        question: "When is Futoon's birthday?",
        answers: [
            {text: "January 1st", correct: false},
            {text: "June 25th", correct: true},
            {text: "April 15th", correct: false},
            {text: "October 31st", correct: false},
        ]
    },
    {
        question: "What are Futoon's favorite colors?",
        answers: [
            {text: "Green and Gray", correct: false},
            {text: "Blue and Orange", correct: false},
            {text: "Pink and Purple", correct: true},
            {text: "White and Yellow", correct: false},
        ]
    },
    {
        question: "What are Futoon's favorite drinks?",
        answers: [
            {text: "Matcha and ice coffee", correct: true},
            {text: "Tea and hot coffe", correct: false},
            {text: "Hot coffe and matcha", correct: false},
            {text: "Ice coffee and tea", correct: false},
        ]
    },
    {
        question: "How old is Futoon's baby girl cat?",
        answers: [
            {text: "1 year and 3 months", correct: true},
            {text: "1 year and 8 months", correct: false},
            {text: "2 year and 1 months", correct: false},
            {text: "6 months", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let quizScore = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    quizScore = 0;
    nextButton.innerHTML = "<strong>Next</strong>";
    showQuestion();
}

function showQuestion(){
    resetState();

    //desplay question
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    //add question number
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    //desplay answer
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        // button.setAttribute("class","btn")
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

//remove previous answers
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

//check if the answer is correct
function selectAnswer(e){
    console.log({e})
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; //!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if(isCorrect){
        selectedBtn.classList.add("correct");
        quizScore++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${quizScore} out  of ${questions.length} !<br>`;
    nextButton.innerHTML = "<strong>Try Again</strong>";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

const name = "ammar"
// const number =1;
// number == "1" //false
// number === "1" //true
//------------------------
// const number =1;
// number == "1" //true
// number === "1" //false