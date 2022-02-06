let wrapper = document.querySelector('.board');
let check = document.querySelector('.check');
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
let hard = document.querySelector('.hard');
hard.oninput = (event) => {
  const regex = /^\d$/;

  if (!event.target.innerHTML.match(regex)) {
    event.target.style.backgroundColor = 'red';
    check.setAttribute('disabled', 'disabled');
  } else {
    event.target.style.backgroundColor = 'white';
    check.removeAttribute('disabled', 'disabled');
  }
};
