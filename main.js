const quizData = [
  {
    question: 'How old is kakashi from naruto?',
    a: '10',
    b: '17',
    c: '29',
    d: '100',
    correct: 'c',
  },
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'a',
  },
  {
    question: 'Who is the President of US?',
    a: 'Florin Pop',
    b: 'Thomas Alva Edison',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jasn Object Notation',
    d: 'Application Programming Interface',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '2020',
    b: '2019',
    c: '2018',
    d: 'none of the above',
    correct: 'd',
  },
];

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  currentQuiz++;
}

loadQuiz();

submitBtn.addEventListener('click', () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    // TODO: Show results
    alert('You finished!');
  }
});
