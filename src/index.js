import '../scss/main.scss'

document.querySelector('button').addEventListener('click', () => {
	let randomColor = Math.floor(Math.random() * Math.floor(360))
	let randomPercent = Math.random() * (100 - 40) + 40

  document.documentElement.style.setProperty('--primary-h', `${randomColor}deg`);
  document.documentElement.style.setProperty('--primary-s', `${randomPercent}%`);
  document.documentElement.style.setProperty('--primary-l', `50%`);
  document.documentElement.style.setProperty('--primary-a', '1');
});