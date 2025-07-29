class TypingTest {
    constructor() {
        this.testTexts = {
            beginner: [
                "The cat sat on the mat. It was a sunny day and the birds were singing in the trees.",
                "I like to eat pizza with cheese. My favorite drink is water and I enjoy reading books.",
                "The dog runs in the park every morning. Children play games and have fun together.",
                "We go to school to learn new things. Teachers help us grow and become smarter each day.",
                "The sun shines bright in the blue sky. Flowers bloom and bees collect sweet honey.",
                "Fish swim in the clear water. The ocean is deep and full of amazing sea creatures.",
                "My friend lives next door to me. We play games and share our toys with each other.",
                "The train moves fast on the tracks. People travel to work and visit family members.",
                "Birds can fly high in the air. They build nests and take care of their baby birds.",
                "The moon comes out at night. Stars twinkle and light up the dark peaceful sky.",
                "I brush my teeth every morning. Good habits help us stay healthy and feel great.",
                "The farmer grows corn in the field. Vegetables and fruits give us energy and vitamins.",
                "Snow falls gently in the winter. Children build snowmen and go sledding down hills.",
                "The library has many good books. Reading helps us learn about the world around us.",
                "My family loves to cook dinner. We eat together and talk about our busy day."
            ],
            intermediate: [
                "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once, making it useful for testing typewriters and fonts.",
                "Technology has revolutionized the way we communicate with each other. Social media platforms connect people across vast distances, breaking down geographical barriers.",
                "Climate change represents one of the most significant challenges facing humanity today. Rising temperatures and extreme weather patterns affect ecosystems worldwide.",
                "The human brain contains approximately eighty-six billion neurons, each forming thousands of connections with other cells throughout the complex neural network.",
                "Artificial intelligence continues to advance rapidly, with machine learning algorithms becoming increasingly sophisticated in their ability to process and analyze data.",
                "Space exploration has captured human imagination for centuries. Recent missions to Mars have provided valuable insights into the possibility of life beyond Earth.",
                "The Renaissance period marked a time of great cultural and artistic achievement. Artists like Leonardo da Vinci created masterpieces that still inspire people today.",
                "Biodiversity in rainforests plays a crucial role in maintaining global ecological balance. These ecosystems support countless species and regulate climate patterns.",
                "Quantum physics challenges our understanding of reality at the smallest scales. Particles can exist in multiple states simultaneously until observed or measured.",
                "The history of civilizations reveals patterns of rise and decline influenced by factors such as technology, environment, economics, and social structures.",
                "Renewable energy sources offer promising solutions to reduce dependence on fossil fuels. Solar and wind power technologies continue to improve in efficiency.",
                "Literature serves as a mirror reflecting society's values, concerns, and aspirations throughout different historical periods and cultural contexts.",
                "The development of written language transformed human civilization by enabling the preservation and transmission of knowledge across generations.",
                "Philosophy examines fundamental questions about existence, knowledge, morality, and the nature of reality through rational inquiry and logical reasoning.",
                "Globalization has created unprecedented interconnectedness between nations, affecting economics, culture, politics, and environmental issues on a worldwide scale."
            ],
            advanced: [
                "The epistemological implications of postmodern philosophy challenge traditional notions of objective truth, suggesting that knowledge is inherently subjective and contextually dependent upon cultural paradigms.",
                "Quantum entanglement demonstrates that particles can exhibit instantaneous correlations regardless of spatial separation, a phenomenon Einstein famously criticized as 'spooky action at a distance.'",
                "The socioeconomic ramifications of technological unemployment necessitate comprehensive policy frameworks addressing universal basic income, retraining programs, and wealth redistribution mechanisms.",
                "Neuroplasticity research reveals the brain's remarkable capacity for structural and functional reorganization throughout life, contradicting previous assumptions about fixed neural architecture in adulthood.",
                "The anthropocene epoch signifies humanity's unprecedented geological impact, characterized by accelerated biodiversity loss, atmospheric composition changes, and irreversible ecosystem modifications.",
                "Cryptocurrency's decentralized architecture challenges traditional monetary systems by eliminating intermediary institutions and enabling peer-to-peer transactions through cryptographic protocols and blockchain technology.",
                "Phenomenological investigations into consciousness explore the subjective experience of being, examining how perception, intentionality, and temporality constitute the fundamental structures of human existence.",
                "The mathematical elegance of chaos theory demonstrates how deterministic systems can exhibit unpredictable behavior, revealing complex patterns emerging from simple nonlinear dynamic equations.",
                "Bioethical considerations surrounding genetic engineering encompass questions of human enhancement, therapeutic intervention, consent, equity, and the fundamental nature of human identity.",
                "Postcolonial literary criticism examines how imperial discourse shaped cultural representations, analyzing the intersection of power, language, identity, and resistance in formerly colonized societies.",
                "The thermodynamic principle of entropy suggests that isolated systems tend toward maximum disorder, raising profound questions about the arrow of time and the universe's ultimate fate.",
                "Metacognitive awareness involves thinking about thinking itself, encompassing knowledge of one's cognitive processes, strategies for learning, and the ability to monitor mental performance.",
                "The philosophical problem of free will versus determinism questions whether human actions result from conscious choice or are predetermined by antecedent causes and natural laws.",
                "Linguistic relativity hypothesis proposes that language structure influences thought patterns and worldview, suggesting that speakers of different languages conceptualize reality in fundamentally distinct ways.",
                "The hermeneutic circle describes the iterative process of understanding whereby interpretation of parts depends upon comprehension of the whole, while understanding the whole requires interpreting its constituent elements."
            ],
            code: [
                "function calculateSum(array) { return array.reduce((sum, num) => sum + num, 0); }",
                "const userData = { name: 'John', age: 30, email: 'john@example.com' }; console.log(userData.name);",
                "if (condition === true) { executeFunction(); } else { handleError('Invalid condition'); }",
                "for (let i = 0; i < items.length; i++) { processItem(items[i]); }",
                "class Rectangle { constructor(width, height) { this.width = width; this.height = height; } }",
                "const apiResponse = await fetch('/api/users').then(response => response.json());",
                "try { const data = JSON.parse(jsonString); } catch (error) { console.error('Parse error:', error); }",
                "const filteredArray = numbers.filter(num => num > 10).map(num => num * 2);",
                "import React, { useState, useEffect } from 'react'; export default function Component() {}",
                "SELECT users.name, orders.total FROM users INNER JOIN orders ON users.id = orders.user_id;",
                "def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)",
                "public class Main { public static void main(String[] args) { System.out.println('Hello World'); } }",
                "const express = require('express'); const app = express(); app.listen(3000);",
                "git add . && git commit -m 'Fix: resolve merge conflicts' && git push origin main",
                "docker run -d -p 8080:80 --name webserver nginx:latest",
                "npm install --save-dev webpack babel-loader @babel/core @babel/preset-env",
                "<?php $connection = new PDO('mysql:host=localhost;dbname=test', $user, $pass); ?>",
                "terraform init && terraform plan && terraform apply --auto-approve",
                "kubectl create deployment app --image=nginx && kubectl expose deployment app --port=80",
                "ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;"
            ]
        };
        this.currentDifficulty = 'beginner';
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
        this.difficultyButtons = document.querySelectorAll('.difficulty-btn');
        this.userInput.addEventListener('input', e => this.handleInput(e));
        document.addEventListener('keydown', e => this.focusInput(e));
        this.restartBtn.addEventListener('click', () => this.resetTest());
        if (this.tryAgainBtn) this.tryAgainBtn.addEventListener('click', () => this.resetTest());
        this.timeButtons.forEach(btn => {
            btn.addEventListener('click', e => this.setTimeLimit(e));
        });
        this.difficultyButtons.forEach(btn => {
            btn.addEventListener('click', e => this.setDifficulty(e));
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
    setDifficulty(e) {
        this.difficultyButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.currentDifficulty = e.target.dataset.difficulty;
        this.resetTest();
    }
    generateText() {
        const textsForDifficulty = this.testTexts[this.currentDifficulty];
        const randomIndex = Math.floor(Math.random() * textsForDifficulty.length);
        return textsForDifficulty[randomIndex];
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