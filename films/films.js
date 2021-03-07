var flags;

function film (title, producer, category, range, country, poster){
	this.title = title,
	this.producer = producer,
	this.category = category,
	this.range = range,
	this.country = country,
	this.poster = poster
}

let films = [
	new film ("Социальная сеть", "Режиссер: Дэвид Финчер","Биография", "2001-2010", "США", "../images/films1/1film.jpg"),
	new film ("Игра на понижение", "Режиссер: Адам Маккей", "Драмы", "2011-2020", "США", "../images/films1/2film.jpg"),
	new film ("Волк с Уолл-стрит", "Режиссер: Мартин Скорсезе","Комедии", "2011-2020", "США", "../images/films1/3film.jpg"),
	new film ("Миллионер из трущоб",  "Режиссер: Дэнни Бойл", "Драмы", "2001-2010", "Великобритания", "../images/films1/4film.jpg"),
	new film ("Побег из Шоушенка", "Режиссер: Фрэнк Дарабонт", "Драмы","1991-2000", "США", "../images/films1/5film.jpg"),
	new film ("Джой", "Режиссер: Дэвид Оуэн Расселл",  "Драмы", "2011-2020",  "США", "../images/films1/6film.jpg"),
	new film ("Уолл-стрит", "Режиссер: Оливер Стоун","Драмы", "до 1990",  "США", "../images/films1/7film.jpg"),
	new film ("Уолл-cтрит 2", "Режиссер: Оливер Стоун", "Драмы", "2001-2010",  "США", "../images/films1/8film.jpg"),
	new film ("Никогда не сдавайся", "Режиссер: Майкл Джей Уайт", "Боевики", "2001-2010",  "США", "../images/films1/9film.jpg"),
	new film ("Стив Джобс", "Режиссер: Дэнни Бойл", "Биография", "2011-2020",  "Великобритания", "../images/films1/10film.jpg"),
	new film ("Опасная правда", "Режиссер: Питер Хауит", "Триллеры", "1991-2000",  "США", "../images/films1/11film.jpg"),
	new film ("Джобс: Империя соблазна", "Режиссер: Джошуа Штерн", "Биография", "2011-2020",  "США", "../images/films1/12film.jpg"),
	new film ("1+1", "Режиссер: Оливье Накаш", "Комедии", "2011-2020",  "Франция", "../images/films2/1film.jpg"),
	new film ("В погоне за счастьем", "Режиссер: Габриеле Муччино", "Биография", "2001-2010",  "США", "../images/films2/2film.jpg"),
	new film ("Самый жестокий год", "Режиссер: Джей Си Чендор", "Боевики", "2011-2020",  "США", "../images/films2/3film.jpg"),
	new film ("Гражданин Кейн", "Режиссер: Орсон Уэллс", "Драмы", "до 1990",  "Великобритания", "../images/films2/4film.jpg"),
];

document.getElementById('test').addEventListener("submit", function(event){
	flags = 1;
	event.preventDefault();
	let q1Inputs = document.getElementsByName('q1');
	let checkedValue = '';
	q1Inputs.forEach(function(input){
		if (input.checked) checkedValue = input.value;
	});
	localStorage.setItem ('q1', checkedValue);	
	getFilms();
});

document.getElementById('test').addEventListener("submit", function(event){
	event.preventDefault();
	let q2Inputs = document.getElementsByName('q2');
	let checkedValue = '';
	q2Inputs.forEach(function(input){
		if (input.checked) checkedValue = input.value;
	});
	localStorage.setItem ('q2', checkedValue);	
	getFilms();
});

document.getElementById('test').addEventListener("submit", function(event){
	event.preventDefault();
	let q3Inputs = document.getElementsByName('q3');
	let checkedValue = '';
	q3Inputs.forEach(function(input){
		if (input.checked) checkedValue = input.value;
	});
	localStorage.setItem ('q3', checkedValue);	
	getFilms();
});

let getFilms = function (){
	let result = [];
	let cur = films;
	let flag = false;

	if(localStorage.getItem ('q1') == 'США') {
		result = cur.filter (a => a.country == 'США');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.country != 'США');
		cur = result;
		flag = true;
	}

	if(localStorage.getItem ('q1') == 'Великобритания') {
		result = cur.filter (a => a.country == 'Великобритания');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.country != 'Великобритания');
		cur = result;
		flag = true;
	}

	if(localStorage.getItem ('q1') == 'Франция') {
		result = cur.filter (a => a.country == 'Франция');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.country != 'Франция');
		cur = result;
		flag = true;
	}	


	if(localStorage.getItem ('q2') == 'Драмы') {
		result = cur.filter (a => a.category == 'Драмы');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.category != 'Драмы');
		cur = result;
		flag = true;
	}	

	if(localStorage.getItem ('q2') == 'Комедии') {
		result = cur.filter (a => a.category == 'Комедии');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.category != 'Комедии');
		cur = result;
		flag = true;
	}	

	if(localStorage.getItem ('q2') == 'Биография') {
		result = cur.filter (a => a.category == 'Биография');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.category != 'Биография');
		cur = result;
		flag = true;
	}	

	if(localStorage.getItem ('q2') == 'Боевики') {
		result = cur.filter (a => a.category == 'Боевики');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.category != 'Боевики');
		cur = result;
		flag = true;
	}		

	if(localStorage.getItem ('q2') == 'Триллеры') {
		result = cur.filter (a => a.category == 'Триллеры');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.category != 'Триллеры');
		cur = result;
		flag = true;
	}		


	if(localStorage.getItem ('q3') == 'до 1990') {
		result = cur.filter (a => a.range == 'до 1990');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.range != 'до 1990');
		cur = result;
		flag = true;
	}		

	if(localStorage.getItem ('q3') == '1991-2000 гг.') {
		result = cur.filter (a => a.range == '1991-2000');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.range != '1991-2000');
		cur = result;
		flag = true;
	}		

	if(localStorage.getItem ('q3') == '2001-2010 гг.') {
		result = cur.filter (a => a.range == '2001-2010');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.range != '2001-2010');
		cur = result;
		flag = true;
	}		

	if(localStorage.getItem ('q3') == '2011-2020 гг.') {
		result = cur.filter (a => a.range == '2011-2020');
		cur = result;
		flag = true;
	} else {
		result = cur.filter (b => b.range != '2011-2020');
		cur = result;
		flag = true;
	}		


	let container = document.getElementById('list');
	container.innerHTML = '';

		if (result.length != 0 && cur.length !=0){
			result.forEach(function(film){
			let title = document.createElement('h4');
			title.innerText = film.title;
			title.classList.add('title');
			let producer = document.createElement('h5');
			producer.innerText = film.producer;
			producer.classList.add('Author');
			let country = document.createElement('p');
			country.innerText = film.country;
			country.classList.add('country');
			let range = document.createElement('p');
			range.innerText = film.range;
			range.classList.add('COLUMN');
			let image = document.createElement('img');
			image.src = film.poster;
			image.classList.add('photo');
			let card = document.createElement('div');
			card.appendChild(title);
			card.appendChild(producer);
			card.appendChild(country);
			card.appendChild(image);
			card.classList.add('COLUMN');
			container.appendChild(card);
			let card2 = document.createElement('div');
			card2.appendChild(card);
			card2.classList.add('CONT');
			container.appendChild(card2);
			})
		}
		else{
			if (flags == 1){
				let text = document.createElement('p');
				text.innerText = 'По такому запросу ничего не найдено';
				text.classList.add('Error');
				let card = document.createElement('div');
				card.appendChild(text);
				card.classList.add('card');
				container.appendChild(card);
			}
		}
}

getFilms();
