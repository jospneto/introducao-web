const container = document.getElementById('container-element');
const container2 = document.getElementById('container-element-2');
container.style.color = 'red';
container.style.backgroundColor = 'blue';

const button = document.querySelector('button');

button.addEventListener("click", () => {
  if (container.style.color === 'blue') {
    container.style.color = 'red';
    container.style.backgroundColor = 'blue';
  } else {
    container.style.color = 'blue';
    container.style.backgroundColor = 'red';
  }

  if (container2.style.display === 'none') {
    container2.style.display = 'flex';
  } else {
    container2.style.display = 'none';
  }
});

