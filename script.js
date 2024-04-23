document.addEventListener('DOMContentLoaded', function () {
    const questionContainer = document.getElementById('question-container');
    const submitButton = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');

    const questions = [
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        // Puedes agregar más preguntas aquí
    ];

    function displayQuestion(index) {
        const question = questions[index];
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h2>${question.question}</h2>
            <ul>
                ${question.answers.map(answer => `<li>${answer}</li>`).join('')}
            </ul>
        `;
        questionContainer.appendChild(questionElement);
    }

    function checkAnswer() {
        const selectedAnswers = questionContainer.querySelectorAll('input:checked');
        let correctCount = 0;
        selectedAnswers.forEach(answer => {
            const questionIndex = answer.dataset.questionIndex;
            const selectedAnswer = answer.value;
            const correctAnswer = questions[questionIndex].correctAnswer;
            if (selectedAnswer === correctAnswer) {
                correctCount++;
            }
        });

        resultContainer.textContent = `You got ${correctCount} out of ${questions.length} correct!`;
        resultContainer.style.display = 'block';
    }

    questions.forEach((question, index) => {
        displayQuestion(index);
    });

    submitButton.addEventListener('click', checkAnswer);
});
