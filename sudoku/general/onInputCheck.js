let wrapper = document.querySelector('.board');
let check = document.querySelector('.check');
let hard = document.querySelector('.hard');
let checkHard = document.querySelector('.addRandom');
function checkNum(event) {
  const onlyNumbers = /^[1-9]$/;

  if (!event.target.innerHTML.match(onlyNumbers) && event.target.innerHTML != '') {
    event.target.style.backgroundColor = 'red';
    checkHard.setAttribute('disabled', 'disabled');
    check.setAttribute('disabled', 'disabled');
  } else {
    event.target.style.backgroundColor = 'white';
    checkHard.removeAttribute('disabled', 'disabled');
    check.removeAttribute('disabled', 'disabled');
  }
}

hard.addEventListener('input', checkNum);
wrapper.addEventListener('input', checkNum);
