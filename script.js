let activeQuestion = null;
let startTime = null;
let timer = null;
let elapsedTimePerQuestion = Array(20).fill(0);

// function startStopwatch(questionNumber) {
//     if (timer) {
//         clearInterval(timer);
//         const now = new Date();
//         elapsedTimePerQuestion[activeQuestion - 1] += (now - startTime) / 1000;
//         document.getElementById(`btn${activeQuestion}`).classList.remove('active');
//     }

//     activeQuestion = questionNumber;
//     startTime = new Date();
//     timer = setInterval(updateTimeDisplay, 100);
//     document.getElementById(`btn${questionNumber}`).classList.add('active');
// }
function startStopwatch(questionNumber) {
    if (timer) {
        clearInterval(timer);
        const now = new Date();
        elapsedTimePerQuestion[activeQuestion - 1] += (now - startTime) / 1000;
        document.getElementById(`btn${activeQuestion}`).classList.remove('active');
    }

    activeQuestion = questionNumber;
    startTime = new Date();
    timer = setInterval(updateTimeDisplay, 100);
    document.getElementById(`btn${questionNumber}`).classList.add('active');
}

function updateTimeDisplay() {
    const now = new Date();
    const elapsedTime = ((now - startTime) / 1000).toFixed(1);
    document.getElementById('time').textContent = elapsedTime;
}

function showDetails() {
    clearInterval(timer);  // Stop the timer
    if (activeQuestion !== null) {
        const now = new Date();
        elapsedTimePerQuestion[activeQuestion - 1] += (now - startTime) / 1000;
        document.getElementById(`btn${activeQuestion}`).classList.remove('active');
        activeQuestion = null;  // Reset the activeQuestion
        startTime = null;  // Reset the startTime
    }

    const details = elapsedTimePerQuestion.map((time, index) =>
        `Question ${index + 1}: ${time.toFixed(1)} seconds`
    ).join('<br>');

    document.getElementById('details').innerHTML = details;
}

