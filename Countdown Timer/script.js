addEventListener('DOMContentLoaded', () => {
    const timeInput = document.getElementById('timeInput');
    const startBtn = document.getElementById('startBtn');
    const timerDisplay = document.getElementById('timerDisplay');

    startBtn.addEventListener('click', () => {
        let timeInSeconds = parseInt(timeInput.value);

        if (timeInSeconds <= 0) {
            timerDisplay.innerText = "Enter a Positive Value!";
            return;
        }

        let endTime = Date.now() + timeInSeconds * 1000;

        timerDisplay.innerText = timeInSeconds;

        const timer = setInterval(() => {
            timeInSeconds--;
            if (timeInSeconds <= 0) {
                clearInterval(timer);
                timerDisplay.innerText = "Time's Up!";
            } else {
                timerDisplay.innerText = timeInSeconds;
            }
        }, 1000);
    });
});
