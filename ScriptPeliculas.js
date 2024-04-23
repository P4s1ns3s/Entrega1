document.addEventListener('DOMContentLoaded', function () {
    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-btn');
    const resultContainer = document.getElementById('result');

    const questions = [
        {
            question: "Who directed the movie 'Titanic'?",
            answers: ["James Cameron", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
            correctAnswer: "James Cameron"
        },
        {
            question: "In which movie does Marlon Brando play a leading role?",
            answers: ["The Godfather", "Toy Story", "Star Wars", "Avatar"],
            correctAnswer: "The Godfather"
        },
        {
            question: "Who directed the movie 'Toy Story'?",
            answers: ["John Lasseter", "Tim Burton", "Peter Jackson", "Hayao Miyazaki"],
            correctAnswer: "John Lasseter"
        },
        {
            question: "Who directed the movie 'The Lord of the Rings: The Fellowship of the Ring'?",
            answers: ["Peter Jackson", "James Cameron", "Quentin Tarantino", "Christopher Nolan"],
            correctAnswer: "Peter Jackson"
        },
        {
            question: "Who directed the movie 'Avatar'?",
            answers: ["James Cameron", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
            correctAnswer: "James Cameron"
        },
        {
            question: "Who directed the movie 'The Avengers'?",
            answers: ["Joss Whedon", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
            correctAnswer: "Joss Whedon"
        },
        {
            question: "Who directed the movie 'Top Gun'?",
            answers: ["Tony Scott", "Ridley Scott", "Michael Bay", "James Cameron"],
            correctAnswer: "Tony Scott"
        },
        {
            question: "Who directed the movie 'Good Will Hunting'?",
            answers: ["Gus Van Sant", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
            correctAnswer: "Gus Van Sant"
        },
        {
            question: "Who directed the movie 'Raiders of the Lost Ark'?",
            answers: ["Steven Spielberg", "James Cameron", "Martin Scorsese", "Quentin Tarantino"],
            correctAnswer: "Steven Spielberg"
        },
        {
            question: "Who directed the movie 'The Dark Knight'?",
            answers: ["Christopher Nolan", "Martin Scorsese", "Steven Spielberg", "Quentin Tarantino"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Who directed the movie 'The Princess Bride'?",
            answers: ["Rob Reiner", "Quentin Tarantino", "Tim Burton", "James Cameron"],
            correctAnswer: "Rob Reiner"
        },
        {
            question: "Who directed the movie 'Planet of the Apes'?",
            answers: ["Franklin J. Schaffner", "Stanley Kubrick", "James Cameron", "Martin Scorsese"],
            correctAnswer: "Franklin J. Schaffner"
        },
        {
            question: "Who directed the movie 'Star Wars: Episode IV - A New Hope'?",
            answers: ["George Lucas", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
            correctAnswer: "George Lucas"
        },
        {
            question: "Who directed the movie 'Pulp Fiction'?",
            answers: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
            correctAnswer: "Quentin Tarantino"
        }
    
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
            correctCount++;
            correctCountElement.textContent = correctCount;
        } else {
            resultContainer.textContent = "Incorrect. Try again!";
            resultContainer.style.display = 'block';
            incorrectCount++;
            incorrectCountElement.textContent = incorrectCount;
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