import { answers, check } from '../easy/script.js';
import { answersFilled } from '../hard/checkFunctionsFilled.js';
import { randomBtn } from '../hard/hard.js';
import { reset } from './stopwatch.js';

let modal = document.querySelector('.modal');
let span = document.querySelector('.modal>span');
let scoreNames = document.querySelectorAll('.name>li');
let scoreSecs = document.querySelectorAll('.score>li');
let scoreNamesHard = document.querySelectorAll('.nameHard>li');
let scoreSecsHard = document.querySelectorAll('.scoreHard>li');
let res = [];
let resHard = [];
let name = document.querySelector('#name');
let modalOk = document.querySelector('.modalBtn');
let checkbox = document.querySelector('.easyHard');
const timeFormatReg = /\d\d\:\d\d\:\d\d/;

const modalEasy = () => {
  modal.style.visibility = 'visible';
  if (!answers.includes(false)) {
    span.innerHTML = 'win  Your score is ' + document.getElementById('display').innerHTML;
  } else span.innerHTML = 'fail Your score is ' + document.getElementById('display').innerHTML;
};
check.addEventListener('click', modalEasy);

const modalHard = () => {
  modal.style.visibility = 'visible';
  if (!answersFilled.includes(false)) {
    span.innerHTML = 'win  Your score is ' + document.getElementById('display').innerHTML;
  } else span.innerHTML = 'fail your score is ' + document.getElementById('display').innerHTML;
};
randomBtn.addEventListener('click', modalHard);

modalOk.addEventListener('click', reset);
const createLocalStorage = () => {
  let arr4 = span.innerHTML
    .match(timeFormatReg)
    .toString()
    .split(':')
    .map((item) => parseInt(item));

  arr4[0] *= 6000;
  arr4[1] *= 100;
  if (!answers.includes(false) && checkbox.checked) {
    res = localStorage.getItem('value');
    res = res ? JSON.parse(res) : [];
    res.push([name.value, span.innerHTML, arr4.reduce((acc, item) => acc + item)]);
    res.sort((a, b) => a[2] - b[2]);
    localStorage.setItem('value', JSON.stringify(res));
  }
  if (!answersFilled.includes(false) && checkbox.checked == false) {
    resHard = localStorage.getItem('valueHard');
    resHard = resHard ? JSON.parse(resHard) : [];
    resHard.push([name.value, span.innerHTML, arr4.reduce((acc, item) => acc + item)]);
    resHard.sort((a, b) => a[2] - b[2]);
    localStorage.setItem('valueHard', JSON.stringify(resHard));
  }
};
modalOk.addEventListener('click', createLocalStorage);

let storageArrEasy = JSON.parse(localStorage.getItem('value'));
let storageArrHard = JSON.parse(localStorage.getItem('valueHard'));

modal.onclick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    modal.style.visibility = 'hidden';
  } else modal.style.visibility = 'visible';
};

function changeTable() {
  if (checkbox.checked) {
    for (let i = 0; i < JSON.parse(localStorage.getItem('value')).length; i++) {
      scoreNames[i].innerHTML = JSON.parse(localStorage.getItem('value'))[i][0];
      scoreSecs[i].innerHTML = JSON.parse(localStorage.getItem('value'))[i][1].match(timeFormatReg).toString();
    }
  }
  if (checkbox.checked == false) {
    for (let i = 0; i < JSON.parse(localStorage.getItem('valueHard')).length; i++) {
      scoreNamesHard[i].innerHTML = JSON.parse(localStorage.getItem('valueHard'))[i][0];
      scoreSecsHard[i].innerHTML = JSON.parse(localStorage.getItem('valueHard'))[i][1].match(timeFormatReg).toString();
    }
  }
}
modalOk.addEventListener('click', changeTable);

function renderStorageState() {
  if (localStorage.length != 0) {
    for (let i = 0; i < storageArrEasy.length; i++) {
      scoreNames[i].innerHTML = storageArrEasy[i][0];
      scoreSecs[i].innerHTML = storageArrEasy[i][1].match(timeFormatReg).toString();
    }
    for (let i = 0; i < storageArrHard.length; i++) {
      scoreNamesHard[i].innerHTML = storageArrHard[i][0];
      scoreSecsHard[i].innerHTML = storageArrHard[i][1].match(timeFormatReg).toString();
    }
  }
}
renderStorageState();
