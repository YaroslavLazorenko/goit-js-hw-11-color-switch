import './styles/styles.css';
import colors from './js/colors-array';
import refs from './js/refs';

const CHANGE_DELAY = 1000;
const { body, startButton, stopButton } = refs;
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBodyColor = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  body.style.backgroundColor = color;
};

const onStartButtonClick = () => {
  startButton.setAttribute('disabled', '');
  timerId = setInterval(changeBodyColor, CHANGE_DELAY);
};

const onStopButtonClick = () => {
  startButton.removeAttribute('disabled');
  clearInterval(timerId);
};

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);
