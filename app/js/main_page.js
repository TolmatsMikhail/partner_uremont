// Прозрачный темный фон
var background_layout = document.querySelector('.background_layout');
// Форма входа
var form_login = document.querySelector('#form_login');
// Форма регистрации
var form_registration = document.querySelector('#form_registration');

// Кнопка ВОЙТИ в шапке
var head_item_link_login = document.querySelector('.head_item_link_login');
// Кнопка регистрации в шапке
var head_item_link_regist = document.querySelector('.head_item_link_regist');

// Кнопка ПЕРЕЙТИ К РЕГИСТРАЦИИ в форме
var main_page_forms_top_item_toreg = document.querySelector('.main_page_forms_top_item_toreg');
// Кнопка ПЕРЕЙТИ К ВХОДУ
var main_page_forms_top_item_tologin = document.querySelector('.main_page_forms_top_item_tologin');

background_layout.addEventListener('click', function(e) {
	form_login.classList.add('hidden');
	form_registration.classList.add('hidden');
	this.classList.add('hidden');
})

head_item_link_login.addEventListener('click', function(e) {
	background_layout.classList.remove('hidden');
	form_login.classList.remove('hidden');
})

head_item_link_regist.addEventListener('click', function(e) {
	background_layout.classList.remove('hidden');
	form_registration.classList.remove('hidden');
})

main_page_forms_top_item_toreg.addEventListener('click', function(e) {
	form_login.classList.add('hidden');
	form_registration.classList.remove('hidden');
})
main_page_forms_top_item_tologin.addEventListener('click', function(e) {
	form_login.classList.remove('hidden');
	form_registration.classList.add('hidden');
})
document.addEventListener('keyup', function(e) {
	if(e.which == 27) {
		background_layout.classList.add('hidden');
		form_login.classList.add('hidden');
		form_registration.classList.add('hidden');
	}
})