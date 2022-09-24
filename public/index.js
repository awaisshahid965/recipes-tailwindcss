const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', (e) => {
	if(menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
		return null;
	}
	menu.classList.add('hidden');
});