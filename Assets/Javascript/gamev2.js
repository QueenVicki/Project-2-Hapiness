const questions = [
    {
        question: "Who lives in a pineapple under the sea?",
        correct: 0,
        answers: [
            "Spongebob",
            "Squidward",
            "Another",
            "The last character"
        ]
    },
    {
        question: "Who goes to visit their grandmother in the forest?",
        correct: 2,
        answers: [
            "A wolf",
            "Kevin from the pub",
            "Red riding hood",
            "Bob the builder"
        ]
    },
    {
        question: "What is 2+2 if the answer is 'blue'?",
        correct: 1,
        answers: [
            "Spongebob",
            "Blue",
            "4",
            "I don't like games"
        ]
    },
    {
        question: "What do you call a bear with no teeth?",
        correct: 3,
        answers: [
            "Gummy bear",
            "Toothless",
            "Bare",
            "A gummy grin"
        ]
    },
    {
        question: "Why did the tomato turn red?",
        correct: 0,
        answers: [
            "Because it saw the salad dressing!",
            "Because it was ripe",
            "Because it was angry",
            "Because it was blushing"
        ]
    },
    {
        question: "What do you call fake spaghetti?",
        correct: 1,
        answers: [
            "Im-pasta",
            "An impasta",
            "Noodling around",
            "Fauxgetti"
        ]
    },
    {
        question: "What did one hat say to the other?",
        correct: 2,
        answers: [
            "You're a head above the rest",
            "I'm on top of things",
            "You stay here, I'll go on a head",
            "You've got style"
        ]
    },
    {
        question: "Why don't skeletons fight each other?",
        correct: 3,
        answers: [
            "They're too busy dancing",
            "They're afraid of breaking a bone",
            "They're not that brave",
            "They don't have the guts"
        ]
    },
    {
        question: "How do you organize a space party?",
        correct: 0,
        answers: [
            "You planet!",
            "Send out invitations",
            "Set up a telescope",
            "Prepare for liftoff"
        ]
    },
    {
        question: "Why don't scientists trust atoms?",
        correct: 1,
        answers: [
            "Because they make up everything",
            "Because they're always splitting",
            "Because they're too small to see",
            "Because they're unstable"
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