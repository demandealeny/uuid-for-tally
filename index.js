const appDiv = document.getElementById('app');

window.addEventListener('DOMContentLoaded', (event) => {
  if (window.parent) {
    const parent = window.parent;
    const inputs = parent.querySelectorAll('input');
    const uuidIndex = inputs.findIndex((el) => el.value === 'uuid');

    console.log(uuidIndex, inputs);
  }
});
