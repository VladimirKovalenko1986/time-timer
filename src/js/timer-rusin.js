import { refs } from './common/const';

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

const arrDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Субота',
];

setInterval(() => {
  const currentTime = new Date();
  const currentDay = arrDay[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentHour = currentTime.getHours();
  const currentMinets = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const formatTime = `
  ${currentHour.toString().padStart(2, '0')} : 
  ${currentMinets.toString().padStart(2, '0')} : 
  ${currentSeconds.toString().padStart(2, '0')}`;

  const changeSecond = (360 / 60) * currentSeconds;
  const changeMinutes = (360 / 60) * currentMinets;
  const changHours = (360 / 12) * currentHour + (360 / 12 / 60) * currentMinets;

  refs.dayWeek.textContent = currentDay;
  refs.dayMounth.textContent = currentDate;
  refs.month.textContent = currentMonth;
  refs.year.textContent = currentYear;

  refs.digitalClock.textContent = `Поточний час: ${formatTime}`;

  refs.arrowSeconds.style.transform = `rotate(${changeSecond}deg)`;
  refs.arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
  refs.arrowHours.style.transform = `rotate(${changHours}deg)`;
}, 1000);
