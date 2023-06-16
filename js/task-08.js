const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();

  const emailEl = formEl.elements.email;
  const passwordEl = formEl.elements.password;
  if (emailEl.value === '' || passwordEl.value === '') {
    alert('Заповніть всі поля форми');
    return;
  }
  const formData = {
    email: emailEl.value,
    password: passwordEl.value,
  };

  console.log(formData);

  formEl.reset();
}
