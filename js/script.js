let questions = [
    {
        "question": "Wer hat HTML-erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist Barack Obama sein Vorname?",
        "answer_1": "Hussein",
        "answer_2": "Barack",
        "answer_3": "Michael Jackson",
        "answer_4": "Wilhelm",
        "right_answer": 2
    },
    {
        "question": "Yupp",
        "answer_1": "Hussein",
        "answer_2": "Barack",
        "answer_3": "Michael Jackson",
        "answer_4": "Wilhelm",
        "right_answer": 2
    }
];

let rightQuestions = 0;

let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {


    if  (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';

        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = './img/trophy.png';
    } else { // Show Question

        let percent = Math.round(((currentQuestion + 1) / questions.length) * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;

        let question = questions[currentQuestion];

        document.getElementById('quetion-number').innerHTML = currentQuestion + 1;
        document.getElementById('question').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answer_1;
        document.getElementById('answer_2').innerHTML = question.answer_2;
        document.getElementById('answer_3').innerHTML = question.answer_3;
        document.getElementById('answer_4').innerHTML = question.answer_4;
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRighAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRighAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;

}


function nextQuestion() {
    currentQuestion++; // example: from 0 to 1
    showQuestion(); // loads next questions

    document.getElementById('next-button').disabled = true; // disables button
    resetAnswerQuestion();
}


function resetAnswerQuestion() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('answer_' + i).parentNode.classList.remove('bg-danger');
        document.getElementById('answer_' + i).parentNode.classList.remove('bg-success');
    }
}