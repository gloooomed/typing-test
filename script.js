class TypingTest {
    constructor() {
        this.testTexts = [
            "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once.",
            "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell.",
            "To be or not to be, that is the question. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune.",
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.",
            "All happy families are alike; each unhappy family is unhappy in its own way. Everything was in confusion in the Oblonskys' house."
        ];
        this.currentText = '';
        this.startTime = null;
        this.timeLimit = 30;
        this.isTestActive = false;
        this.timer = null;
        this.timeLeft = 30;
        this.correctChars = 0;
        this.totalChars = 0;
        this.errors = 0;
        this.textDisplay = document.getElementById('textDisplay');
        this.userInput = document.getElementById('userInput');
        this.wpmDisplay = document.getElementById('wpm');
        this.accuracyDisplay = document.getElementById('accuracy');
        this.timerDisplay = document.getElementById('timer');
        this.restartBtn = document.getElementById('restartBtn');
        this.results = document.getElementById('results');
        this.tryAgainBtn = document.getElementById('tryAgainBtn');
        this.finalWpm = document.getElementById('finalWpm');
        this.finalAccuracy = document.getElementById('finalAccuracy');
        this.finalChars = document.getElementById('finalChars');
        this.timeButtons = document.querySelectorAll('.time-btn');
        this.userInput.addEventListener('input', e => this.handleInput(e));
        document.addEventListener('keydown', e => this.focusInput(e));
        this.restartBtn.addEventListener('click', () => this.resetTest());
        if (this.tryAgainBtn) this.tryAgainBtn.addEventListener('click', () => this.resetTest());
        this.timeButtons.forEach(btn => {
            btn.addEventListener('click', e => this.setTimeLimit(e));
        });
        this.textDisplay.addEventListener('click', () => this.userInput.focus());
        this.resetTest();
    }
    focusInput(e) {
        if (!this.isTestActive && e.key.length === 1) {
            this.userInput.focus();
        }
    }
    setTimeLimit(e) {
        this.timeButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.timeLimit = parseInt(e.target.dataset.time);
        this.timeLeft = this.timeLimit;
        this.timerDisplay.textContent = this.timeLimit;
        this.resetTest();
    }
    generateText() {
        const randomIndex = Math.floor(Math.random() * this.testTexts.length);
        return this.testTexts[randomIndex];
    }
    displayText() {
        this.currentText = this.generateText();
        this.textDisplay.innerHTML = this.currentText
            .split('')
            .map(char => `<span class="char">${char}</span>`)
            .join('');
    }
    startTest() {
        if (!this.isTestActive) {
            this.isTestActive = true;
            this.startTime = Date.now();
            this.startTimer();
        }
    }
    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.timerDisplay.textContent = this.timeLeft;
            if (this.timeLeft <= 0) {
                this.endTest();
            }
        }, 1000);
    }
    handleInput(e) {
        if (!this.isTestActive) this.startTest();
        const inputValue = e.target.value;
        const chars = this.textDisplay.querySelectorAll('.char');
        chars.forEach(char => {
            char.classList.remove('correct', 'incorrect', 'current');
        });
        for (let i = 0; i < inputValue.length; i++) {
            if (i < chars.length) {
                if (inputValue[i] === this.currentText[i]) {
                    chars[i].classList.add('correct');
                } else {
                    chars[i].classList.add('incorrect');
                }
            }
        }
        if (inputValue.length < chars.length) {
            chars[inputValue.length].classList.add('current');
        }
        this.totalChars = inputValue.length;
        this.correctChars = 0;
        this.errors = 0;
        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i] === this.currentText[i]) {
                this.correctChars++;
            } else {
                this.errors++;
            }
        }
        const timeElapsed = this.isTestActive ? (Date.now() - this.startTime) / 1000 / 60 : 1;
        const wordsTyped = this.correctChars / 5;
        const wpm = Math.round(wordsTyped / timeElapsed) || 0;
        const accuracy = this.totalChars > 0 ? Math.round((this.correctChars / this.totalChars) * 100) : 100;
        this.wpmDisplay.textContent = wpm;
        this.accuracyDisplay.textContent = accuracy + '%';
        if (inputValue.length >= this.currentText.length) {
            this.endTest();
        }
    }
    endTest() {
        this.isTestActive = false;
        clearInterval(this.timer);
        const timeElapsed = (Date.now() - this.startTime) / 1000 / 60;
        const wordsTyped = this.correctChars / 5;
        const finalWpm = Math.round(wordsTyped / timeElapsed) || 0;
        const finalAccuracy = this.totalChars > 0 ? Math.round((this.correctChars / this.totalChars) * 100) : 100;
        this.finalWpm.textContent = finalWpm;
        this.finalAccuracy.textContent = finalAccuracy + '%';
        this.finalChars.textContent = `${this.correctChars}/${this.totalChars}`;
        this.results.classList.remove('hidden');
        this.userInput.disabled = true;
    }
    resetTest() {
        this.isTestActive = false;
        this.startTime = null;
        this.correctChars = 0;
        this.totalChars = 0;
        this.errors = 0;
        this.timeLeft = this.timeLimit;
        clearInterval(this.timer);
        this.userInput.value = '';
        this.userInput.disabled = false;
        this.wpmDisplay.textContent = '0';
        this.accuracyDisplay.textContent = '100%';
        this.timerDisplay.textContent = this.timeLimit;
        this.results.classList.add('hidden');
        this.displayText();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new TypingTest();
});