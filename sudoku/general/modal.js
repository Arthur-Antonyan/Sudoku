import { answers, check } from '../easy/script.js';
import { reset } from './stopwatch.js';
let modal = document.querySelector('.modal');
let span = document.querySelector('.modal>span');
let scoreNames = document.querySelectorAll('.name>li');
let scoreSecs = document.querySelectorAll('.score>li');
let res = [];
let name = document.querySelector('#name');
let modalOk = document.querySelector('.modalBtn');
const reg = /\d\d\:\d\d\:\d\d/;

check.addEventListener('click', () => {
  modal.style.visibility = 'visible';

  if (!answers.includes(false)) {
    span.innerHTML = 'win  Your score is ' + document.getElementById('display').innerHTML;
  } else span.innerHTML = 'fail your score is ' + document.getElementById('display').innerHTML;
});

modalOk.addEventListener('click', reset);
modalOk.addEventListener('click', () => {
  if (!answers.includes(false)) {
    let arr4 = span.innerHTML
      .match(reg)
      .toString()
      .split(':')
      .map((item) => parseInt(item));

    arr4[0] *= 6000;
    arr4[1] *= 100;
    res.push([name.value, span.innerHTML, arr4.reduce((acc, item) => acc + item)]);
    let arg2 = res.sort((a, b) => a[2] - b[2]);
    for (let i = 0; i < scoreNames.length; i++) {
      scoreNames[i].innerHTML = arg2[i][0];
      scoreSecs[i].innerHTML = arg2[i][1].match(reg).toString();
    }
  }
});

modal.onclick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    modal.style.visibility = 'hidden';
  } else modal.style.visibility = 'visible';
};
