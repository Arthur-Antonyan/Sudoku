let div = document.querySelectorAll('.board>div');
export function addRandom() {
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
