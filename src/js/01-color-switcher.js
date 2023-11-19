
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');


let timerId = null;

buttonStart.addEventListener('click', onButtonStart);
buttonStop.addEventListener('click', onButtonStop);

buttonStop.disabled = true;



function onButtonStart() {
  timerId = setInterval(() => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000
  );
//  buttonStart.disabled = true;
};


function onButtonStop() {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
