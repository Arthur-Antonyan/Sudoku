let div = document.querySelectorAll('.board>div');
let btn = document.querySelector('.change');
let check = document.querySelector('.check');
let answers = [];
for (let i = 0; i < div.length; i++) {
  div[i].classList.add(i + 1);
}
let wrapper = document.querySelector('.board');
wrapper.oninput = (event) => {
  const regex = /^\d$/;
  if (!event.target.innerHTML.match(regex)) {
    event.target.style.backgroundColor = 'red';
    check.setAttribute('disabled', 'disabled');
  } else {
    event.target.style.backgroundColor = 'white';
    check.removeAttribute('disabled', 'disabled');
  }
};

function addRandom() {
  let arr = [];
  let arr2 = [];
  for (let i = div.length; i > 0; i--) {
    arr.push(Math.floor(Math.random() * div.length));
  }
  for (let i = 0; i < 3; i++) {
    div[arr[i]].innerHTML = Math.floor(Math.random() * div.length + 1);
  }
  for (let i = 0; i < div.length; i++) {
    if (div[i].innerHTML !== '') {
      div[i].setAttribute('contentEditable', 'false');
    } else div[i].setAttribute('contentEditable', 'true');
  }
  for (let i = 0; i < div.length; i++) {
    if (div[i].innerHTML !== '') {
      arr2.push(div[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (i !== j && parseInt(arr2[i].innerHTML) === parseInt(arr2[j].innerHTML)) {
        arr2[j].innerHTML = Math.floor(Math.random() * div.length + 1);
        break;
      }
    }
  }
}

btn.addEventListener('click', () => {
  for (let i = 0; i < div.length; i++) {
    div[i].innerHTML = '';
  }
});
btn.addEventListener('click', addRandom);

const checkColumnsArr = [];
function checkColumns(matrix) {
  let temp, z;
  for (let i = 0; i < matrix.length; i++) {
    checkColumnsArr.splice(0, z);
    for (let j = 1; j < matrix[i].length; j++) {
      temp = matrix[0][i];
      checkColumnsArr.push(matrix[j][i]);
      z = matrix[j].length - 1;
    }
    const x = new Set(checkColumnsArr);
    let y = temp;
    for (let props of x) {
      if (props === y || x.size != z) {
        answers.push(false);
        break;
      } else continue;
    }
  }
}

const checkRowsArr = [];
function checkRows(matrix) {
  let temp, z;
  for (let i = 0; i < matrix.length; i++) {
    checkRowsArr.splice(0, z);
    for (let j = 1; j < matrix[i].length; j++) {
      temp = matrix[i][0];
      checkRowsArr.push(matrix[i][j]);
      z = matrix[i].length - 1;
    }
    let x = new Set(checkRowsArr);
    let y = temp;
    for (let props of x) {
      if (props === y || x.size != z) {
        answers.push(false);
        break;
      } else continue;
    }
  }
}

let matrix = [];
let arr = [];

function split(arr, len) {
  (i = 0), (n = arr.length);
  while (i < n) {
    matrix.push(arr.slice(i, (i += len)));
  }
  return matrix;
}

check.addEventListener('click', () => {
  for (let i = 0; i <= 8; i++) {
    arr.push(parseInt(div[i].innerHTML));
  }
  split(arr, 3);
});

check.addEventListener('click', () => {
  checkRows(matrix);
});
check.addEventListener('click', () => {
  checkColumns(matrix);
});

btn.addEventListener('click', () => {
  matrix.length = 0;
  arr.length = 0;
  checkColumnsArr.length = 0;
  checkRowsArr.length = 0;
});
let modal = document.querySelector('.modal');

check.addEventListener('click', () => {
  modal.style.visibility = 'visible';
  if (answers[0] != false && answers[1] != false) {
    modal.innerHTML += 'win';
  } else modal.innerHTML += 'fail';
});

let modalBtn = document.querySelector('.modalBtn');
modal.onclick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    modal.style.visibility = 'hidden';
  } else modal.style.visibility = 'visible';
};
