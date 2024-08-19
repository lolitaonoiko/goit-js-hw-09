const formData = {
  email: '',
  message: '',
};
const formArea = document.querySelector('.feedback-form');

const inputArea = formArea.elements.email;
const textAreaValue = formArea.elements.message;

const key = 'feedback-form-state';

if (localStorage.getItem(key) !== null) {
  inputArea.value = JSON.parse(localStorage.getItem(key)).email;
  textAreaValue.value = JSON.parse(localStorage.getItem(key)).message;
  formData.email = inputArea.value;
  formData.message = textAreaValue.value;
}

formArea.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(key, JSON.stringify(formData));
});

formArea.addEventListener('submit', event => {
  event.preventDefault();
  if (inputArea.value === '' || textAreaValue.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(key);
    formArea.reset();
    formData.email = '';
    formData.message = '';
  }
});
