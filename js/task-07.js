const inputEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputEl);

function onInputEl() {
  const textFontSize = `${inputEl.value}px`;
  text.style.fontSize = textFontSize;
}
