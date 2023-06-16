const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const dataLength = inputEl.dataset.length;
  const inputValue = inputEl.value;

  if (inputValue.length === Number(dataLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
