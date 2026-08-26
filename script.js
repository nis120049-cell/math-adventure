let level = 1;
let questionNumber = 1;
let score = 0;
let lives = 3;

let correctAnswer;

const totalQuestions =
    level <= 100 ? 100 : 150;


function generateQuestion() {

    const max =
        Math.min(10 + level * 2, 1000);

    const a =
        Math.floor(Math.random() * max) + 1;

    const b =
        Math.floor(Math.random() * max) + 1;

    correctAnswer = a + b;

    document.getElementById("question")
        .textContent = `${a} + ${b} = ?`;

    createAnswers();
}


function createAnswers() {

    const container =
        document.getElementById("answers");

    container.innerHTML = "";

    let answers = [
        correctAnswer,
        correctAnswer + 1,
        correctAnswer - 1,
        correctAnswer + 5
    ];

    answers.sort(() => Math.random() - 0.5);

    answers.forEach(answer => {

        const button =
            document.createElement("button");

        button.textContent = answer;

        button.onclick = () => {
            checkAnswer(answer);
        };

        container.appendChild(button);
    });
}


function checkAnswer(answer) {

    const message =
        document.getElementById("message");

    if (answer === correctAnswer) {

        score += 10;

        message.textContent =
            "✅ Benar!";

    } else {

        lives--;

        message.textContent =
            "❌ Salah!";
    }

    updateUI();

    if (lives <= 0) {

        message.textContent =
            "💀 Game Over";

        document.getElementById("answers")
            .innerHTML = "";

        return;
    }

    questionNumber++;

    const total =
        level <= 100 ? 100 : 150;

    if (questionNumber > total) {

        level++;

        questionNumber = 1;

        if (level > 200) {

            message.textContent =
                "🏆 Semua level selesai!";

            document.getElementById("answers")
                .innerHTML = "";

            return;
        }

        message.textContent =
            `🎉 Level ${level - 1} selesai!`;
    }

    setTimeout(() => {
        generateQuestion();
        updateUI();
    }, 600);
}


function updateUI() {

    document.getElementById("level")
        .textContent = level;

    document.getElementById("questionNumber")
        .textContent = questionNumber;

    document.getElementById("score")
        .textContent = score;

    document.getElementById("lives")
        .textContent = lives;

    document.getElementById("totalQuestions")
        .textContent =
            level <= 100 ? 100 : 150;
}


generateQuestion();
updateUI();
