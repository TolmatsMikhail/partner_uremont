// click listener on burger to generate user_menu
var burger_image = document.querySelector('.burger_image');
var user_left_menu = document.querySelector('.user_left_menu');
var user_left_menu_close_image = document.querySelector('.user_left_menu_close_image');
burger_image.addEventListener('click', function(e) {
	user_left_menu.classList.add('user_left_menu--opened');
})

user_left_menu_close_image.addEventListener('click', function(e) {
	user_left_menu.classList.remove('user_left_menu--opened');
})


// Make mainBlock and UserMenu blocks heights are 100% from window
document.querySelector('.main_lk_content').style.height = document.documentElement.clientHeight - 77 + 'px';
document.querySelector('.user_left_menu').style.height = document.documentElement.clientHeight - 77 + 'px';


var viplaty = document.querySelector('.main_lk_table');
var viplatyButton = document.querySelector('#payments_button');

var navislenia = document.querySelector('.main_lk_moneyout')
var navislenia_button = document.querySelector('#accrued');

navislenia_button.addEventListener('click', function(e) {
	navislenia_button.classList.add('money_button_line');
	viplatyButton.classList.remove('money_button_line');
	navislenia.classList.add('hidden');
	viplaty.classList.remove('hidden');
})

viplatyButton.addEventListener('click', function(e) {
	navislenia_button.classList.remove('money_button_line');
	viplatyButton.classList.add('money_button_line');
	navislenia.classList.remove('hidden');
	viplaty.classList.add('hidden');
})
