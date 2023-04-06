const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "d"
    },
    {
        question: "Q2: Which programming language is often used for front-end web development?",
        a: "Java",
        b: "Python",
        c: "JavaScript",
        d: "C++",
        ans: "c"
    },
    {
        question: "Q3: What is the symbol used to declare a variable in JavaScript?",
        a: "$",
        b: "&",
        c: "#",
        d: "@",
        ans: "a"
    },
    {
        question: "Q4: What is the default behavior of an event in JavaScript?",
        a: "Prevent",
        b: "Stop",
        c: "Bubble",
        d: "Capture",
        ans: "c"
    },
    {
        question: "Q5: Which method is used to add a new element at the end of an array in JavaScript?",
        a: "pop()",
        b: "push()",
        c: "shift()",
        d: "unshift()",
        ans: "b"
    },
    {
        question: "Q6: What is the correct way to comment in JavaScript?",
        a: "// This is a comment",
        b: "/* This is a comment */",
        c: "<!-- This is a comment -->",
        d: "# This is a comment",
        ans: "a"
    },
    {
        question: "Q7: What is the output of the following code: console.log(typeof null);",
        a: "null",
        b: "undefined",
        c: "object",
        d: "string",
        ans: "c"
    },
    {
        question: "Q8: What is the correct way to include an external JavaScript file in an HTML document?",
        a: "<script src='file.js'></script>",
        b: "<js src='file.js'></js>",
        c: "<javascript src='file.js'></javascript>",
        d: "<script href='file.js'></script>",
        ans: "a"
    },
    {
        question: "Q9: What is the purpose of the 'this' keyword in JavaScript?",
        a: "Refers to the current HTML document",
        b: "Refers to the parent element",
        c: "Refers to the current JavaScript file",
        d: "Refers to the current object",
        ans: "d"
    },
    {
        question: "Q10: What is the correct way to declare a constant variable in JavaScript?",
        a: "var",
        b: "let",
        c: "const",
        d: "const var",
        ans: "c"
    },
    {
        question: "Q11: What is the purpose of the 'localStorage' object in JavaScript?",
        a: "To store data on the server",
        b: "To manipulate the DOM",
        c: "To store data locally on the user's browser",
        d: "To create animations",
        ans: "c"
    },
    {
        question: "Q12: What is the correct syntax to create a new object in JavaScript?",
        a: "newObject = {}",
        b: "new Object = {}",
        c: "new Object()",
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore')
let questioncount = 0;
let score = 0;
//question loading part----
const questionload = () => {
    const questionList = quizDB[questioncount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
questionload();
//checking part---
const getanswer = () => {
    let answer;
    answers.forEach((curAnsEl) => {
        if (curAnsEl.checked) {
            answer = curAnsEl.id;
        }
    });
    return answer;
};
const deselectall = () => {
    answers.forEach((curAnsEl) => curAnsEl.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getanswer();
    console.log(checkedAnswer);
    if (checkedAnswer == quizDB[questioncount].ans) {
        score++;
    };
    questioncount++;
    deselectall();

    if (questioncount < quizDB.length) {
        questionload();
    }
    else {
        showscore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length}🫰</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        showscore.classList.remove('scorearea');
    }
});
