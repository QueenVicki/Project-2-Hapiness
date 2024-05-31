const questions = [
    {
        question: "Which of the following is a true statement about people?",
        correct: 0,
        answers: [
            "People have a unique set of fingerprints.",
            "People can survive longer without food than without sleep.",
            "People's hair grows faster during the winter months.",
            "People can only see three primary colors."
        ]
    },
    {
        question: "Which of the following is a true statement about plants?",
        correct: 1,
        answers: [
            "Plants are capable of feeling emotions.",
            "All plants reproduce through seeds.",
            "Plants require sleep like humans.",
            "All plants are toxic to humans."
        ]
    },
    {
        question: "What is 2+2 if the answer is 'blue'?",
        correct: 1,
        answers: [
            "Spongebob.",
            "Blue.",
            "4.",
            "I don't like games."
        ]
    },
    {
        question: "Why did the tomato turn red?",
        correct: 1,
        answers: [
            "It was embarrassed.",
            "It saw the salad dressing.",
            "It got sunburned.",
            "It met a cucumber."
        ]
    },
    {
        question: "What do you call a plant that works in an office?",
        correct: 3,
        answers: [
            "A desk fern.",
            "A potted boss.",
            "A leaf executive.",
            "A branch manager."
        ]
    },
    {
        question: "True or False: People who laugh more often tend to live longer lives.",
        correct: 0,
        answers: [
            "True.",
            "False."
        ]
    },
    {
        question: "Which of the following is a true statement about sunflowers?",
        correct: 1,
        answers: [
            "Sunflowers are all annual plants.",
            "Sunflowers have been cultivated for over 5,000 years.",
            "Sunflowers can only grow in sandy soil.",
            "Sunflowers are immune to pests and diseases."
        ]
    },
    {
        question: "True or False: People are more likely to remember negative experiences over positive ones.",
        correct: 0,
        answers: [
            "True.",
            "False.",
        ]
    },
    {
        question: "Which else of the following is a true statement about plants?",
        correct: 3,
        answers: [
            "All plants require the same amount of water to thrive.",
            "Plants don't have a circulatory system.",
            "All plants reproduce through spores.",
            "Plants can convert sunlight into energy through a process called photosynthesis."
        ]
    },
    {
        question: "Which of the following is a true statement about happiness?",
        correct: 1,
        answers: [
            "Happiness is solely determined by external circumstances.",
            "Helping others has been shown to increase happiness levels.",
            "Happiness is a fixed trait and cannot be changed.",
            "Pursuing wealth is the most reliable path to happiness."
        ]
    },
    {
        question: "True or False: Sunflowers are heliotropic, meaning they track the movement of the sun across the sky.",
        correct: 0,
        answers: [
            "True.",
            "False."
        ]
    },
    {
        question: "Which of the following is a true statement about people?",
        correct: 3,
        answers: [
            "People are born with all their brain cells.",
            "People blink about 10,000 times a day.",
            "People can't feel pain in their dreams.",
            "People have more bones in their feet than in their hands."
        ]
    },
    {
        question: "True or False: Sunflowers are heliotropic, meaning they track the movement of the sun across the sky.",
        correct: 1,
        answers: [
            "True.",
            "False."
        ]
    },
    {
        question: "Which of the following is a true statement about people?",
        correct: 3,
        answers: [
            "People are born with all their brain cells.",
            "People blink about 10,000 times a day.",
            "People can't feel pain in their dreams.",
            "People have more bones in their feet than in their hands."
        ]
    },
    {
        question: "Which of the following is a true statement about plants?",
        correct: 1,
        answers: [
            "Plants consume only water for energy.",
            "Plants can communicate with each other through chemical signals.",
            "Plants respire only during the day.",
            "Plants don't require soil to grow."
        ]
    },
    {
        question: "Which of the following is a true statement about people?",
        correct: 1,
        answers: [
            "People have unique tongue prints like fingerprints.",
            "People can only see in black and white when they're born.",
            "People can't digest spinach properly.",
            "People's ears never stop growing throughout their life."
        ]
    },
];

function generateNumber() {
    return Math.round(Math.random() * (questions.length - 1));
}

function checkAnswer(answer, choice) {
    return answer === choice;
}

document.addEventListener('DOMContentLoaded', () => {
    const scoreElement = document.getElementById('score');
    const changingImage = document.getElementById('changing-image');
    const questionContainer = document.getElementById('questions');
    const images = [
        'Assets/Image/Sunflower/Sunflower default.jpg',
        'Assets/Image/Sunflower/Sunflower 2nd stage.jpg',
        'Assets/Image/Sunflower/Sunflower 3rd stage.jpg',
        'Assets/Image/Sunflower/Sunflower last stage.jpg'
    ];

    let score = 0;
    let sessionQuestions = [...questions];
    let randNum = generateNumber();

    function updateImage() {
        const imageIndex = Math.floor(score / 2);
        if (imageIndex < images.length) {
            changingImage.src = images[imageIndex];
        }
    }

    function updateScore(result) {
        if (result) {
            score++;
        } else {
            score = Math.max(0, score - 1);
        }
        scoreElement.textContent = `Score: ${score}`;
        updateImage();
    }

    function game() {
        let currentQuestion = sessionQuestions[randNum];
        const { correct, question: label } = currentQuestion;

        let el = document.createElement('ul');
        el.classList.add('question');
        el.textContent = label;

        currentQuestion.answers.forEach((answerText, answerIndex) => {
            let answer = document.createElement('li');
            answer.classList.add('choice');
            answer.textContent = answerText;

            answer.addEventListener('click', () => {
                const result = checkAnswer(correct, answerIndex);
                updateScore(result);

                if (score >= 6) {
                    if (confirm("Congratulations, wasn't that easy, you can now move up to Level 2!")) {
                        window.open("Level2.html", '_blank');
                    }
                };

                randNum = generateNumber();
                questionContainer.removeChild(el);
                game();
            });

            el.appendChild(answer);
        });

        questionContainer.appendChild(el);
    }

    game();
});

// function generateNumber() {
//     var randNum = Math.round((Math.random() * (questions.length - 1)))
//     return randNum
// };


// function checkAnswer(answer, choice) {
//     let  result
//     if (answer === choice) {
//         result = true
//     } else {
//         result = false   
//     }    
//     return result
// };

// function updateScore(result, score) {
//     let next;
//     let scoreEl = document.querySelector('#score');
//     let updatedScore = score;
//     if (result) {
//         updatedScore++;
//     } else {
//         updatedScore--;
//         updatedScore < 0 ? updatedScore = 0 : updatedScore;;
//     };
//     // scoreEl.textContent = updatedScore;
//     // return updatedScore;

//     scoreElement.textContent = updatedScore;;
//         updateImage();
// };

// function updateImage() {
//     const imageIndex = Math.floor(score / 2);
//     if (imageIndex < images.length) {
//         changingImage.src = images[imageIndex];
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let sessionQuestions = [...questions];
//     let ctn = document.querySelector('#questions');
//     let score = 0;
//     let randNum = generateNumber();

//     game();

//     function game() {
//         currentQuestion = sessionQuestions[randNum];
//         const {correct, question: label} = currentQuestion;
//        let el = document.createElement('ul');
//        el.classList.add('question');
//        el.textContent = label;

//        currentQuestion.answers.forEach((answerText, answerIndex) => {
//         answer = document.createElement('li');
//         answer.classList.add('choice');
//         answer.textContent = answerText;

//         function updateImage() {
//             const imageIndex = Math.floor(score => 2,4,6);
//             if (imageIndex < images.length) {
//                 changingImage.src = images[imageIndex];
//             }
//         }

//         document.addEventListener('DOMContentLoaded', () => {
//             const scoreElement = document.getElementById('score');
//             const changingImage = document.getElementById('changing-image');
//             const questionContainer = document.getElementById('questions');
//             const images = [
//                 'Assets/Image/Sunflower/Sunflower default.jpg',
//                 'Assets/Image/Sunflower/Sunflower 2nd stage.jpg',
//                 'Assets/Image/Sunflower/Sunflower 3rd stage.jpg',
//                 'Assets/Image/Sunflower/Sunflower last stage.jpg'
//         ]});

//         // ========================================
//         // All the changes happen inside of here
//         answer.addEventListener('click', () => {
//             const result = checkAnswer(correct, answerIndex);

//             const updatedScore = updateScore(result, score, 'changing-image');
//             score = updatedScore;

//             if (score >= 6) {
//                 if (confirm("Congratulations, wasn't that easy, you can now move up to Level 2!")) {
//                     window.open("Level2.html", '_blank');
//                 }
//             };
            
//             randNum = generateNumber()
//             currentQuestion = sessionQuestions[randNum];
//             ctn.removeChild(el);
//             game();
//         })
//         //^^ All the changes happen inside of here ^^
//         // ========================================
        
//         el.appendChild(answer);
//         ctn.appendChild(el);
//         //^^ And the new question is injected here ^^
//         // ========================================
//     });
//     };
// });