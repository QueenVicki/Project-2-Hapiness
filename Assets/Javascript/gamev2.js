const questions = [
    {
        question: "Which of the following is a true statement about people?",
        correct: 0,
        answers: [
            "A) People have a unique set of fingerprints.",
            "B) People can survive longer without food than without sleep.",
            "C) People's hair grows faster during the winter months.",
            "D) People can only see three primary colors."
        ]
    },
    {
        question: "Which of the following is a true statement about plants?",
        correct: 1,
        answers: [
            "A) Plants are capable of feeling emotions.",
            "B) All plants reproduce through seeds.",
            "C) Plants require sleep like humans.",
            "D) All plants are toxic to humans."
        ]
    },
    {
        question: "What is 2+2 if the answer is 'blue'?",
        correct: 1,
        answers: [
            "A) Spongebob.",
            "B) Blue.",
            "C) 4.",
            "D) I don't like games."
        ]
    },
    {
        question: "True or False: People who laugh more often tend to live longer lives.",
        correct: 0,
        answers: [
            "A) True.",
            "B) False."
        ]
    },
    {
        question: "Which of the following is a true statement about sunflowers?",
        correct: 1,
        answers: [
            "A) Sunflowers are all annual plants.",
            "B) Sunflowers have been cultivated for over 5,000 years.",
            "C) Sunflowers can only grow in sandy soil.",
            "D) Sunflowers are immune to pests and diseases."
        ]
    },
    {
        question: "True or False: People are more likely to remember negative experiences over positive ones.",
        correct: 0,
        answers: [
            "A) True.",
            "B) False.",
        ]
    },
    {
        question: "Which of the following is a true statement about plants?",
        correct: 3,
        answers: [
            "A) All plants require the same amount of water to thrive.",
            "B) Plants don't have a circulatory system.",
            "C) All plants reproduce through spores.",
            "D) Plants can convert sunlight into energy through a process called photosynthesis."
        ]
    },
    {
        question: "Which of the following is a true statement about happiness?",
        correct: 1,
        answers: [
            "A) Happiness is solely determined by external circumstances.",
            "B) Helping others has been shown to increase happiness levels.",
            "C) Happiness is a fixed trait and cannot be changed.",
            "D) Pursuing wealth is the most reliable path to happiness."
        ]
    },
    {
        question: "True or False: Sunflowers are heliotropic, meaning they track the movement of the sun across the sky.",
        correct: 0,
        answers: [
            "A) True.",
            "B) False."
        ]
    },
    {
        question: "Which of the following is a true statement about people?",
        correct: 3,
        answers: [
            "A) People are born with all their brain cells.",
            "B) People blink about 10,000 times a day.",
            "C) People can't feel pain in their dreams.",
            "D) People have more bones in their feet than in their hands."
        ]
    },
    {
        question: "True or False: Sunflowers are heliotropic, meaning they track the movement of the sun across the sky.",
        correct: 1,
        answers: [
            "A) Plants consume only water for energy.",
            "B) Plants can communicate with each other through chemical signals."
        ]
    },
    {
        question: "Which of the following is a true statement about people?",
        correct: 3,
        answers: [
            "A) People are born with all their brain cells.",
            "B) People blink about 10,000 times a day.",
            "C) People can't feel pain in their dreams.",
            "D) People have more bones in their feet than in their hands."
        ]
    },
    {
        question: "Which of the following is a true statement about plants?",
        correct: 1,
        answers: [
            "A) Plants consume only water for energy.",
            "B) Plants can communicate with each other through chemical signals.",
            "C) Plants respire only during the day.",
            "D) Plants don't require soil to grow."
        ]
    },
    {
        question: "Which of the following is a true statement about people?",
        correct: 1,
        answers: [
            "A) People have unique tongue prints like fingerprints.",
            "B) People can only see in black and white when they're born.",
            "C) People can't digest spinach properly.",
            "D) People's ears never stop growing throughout their life."
        ]
    },
];


function generateNumber() {
    var randNum = Math.round((Math.random() * (questions.length - 1)))
    return randNum
};


function checkAnswer(answer, choice) {
    let  result
    if (answer === choice) {
        result = true
    } else {
        result = false   
    }    
    return result
};

function updateScore(result, score) {
    let next;
    let scoreEl = document.querySelector('#score');
    let updatedScore = score;
    if (result) {
        updatedScore++;
    } else {
        updatedScore--;
        updatedScore < 0 ? updatedScore = 0 : updatedScore;
    };
    scoreEl.textContent = updatedScore;
    return updatedScore;
};


document.addEventListener('DOMContentLoaded', () => {
    let sessionQuestions = [...questions];
    let ctn = document.querySelector('#questions');
    let score = 0;
    let randNum = generateNumber();

    game();

    function game() {
        currentQuestion = sessionQuestions[randNum];
        const {correct, question: label} = currentQuestion;
       let el = document.createElement('ul');
       el.classList.add('question');
       el.textContent = label;

       currentQuestion.answers.forEach((answerText, answerIndex) => {
        answer = document.createElement('li');
        answer.classList.add('choice');
        answer.textContent = answerText;

        // ========================================
        // All the changes happen inside of here
        answer.addEventListener('click', () => {
            const result = checkAnswer(correct, answerIndex);
            
            const updatedScore = updateScore(result, score);
            score = updatedScore;

            if (score >= 3) {
                if (confirm("Congratulations you can level up to Level 2!")) {
                    window.open("Level2.html", '_blank');
                }
            };
            
            randNum = generateNumber()
            currentQuestion = sessionQuestions[randNum];
            ctn.removeChild(el);
            game();
        })
        //^^ All the changes happen inside of here ^^
        // ========================================
        
        el.appendChild(answer);
        ctn.appendChild(el);
        //^^ And the new question is injected here ^^
        // ========================================
    });
    };
});