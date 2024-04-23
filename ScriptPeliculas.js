document.addEventListener('DOMContentLoaded', function () {
    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-btn');
    const resultContainer = document.getElementById('result');

    const questions = [
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
    ];

    let currentQuestionIndex = 0;

    function displayQuestion(index) {
        const question = questions[index];
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h2>${question.question}</h2>
        `;
        question.answers.forEach(answer => {
            const answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', () => checkAnswer(answer));
            questionElement.appendChild(answerButton);
        });
        questionContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar la nueva pregunta
        questionContainer.appendChild(questionElement);
    }

    function checkAnswer(selectedAnswer) {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        const answerButtons = questionContainer.querySelectorAll('button');
        if (selectedAnswer === correctAnswer) {
            answerButtons.forEach(button => {
                if (button.textContent === correctAnswer) {
                    button.style.backgroundColor = 'green';
                }
                button.disabled = true; // Deshabilitar los botones después de seleccionar una respuesta
            });
            resultContainer.textContent = "Correct!";
            resultContainer.style.display = 'block';
            nextButton.style.display = 'block';
        } else {
            resultContainer.textContent = "Incorrect. Try again!";
            resultContainer.style.display = 'block';
        }
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(currentQuestionIndex);
            resultContainer.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            resultContainer.textContent = "Quiz completed!";
            resultContainer.style.display = 'block';
            nextButton.style.display = 'none';
        }
    });

    displayQuestion(currentQuestionIndex);
});
