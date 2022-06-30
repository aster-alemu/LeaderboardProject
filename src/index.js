import './style.css';

const scores = [
  {
    name: 'Name',
    score: 100,

  },
  {
    name: 'Name',
    score: 20,

  },
  {
    name: 'Name',
    score: 50,

  },
  {
    name: 'Name',
    score: 78,

  },
  {
    name: 'Name',
    score: 125,

  },
  {
    name: 'Name',
    score: 77,

  },
  {
    name: 'Name',
    score: 42,

  },
];
let scoreData = '';
scores.forEach((score) => {
  scoreData += `
     <li class="score-values">${score.name} : ${score.score}</li>
  `;
});
const scoresEl = document.querySelector('.scores');

scoresEl.innerHTML = scoreData;