// Открытие и закрытие бокового меню
var burger_image = document.querySelector('.burger_image');
var user_left_menu = document.querySelector('.user_left_menu');
var user_left_menu_close_image = document.querySelector('.user_left_menu_close_image');


// Варианты того, что будем выбирать, какой кошелек
var add_wallet_variables = document.querySelector('.add_wallet_variables')

var add_wallet_variables_items = document.querySelector('.add_wallet_variables_items');

// переключение между ВЫПЛАТАМИ и НАЧИСЛЕНИЯМИ
var viplaty = document.querySelector('.main_lk_table');
var viplatyButton = document.querySelector('#payments_button');
var navislenia = document.querySelector('.main_lk_moneyout')
var navislenia_button = document.querySelector('#accrued');

// Тестовый массив с разными вариантами
var walletTypes = ['Web Money','WMR', 'RUR', 'KIWI', 'Yandex Деньги', 'Под честное слово'];
// кнопка ДОБАВИТЬ кошелек
var addWalletButton = document.querySelector('.add_wallet_point');
// Значение имени НОВОГО КОШЕЛЬКА
var wallet_name = document.querySelector('#wallet_name');

var background_layout = document.querySelector('.background_layout');

burger_image.addEventListener('click', function(e) {
	user_left_menu.classList.add('user_left_menu--opened');
})
user_left_menu_close_image.addEventListener('click', function(e) {
	user_left_menu.classList.remove('user_left_menu--opened');
})


// Зададим высоту Левому меню в 100% высоты, а так же самому контейнеру с табличками. 
document.querySelector('.main_lk_content').style.minHeight = document.documentElement.clientHeight - 77 + 'px';
document.querySelector('.user_left_menu').style.minHeight = document.documentElement.clientHeight - 77 + 'px';



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


// По клику на нее показываем лэйаут с формой добавления кошелька 
if(addWalletButton) {
	addWalletButton.addEventListener('click', function(e) {
		background_layout.classList.remove('hidden');
	})
}


// Закроем форму добавления кошелька по клику на фон
if(background_layout) {
	background_layout.addEventListener('click', function(e) {
		if(e.target.classList.contains('background_layout')) {
			this.classList.add('hidden');
			add_wallet_variables.innerHTML = walletTypes[0];
			wallet_name.value = '';
		}
	})
}

if(add_wallet_variables) {
	add_wallet_variables.addEventListener('click', function(e) {
		add_wallet_variables_items.classList.toggle('hidden')
	})
}


window.addEventListener('load', function(e) {
	if(add_wallet_variables_items) {
		var list = '';
		for(var i = 0; i < walletTypes.length; i ++) {
			list += '<div class="wallet_items" id="wallet_id_' + i + '"">' + walletTypes[i] + '</div>'
		}
		add_wallet_variables_items.innerHTML = list;

		add_wallet_variables_items.addEventListener('click', function(e) {
			this.classList.toggle('hidden');
			var choosed_wallet = e.target.innerHTML;
			add_wallet_variables.innerHTML = choosed_wallet;
		})
	}

})