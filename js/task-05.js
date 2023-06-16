const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');
function updateNameOutputEl() {
  if (nameInputEl.value.trim() === '') {
    nameOutputEl.textContent = 'Anonymous';
  } else {
    nameOutputEl.textContent = nameInputEl.value;
  }
}
nameInputEl.addEventListener('input', updateNameOutputEl);
