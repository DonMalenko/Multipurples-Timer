        const progress = document.getElementById('progress');
        const progressText = document.getElementById('progressText');
        const startBtn = document.getElementById('startBtn');
        const resetBtn = document.getElementById('resetBtn');
        const timeUpMessage = document.getElementById('timeUpMessage');
        const timeInput = document.getElementById('timeInput');
        const beepSound = document.getElementById('beepSound');
        const date = document.getElementById('date');

        beepSound.load();

        const d = new Date();
        date.innerHTML = "© Copyright " + d.getFullYear();

        let timer;
        let progressValue = 0;
        let maxTime = 0;

        function startTimer() {
            maxTime = parseInt(timeInput.value);
            if (isNaN(maxTime) || maxTime <= 0) {
                alert('Please enter a valid time in seconds.');
                return;
            }

            startBtn.disabled = true;
            resetBtn.disabled = false;
            timeUpMessage.style.visibility = 'hidden';
            progressValue = 0;
            progress.style.width = '0%';
            progressText.textContent = '0%';

            const interval = (maxTime * 1000) / 100;

            timer = setInterval(() => {
                if (progressValue < 100) {
                    progressValue++;
                    progress.style.width = progressValue + '%';
                    progressText.textContent = progressValue + '%';
                } else {
                    clearInterval(timer);
                    timeUpMessage.style.visibility = 'visible';
                    beepSound.play();
                    startBtn.disabled = false;
                }
            }, interval);
        }

        function resetTimer() {
            clearInterval(timer);
            progressValue = 0;
            progress.style.width = '0%';
            progressText.textContent = '0%';
            timeUpMessage.style.visibility = 'hidden';
            startBtn.disabled = false;
            resetBtn.disabled = true;
        }


        startBtn.addEventListener('click', startTimer);
        resetBtn.addEventListener('click', resetTimer);