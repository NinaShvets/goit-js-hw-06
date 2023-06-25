const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const dataLength = inputEl.dataset.length;
  const inputValue = inputEl.value;

  if (inputValue.length === Number(dataLength)) {
    setInputClass('valid', 'invalid');
  } else {
    setInputClass('invalid', 'valid');
  }
}

function setInputClass(classAdd, classRemove) {
  inputEl.classList.add(classAdd);
  inputEl.classList.remove(classRemove);
}
