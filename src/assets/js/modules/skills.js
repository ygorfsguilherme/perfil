
import {Card} from './card.js'
import {Carrossel} from './carrossel.js'

const infoSkills = [
	{
		'$image' : 'src/assets/img/icon/skills/html5.svg',
	},

	{
		'$image' : 'src/assets/img/icon/skills/python.svg',
	},

	{
		'$image' : 'src/assets/img/icon/skills/javascript.svg',
	},

	{
		'$image' : 'src/assets/img/icon/skills/sass.svg',
	},

	{
		'$image' : 'src/assets/img/icon/skills/mysql.svg',
	},

	{
		'$image' : 'src/assets/img/icon/skills/flask.svg',
	},

]

const templateSkills = `
					<img src="$image" alt="" height="64">`;

const skills = {
	'target': document.querySelector('[data-skills]'),
	'countCard' : infoSkills.length,
	'index' : 0,
	'position' : 90,
	'limite': 3,
};

const skillCard = new Card(infoSkills, templateSkills, '[data-skills]', 'c-card__icon');
skillCard.create();

const skillCarrossel = new Carrossel(skills);
setInterval(()=>{
	skillCarrossel.move()
}, 3500);
