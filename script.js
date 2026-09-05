/* ==================================================
   JOJO BIZARRE QUIZ
   Sistema principal
================================================== */


/* ==================================================
   BANCO DE PERGUNTAS
================================================== */

const questions = [

    {
        category: "PART 1 — PHANTOM BLOOD",

        question:
            "Qual é o nome do protagonista da Parte 1?",

        answers: [
            "Jonathan Joestar",
            "Joseph Joestar",
            "Jotaro Kujo",
            "Josuke Higashikata"
        ],

        correct: 0
    },

    {
        category: "PART 2 — BATTLE TENDENCY",

        question:
            "Qual é a principal técnica utilizada pelos usuários de Hamon?",

        answers: [
            "Energia através da respiração",
            "Manipulação de sombras",
            "Controle de metais",
            "Teletransporte"
        ],

        correct: 0
    },

    {
        category: "PART 3 — STARDUST CRUSADERS",

        question:
            "Qual é o Stand de Jotaro Kujo?",

        answers: [
            "Crazy Diamond",
            "Star Platinum",
            "The World",
            "King Crimson"
        ],

        correct: 1
    },

    {
        category: "PART 3 — STARDUST CRUSADERS",

        question:
            "Qual é o principal antagonista de Stardust Crusaders?",

        answers: [
            "DIO",
            "Kars",
            "Diavolo",
            "Kira"
        ],

        correct: 0
    },

    {
        category: "PART 4 — DIAMOND IS UNBREAKABLE",

        question:
            "Qual é o Stand de Josuke Higashikata?",

        answers: [
            "Gold Experience",
            "Crazy Diamond",
            "Stone Free",
            "Soft & Wet"
        ],

        correct: 1
    },

    {
        category: "PART 4 — DIAMOND IS UNBREAKABLE",

        question:
            "Qual é o nome do principal antagonista de Diamond is Unbreakable?",

        answers: [
            "Yoshikage Kira",
            "Funny Valentine",
            "Enrico Pucci",
            "Tooru"
        ],

        correct: 0
    },

    {
        category: "PART 5 — GOLDEN WIND",

        question:
            "Qual é o Stand de Giorno Giovanna?",

        answers: [
            "Gold Experience",
            "Silver Chariot",
            "Purple Haze",
            "Sticky Fingers"
        ],

        correct: 0
    },

    {
        category: "PART 5 — GOLDEN WIND",

        question:
            "Qual é o nome do líder da Passione?",

        answers: [
            "Diavolo",
            "Bruno Bucciarati",
            "Giorno Giovanna",
            "Risotto Nero"
        ],

        correct: 0
    },

    {
        category: "PART 6 — STONE OCEAN",

        question:
            "Quem é a protagonista de Stone Ocean?",

        answers: [
            "Jolyne Cujoh",
            "Trish Una",
            "Ermes Costello",
            "Lisa Lisa"
        ],

        correct: 0
    },

    {
        category: "PART 6 — STONE OCEAN",

        question:
            "Qual é o Stand de Jolyne Cujoh?",

        answers: [
            "Stone Free",
            "Weather Report",
            "Kiss",
            "Diver Down"
        ],

        correct: 0
    },

    {
        category: "PART 7 — STEEL BALL RUN",

        question:
            "Quem é o protagonista de Steel Ball Run?",

        answers: [
            "Johnny Joestar",
            "Gyro Zeppeli",
            "Diego Brando",
            "Valentine"
        ],

        correct: 0
    },

    {
        category: "PART 7 — STEEL BALL RUN",

        question:
            "Qual técnica está associada às Steel Balls de Gyro?",

        answers: [
            "Spin",
            "Hamon",
            "Ripple",
            "Heaven"
        ],

        correct: 0
    },

    {
        category: "PART 8 — JOJOLION",

        question:
            "Qual é o protagonista de JoJolion?",

        answers: [
            "Josuke Higashikata",
            "Josuke Joestar",
            "Jobin Higashikata",
            "Johnny Joestar"
        ],

        correct: 0
    },

    {
        category: "PART 8 — JOJOLION",

        question:
            "Em qual cidade JoJolion se passa principalmente?",

        answers: [
            "Morioh",
            "Roma",
            "Tóquio",
            "Nova York"
        ],

        correct: 0
    },

    {
        category: "STANDS",

        question:
            "O que normalmente representa um Stand?",

        answers: [
            "Manifestação da energia espiritual de uma pessoa",
            "Uma arma tecnológica",
            "Uma criatura alienígena",
            "Uma técnica exclusivamente física"
        ],

        correct: 0
    },

    {
        category: "STANDS",

        question:
            "Qual destes Stands pertence a Bruno Bucciarati?",

        answers: [
            "Sticky Fingers",
            "Moody Blues",
            "Aerosmith",
            "Sex Pistols"
        ],

        correct: 0
    },

    {
        category: "HARD MODE",

        question:
            "Qual é o nome do Stand de Polnareff?",

        answers: [
            "Silver Chariot",
            "Magician's Red",
            "Hierophant Green",
            "The Fool"
        ],

        correct: 0
    },

    {
        category: "HARD MODE",

        question:
            "Quem utiliza o Stand Killer Queen?",

        answers: [
            "Yoshikage Kira",
            "Diavolo",
            "DIO",
            "Kars"
        ],

        correct: 0
    },

    {
        category: "HARD MODE",

        question:
            "Qual Stand possui a habilidade associada ao tempo conhecida como King Crimson?",

        answers: [
            "Diavolo",
            "Doppio",
            "Giorno",
            "Fugo"
        ],

        correct: 0
    },

    {
        category: "HARD MODE",

        question:
            "Qual é o nome do Stand de Koichi Hirose?",

        answers: [
            "Echoes",
            "Heaven's Door",
            "The Hand",
            "Harvest"
        ],

        correct: 0
    }

];


/* ==================================================
   VARIÁVEIS
================================================== */

let currentQuestion = 0;

let score = 0;

let correctCount = 0;

let wrongCount = 0;

let timer = 15;

let timerInterval;

let difficulty = "normal";

let gameQuestions = [];


/* ==================================================
   ELEMENTOS HTML
================================================== */

const startScreen =
    document.getElementById("startScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restartButton");

const answersContainer =
    document.getElementById("answers");

const questionElement =
    document.getElementById("question");

const categoryElement =
    document.getElementById("category");

const scoreElement =
    document.getElementById("score");

const timerElement =
    document.getElementById("timer");

const questionNumber =
    document.getElementById("questionNumber");

const totalQuestions =
    document.getElementById("totalQuestions");

const progressFill =
    document.getElementById("progressFill");

const message =
    document.getElementById("message");


/* ==================================================
   ESCOLHER DIFICULDADE
================================================== */

document
    .querySelectorAll(".difficulty-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".difficulty-btn")
                .forEach(btn =>
                    btn.classList.remove("selected")
                );

            button.classList.add("selected");

            difficulty =
                button.dataset.level;

        });

    });


/* ==================================================
   INICIAR JOGO
================================================== */

startButton.addEventListener("click", startGame);

restartButton.addEventListener("click", startGame);


function startGame() {

    currentQuestion = 0;

    score = 0;

    correctCount = 0;

    wrongCount = 0;

    scoreElement.textContent = "000000";

    /*
        Seleciona quantidade de perguntas
        dependendo da dificuldade.
    */

    let amount;

    if (difficulty === "normal") {

        amount = 10;

    } else if (difficulty === "hard") {

        amount = 15;

    } else {

        amount = 20;

    }


    /*
        Embaralha o banco de perguntas
    */

    gameQuestions =
        shuffle([...questions])
        .slice(0, amount);


    totalQuestions.textContent =
        String(gameQuestions.length).padStart(2, "0");


    startScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    quizScreen.classList.add("active");


    loadQuestion();

}


/* ==================================================
   CARREGAR PERGUNTA
================================================== */

function loadQuestion() {

    clearInterval(timerInterval);

    timer = 15;

    timerElement.textContent = timer;

    message.textContent = "";

    const current =
        gameQuestions[currentQuestion];


    questionElement.textContent =
        current.question;

    categoryElement.textContent =
        current.category;


    questionNumber.textContent =
        String(currentQuestion + 1)
        .padStart(2, "0");


    const progress =
        ((currentQuestion) /
        gameQuestions.length) * 100;


    progressFill.style.width =
        progress + "%";


    answersContainer.innerHTML = "";


    /*
        Cria uma cópia das respostas
        para poder embaralhar.
    */

    const answerObjects =
        current.answers.map((answer, index) => ({
            text: answer,
            originalIndex: index
        }));


    shuffle(answerObjects)
        .forEach(answer => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.textContent =
                answer.text;

            button.dataset.index =
                answer.originalIndex;

            button.addEventListener(
                "click",
                () => selectAnswer(button)
            );

            answersContainer.appendChild(button);

        });


    startTimer();

}


/* ==================================================
   CRONÔMETRO
================================================== */

function startTimer() {

    timerInterval =
        setInterval(() => {

            timer--;

            timerElement.textContent =
                timer;


            if (timer <= 5) {

                timerElement.style.color =
                    "#ff3158";

            } else {

                timerElement.style.color =
                    "";

            }


            if (timer <= 0) {

                clearInterval(timerInterval);

                timeOut();

            }

        }, 1000);

}


/* ==================================================
   TEMPO ESGOTADO
================================================== */

function timeOut() {

    wrongCount++;

    message.textContent =
        "TIME OVER!";

    message.style.color =
        "#ff3158";


    showCorrectAnswer();


    setTimeout(nextQuestion, 1300);

}


/* ==================================================
   SELECIONAR RESPOSTA
================================================== */

function selectAnswer(button) {

    clearInterval(timerInterval);

    const current =
        gameQuestions[currentQuestion];


    const selected =
        Number(button.dataset.index);


    /*
        Desativa todas as alternativas
    */

    document
        .querySelectorAll(".answer")
        .forEach(btn =>
            btn.classList.add("disabled")
        );


    if (selected === current.correct) {

        button.classList.add("correct");

        correctCount++;


        /*
            Pontuação baseada
            no tempo restante.
        */

        let points = 100;

        points += timer * 10;


        if (difficulty === "hard") {

            points *= 2;

        }

        if (difficulty === "insane") {

            points *= 3;

        }


        score += points;


        scoreElement.textContent =
            String(score).padStart(6, "0");


        message.textContent =
            `CORRETO! +${points}`;

        message.style.color =
            "#00ff77";


    } else {

        button.classList.add("wrong");

        wrongCount++;

        message.textContent =
            "ERRADO!";

        message.style.color =
            "#ff3158";


        showCorrectAnswer();

    }


    setTimeout(nextQuestion, 1300);

}


/* ==================================================
   MOSTRAR RESPOSTA CORRETA
================================================== */

function showCorrectAnswer() {

    const current =
        gameQuestions[currentQuestion];


    document
        .querySelectorAll(".answer")
        .forEach(button => {

            if (
                Number(button.dataset.index)
                === current.correct
            ) {

                button.classList.add("correct");

            }

        });

}


/* ==================================================
   PRÓXIMA PERGUNTA
================================================== */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        gameQuestions.length
    ) {

        finishGame();

    } else {

        loadQuestion();

    }

}


/* ==================================================
   FINALIZAR
================================================== */

function finishGame() {

    clearInterval(timerInterval);

    progressFill.style.width = "100%";

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");


    document.getElementById(
        "correctAnswers"
    ).textContent = correctCount;


    document.getElementById(
        "wrongAnswers"
    ).textContent = wrongCount;


    document.getElementById(
        "finalScore"
    ).textContent = score;


    const percentage =
        (correctCount /
        gameQuestions.length) * 100;


    let rank;

    let resultText;


    if (percentage >= 90) {

        rank = "S";

        resultText =
            "VOCÊ É UM VERDADEIRO JOJOPHILE!";

    } else if (percentage >= 75) {

        rank = "A";

        resultText =
            "Excelente conhecimento do universo JoJo!";

    } else if (percentage >= 60) {

        rank = "B";

        resultText =
            "Você conhece bastante a obra!";

    } else if (percentage >= 40) {

        rank = "C";

        resultText =
            "Ainda precisa treinar seus conhecimentos.";

    } else {

        rank = "D";

        resultText =
            "Hora de voltar para Morioh e estudar!";

    }


    document.getElementById(
        "rankLetter"
    ).textContent = rank;


    document.getElementById(
        "resultMessage"
    ).textContent = resultText;

}


/* ==================================================
   EMBARALHAR ARRAY
================================================== */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

    return array;

}


/* ==================================================
   TECLADO
================================================== */

document.addEventListener(
    "keydown",
    event => {

        /*
            Teclas 1, 2, 3 e 4
            selecionam respostas.
        */

        if (
            quizScreen.classList.contains("active")
        ) {

            const key =
                Number(event.key);


            if (
                key >= 1 &&
                key <= 4
            ) {

                const buttons =
                    document.querySelectorAll(
                        ".answer"
                    );


                if (buttons[key - 1]) {

                    buttons[key - 1].click();

                }

            }

        }

    }
);