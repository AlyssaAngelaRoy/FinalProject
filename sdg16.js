const quizData = [
    { question: "What is the main goal of SDG 16?", 
      options: ["Ensure peace, justice, and strong institutions", "Reduce poverty", "Promote clean energy", "Improve global trade"], 
      answer: 0 
    },
    { question: "Which of the following is a key target of SDG 16?", 
      options: ["End all war and violence", "Reduce corruption and bribery", "Provide free education worldwide", "Achieve gender equality"], 
      answer: 1 
    },
    { question: "What does SDG 16 aim to promote?", 
      options: ["Strong institutions", "Economic growth", "Urban development", "Technological innovation"], 
      answer: 0 
    },
    { question: "Which organization monitors global progress on SDG 16?", 
      options: ["UNICEF", "World Bank", "United Nations", "IMF"], 
      answer: 2 
    },
    { question: "What is a major challenge in achieving SDG 16?", 
      options: ["Lack of clean water", "Weak legal systems and corruption", "Insufficient natural resources", "Limited technological advancements"], 
      answer: 1 
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    
    questionElement.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";

    quizData[currentQuestion].options.forEach((opt, index) => {
        let button = document.createElement("button");
        button.textContent = opt;
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    let correctIndex = quizData[currentQuestion].answer;

    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitQuiz() {
    document.getElementById("result").textContent = `Your score: ${score}/${quizData.length}`;
}


document.addEventListener("DOMContentLoaded", loadQuestion);




