




























let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    
    questionElement.textContent = questions[currentQuestion].question;

    optionsElement.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = qestions[currentQuestion].options[i];
        optionButton.addEventListener('click', checkAnswer);
        optionsElement.appendChild(optionButton);
    }
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    alert(`Game Over!\nYour Score: ${score}/${questions.length}`);
}

// Start the game
displayQuestion();