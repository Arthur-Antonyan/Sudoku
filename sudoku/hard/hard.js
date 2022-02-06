import { start, pause, reset } from '../general/stopwatch.js';
import { addRandom } from './addRandomHard.js';
import { answers, checkColumnsArr, checkGrid, checkRowsArr } from './checkDublicatesBefore.js';
import { answersFilled, checkGridFilled } from './checkFunctionsFilled.js';
// import { start, pause } from './stopwatch.js';

let checkBtn = document.querySelector('.checkHard');
export let randomBtn = document.querySelector('.addRandom');

///creating 9 divs
let hard = document.querySelector('.hard');
for (let i = 0; i < 9; i++) {
  let div1 = document.createElement('div');
  div1.classList.add('grid');
  hard.appendChild(div1);
}
// creating 81 divs
let inner = document.querySelectorAll('.hard>div');
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let div2 = document.createElement('div');
    inner[j].appendChild(div2);
  }
}

//filling grid with  random numbers
let grid = document.querySelectorAll('.grid');
function random() {
  arr.length = 0;
  matrix.length = 0;
  checkRowsArr.length = 0;
  newmatrix.length = 0;
  newarr.length = 0;
  answers.length = 0;

  checkColumnsArr.length = 0;

  for (let i = 0; i < grid.length; i++) {
    addRandom(grid[i].children);
  }
}

//   //emptying grid cells
checkBtn.addEventListener('click', () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      grid[i].children[j].innerHTML = '';
    }
  }
});
////////calling random
checkBtn.addEventListener('click', random);

export let matrix = [];
let arr = [];
// filing array  with gird numbers
function fillArray(arr) {
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      arr.push(parseInt(grid[i].children[j].innerHTML));
    }
  }
  return arr;
}

checkBtn.addEventListener('click', () => {
  fillArray(arr);
});

////filing matrix  with gird numbers from array

function split(arr, len) {
  let i, n;

  (i = 0), (n = arr.length);
  while (i < n) {
    matrix.push(arr.slice(i, (i += len)));
  }
  return matrix;
}

checkBtn.addEventListener('click', () => {
  split(arr, 3);
});

////creating new matrix from random elements of game desk
let newmatrix = [];
let newarr = [];
function createMatrix() {
  for (let i = 0; i < matrix.length; i++) {
    newarr = matrix[i].concat(matrix[i + 3], matrix[i + 6]);
    newmatrix.push(newarr);
  }
  let newmatrix2 = [];
  newmatrix2.push(
    newmatrix[0],
    newmatrix[1],
    newmatrix[2],
    newmatrix[9],
    newmatrix[10],
    newmatrix[11],
    newmatrix[18],
    newmatrix[19],
    newmatrix[20]
  );
  return newmatrix2;
}

checkBtn.addEventListener('click', () => {
  checkGrid(createMatrix());
});

window.onmousemove = function () {
  while (answers[0] == false) {
    checkBtn.click();
  }
};

function zero() {
  arr.length = 0;
  matrix.length = 0;
  answers.length = 0;
  newmatrix.length = 0;
  newarr.length = 0;
}
randomBtn.addEventListener('click', () => {
  zero();
});

randomBtn.addEventListener('click', () => {
  fillArray(arr);
});
randomBtn.addEventListener('click', () => {
  split(arr, 3);
});

randomBtn.addEventListener('click', () => {
  console.log(createMatrix());
});
randomBtn.addEventListener('click', () => {
  checkGridFilled(createMatrix());
});
checkBtn.addEventListener('click', reset);
checkBtn.addEventListener('click', start);
randomBtn.addEventListener('click', pause);
