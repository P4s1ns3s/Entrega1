// Leer los datos desde local storage
var correctCount = localStorage.getItem('correctCount');
var incorrectCount = localStorage.getItem('incorrectCount');

// Asegurarse de que los datos sean números (ya que local storage almacena todo como cadena)
correctCount = parseInt(correctCount);
incorrectCount = parseInt(incorrectCount);

console.log("correctCount",correctCount)
const ctx = document.getElementById('results-chart').getContext('2d');
const resultsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Correct', 'Incorrect'],
        datasets: [{
            label: 'Results',
            data: [correctCount, incorrectCount],
            backgroundColor: [
                'green',
                'red',
            ],
            borderColor: [
                'green',
                'red',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});