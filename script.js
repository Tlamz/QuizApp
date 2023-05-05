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
        b: '6ft 1in',
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

const quiz = document.getElementById("quiz");
let answers = document.querySelectorAll(".answer");
const questEL = document.getElementById('question')
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn = document.getElementById('submitBtn');


let currentQuestion = 0;
let score = 0;


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
    for (i = 0; i < answers.length; i++) {
        // console.log(answers[i])
        answers[i].checked = false;
    }
}

function getAns() {
    let answer = undefined;

    for (i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id;
        }
    }

    return answer;
}



submitBtn.addEventListener("click", () => {
    const answer = getAns()

    // console.log(answer)
    
    if (answer) {
        if (answer === questions[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            deselectAns();
            loadQuestions();
        } else {
            // console.log('yo');
            quiz.innerHTML = `<h2>You got ${score} out of ${questions.length} questions correctly</h2>`
        }
    }
});




