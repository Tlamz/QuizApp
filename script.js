const questions = [
    {
        question: 'When is Tlamz birthday?',
        a: 'June 24',
        b: 'January 24',
        c: 'July 24',
        d: 'December 24',
        correct: 'b',
    },
    {
        question: 'How tall is Tlamz?',
        a: '6ft 5in',
        b: '6ft',
        c: '6ft 2in',
        d: '5ft 11in',
        correct: 'c',
    },
    {
        question: 'Where would Tlamz rather hangout with friends?',
        a: 'Cinema',
        b: 'Beach',
        c: 'Club',
        d: 'Home',
        correct: 'd',
    },
    {
        question: 'What football club does Tlamz support?',
        a: 'Chelsea',
        b: 'Arsenal',
        c: 'Liverpool',
        d: 'Man Utd',
        correct: 'a',
    },
    {
        question: 'Which of these Nigerian States has Tlamz NOT visited?',
        a: 'Niger',
        b: 'Anambra',
        c: 'Imo',
        d: 'Plateau',
        correct: 'd',
    }
]

let radios = document.querySelectorAll(".radioBtn");
const questEL = document.getElementById('question')
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn = document.getElementById('submitBtn');


let currentQuestion = 0;


function loadQuestions() {
    const quizData = questions[currentQuestion];

    questEL.innerHTML = quizData.question;
    aText.innerHTML = quizData.a;
    bText.innerHTML = quizData.b;
    cText.innerHTML = quizData.c;
    dText.innerHTML = quizData.d;
}
loadQuestions();

function deselectAns() {
    for (i = 0; i < radios.length; i++) {
        console.log(radios[i])
        radios[i].checked = false;
    }

}



submitBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        deselectAns();
        loadQuestions();
    } else {
        alert("You've finished, results loading")
    }
});




