var flags;

function book (title, author, category, range, country, poster){
	this.title = title,
	this.author = author,
	this.category = category,
	this.range = range,
	this.country = country,
	this.poster = poster
}

let books = [
	new book ("Ангелы, драконы и стервятники", "С. Экланд","Менеджмент", "2011-2020", "Великобритания", "../images/books1/1book.png"),
	new book ("Преврати себя в бренд", "Т. Питерс", "Менеджмент", "2011-2020", "США", "../images/books1/2book.png"),
	new book ("Драйв", "Д. Пинк","Саморазвитие", "2011-2020", "США", "../images/books1/3book.jpg"),
	new book ("Мечтать не вредно",  "Б. Шер", "Психология", "2011-2020", "США", "../images/books1/4book.jpg"),
	new book ("Rework", "Дж. Фрайд и Д. Хенсон","Бизнес", "2001-2010", "США", "../images/books1/5book.jpg"),
	new book ("12 недель в году", "Б. Моран и М. Леннингтон",  "Менеджмент", "2011-2020",  "США", "../images/books1/6book.jpg"),
	new book ("Легко не будет", "Б. Хоровиц","Бизнес", "2011-2020",  "США", "../images/books1/7book.jpg"),
	new book ("Разбуди в себе исполина", "Э. Роббинс", "Саморазвитие", "1991-2000",  "США", "../images/books1/8book.png"),
	new book ("Думай и богатей", "Н. Хилл", "Личная эффективность", "до 1990",  "США", "../images/books1/9book.jpg"),
	new book ("Человек мыслящий", "Дж. Аллен", "Психология", "до 1990",  "США", "../images/books1/10book.jpg"),
	new book ("Опять творческий кризис?", "А. Корнелл", "Саморазвитие", "2011-2020",  "США", "../images/books1/11book.png"),
	new book ("Не переживайте по пустякам", "Р. Карлсон", "Саморазвитие", "2001-2010",  "США", "../images/books1/12book.jpg"),
	new book ("Цельная жизнь", "Дж. Кэнфилд", "Личная эффективность", "2011-2020",  "США", "../images/books2/1book.jpg"),
	new book ("Важные годы", "М. Джей", "Психология", "2011-2020",  "США", "../images/books2/2book.jpg"),
	new book ("Доставляя счастье", "Т. Шей", "Бизнес", "2011-2020",  "США", "../images/books2/3book.jpg"),
	new book ("Осознанность", "М. Уильямс", "Психология", "2011-2020",  "Великобритания", "../images/books2/4book.jpg"),
	new book ("От хорошего к великому", "Дж. Коллинз", "Менеджмент", "2001-2010",  "Великобритания", "../images/books2/5book.jpg"),
	new book ("Лиминальное мышление", "Д. Грей", "Личная эффективность", "2011-2020",  "США", "../images/books2/6book.jpg")
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
	getBooks();
});

document.getElementById('test').addEventListener("submit", function(event){
	event.preventDefault();
	let q2Inputs = document.getElementsByName('q2');
	let checkedValue = '';
	q2Inputs.forEach(function(input){
		if (input.checked) checkedValue = input.value;
	});
	localStorage.setItem ('q2', checkedValue);	
	getBooks();
});

document.getElementById('test').addEventListener("submit", function(event){
	event.preventDefault();
	let q3Inputs = document.getElementsByName('q3');
	let checkedValue = '';
	q3Inputs.forEach(function(input){
		if (input.checked) checkedValue = input.value;
	});
	localStorage.setItem ('q3', checkedValue);	
	getBooks();
});

let getBooks = function (){
	let result = [];
	let cur = books;
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


	if(localStorage.getItem ('q2') == 'Бизнес') {
		result = cur.filter (a => a.category == 'Бизнес');
		cur = result;
	} else {
		result = cur.filter (b => b.category != 'Бизнес');
		cur = result;
	}

	if(localStorage.getItem ('q2') == 'Психология') {
		result = cur.filter (b => b.category == 'Психология');
		cur = result;
	} else {
		result = cur.filter (b => b.category != 'Психология');
		cur = result;
	}

	if(localStorage.getItem ('q2') == 'Менеджмент') {
		result = cur.filter (a => a.category == 'Менеджмент');
		cur = result;
	} else {
		result = cur.filter (b => b.category != 'Менеджмент');
		cur = result;
	}

	if(localStorage.getItem ('q2') == 'Саморазвитие') {
		result = cur.filter (b => b.category == 'Саморазвитие');
		cur = result;
	} else {
		result = cur.filter (b => b.category != 'Саморазвитие');
		cur = result;
	}

	
	if(localStorage.getItem ('q3') == 'до 1990') {
		result = cur.filter (b => b.range == 'до 1990');
		cur = result;
	} else {
		result = cur.filter (b => b.range != 'до 1990');
		cur = result;
	}

	if(localStorage.getItem ('q3') == '1991-2000 гг.') {
		result = cur.filter (b => b.range == '1991-2000');
		cur = result;
	} else {
		result = cur.filter (b => b.range != '1991-2000');
		cur = result;
	}

	if(localStorage.getItem ('q3') == '2001-2010 гг.') {
		result = cur.filter (b => b.range == '2001-2010');
		cur = result;
	} else {
		result = cur.filter (b => b.range != '2001-2010');
		cur = result;
	}

	if(localStorage.getItem ('q3') == '2011-2020 гг.') {
		result = cur.filter (b => b.range == '2011-2020');
		cur = result;
	} else {
		result = cur.filter (b => b.range != '2011-2020');
		cur = result;
	}


	let container = document.getElementById('list');
	container.innerHTML = '';
		if (result.length != 0 && cur.length !=0){
		result.forEach(function(book){
		let title = document.createElement('h4');
		title.innerText = book.title;
		title.classList.add('title');
		let author = document.createElement('h5');
		author.innerText = book.author;
		author.classList.add('Author');
		let country = document.createElement('p');
		country.innerText = book.country;
		country.classList.add('country');
		let range = document.createElement('p');
		range.innerText = book.range;
		range.classList.add('COLUMN');
		let image = document.createElement('img');
		image.src = book.poster;
		image.classList.add('photo');
		let card = document.createElement('div');
		card.appendChild(title);
		card.appendChild(author);
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

getBooks();