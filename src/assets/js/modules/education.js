import {Card} from './card.js'

const education = [
	{
		'$title': 'Manutenção de Micro Computadores',
		'$image' : './assets/img/icon/education/computer.svg',
		'$school': 'CECAPI - Centro de Capacitação Profissional',
		'$date': '06/2014',
		'$description': 'Realizar manutenção e montagem, como instalar sistema operacional, softwere e periferico.',
		'$certificate_link': '#',
	},

	{
		'$title': 'Python do Basico ao Avançado',
		'$image' : './assets/img/icon/education/python.svg',
		'$school': 'Udemy',
		'$date': '08/2021',
		'$description': 'Foi apresendado Django, PyQT5, Selenium, Regexp, Mysql e SQL.',
		'$certificate_link': 'https://www.udemy.com/certificate/UC-fdc308ae-e223-45ff-93d2-c8069a8d4633/',
	},
	
	{
		'$title': 'Django para web',
		'$image' : './assets/img/icon/education/django.svg',
		'$school': 'Udemy',
		'$date': '09/2021',
		'$description': 'Teve como objetivo aprende tecnologia para web como HTML5, CSS3, Bootstrap, Javascript, ES6, JQuery, Python, Django.',
		'$certificate_link': 'https://www.udemy.com/certificate/UC-551ceb4c-982d-4d41-895a-67f494c4135e/',
	},
	
	{
		'$title': 'Desenvolvimento web e java',
		'$image' : './assets/img/icon/education/java.svg',
		'$school': 'Alura',
		'$date': 'Cursando',
		'$description': 'prendendo tecnologia para web como HTML5, CSS3, Javascript e metodologia agil e java.',
		'$certificate_link': '#',
	},
]

const templateEducation = `
				  <div class="c-education__card__header">
				    <span class="c-education__card__title">$title</span>
				    <img src="$image" class="c-education__card__image">
				  </div>
				   
				  <div class="c-education__card__body">
				    <p>$school</p>
				    <p>$date</p>
				    <p>$description</p>
				    <a class="c-education__card__button" href="$certificate_link">Certificado</a>
				  </div>`;

const cardEducation = new Card(education, templateEducation, '[data-education]', 'c-education__card');
cardEducation.create()
