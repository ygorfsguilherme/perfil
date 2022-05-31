import { Carrossel } from "./carrossel.js";

const skillsArea = document.querySelector('[data-skills]')

const skills = [
	{
		image : 'src/assets/img/icon/skills/html5.svg',
	},

	{
		image : 'src/assets/img/icon/skills/python.svg',
	},

	{
		image : 'src/assets/img/icon/skills/javascript.svg',
	},

	{
		image : 'src/assets/img/icon/skills/sass.svg',
	},

	{
		image : 'src/assets/img/icon/skills/mysql.svg',
	},

	{
		image : 'src/assets/img/icon/skills/flask.svg',
	},

]

const skillsInformation = {
	'target': document.querySelector('[data-skills]'),
	'countCard' : skills.length - 4,
	'index' : 0,
	'position' : 75,
};

function createSkills() {
	const newSkill = skills.map((skill) => {
	  return `<img class="c-card__icon" src="${skill.image}" alt="" height="64">`;
	});
  
	return newSkill.join('');
}

skillsArea.insertAdjacentHTML('afterbegin', createSkills());

const skillCarrossel = new Carrossel(skillsInformation);
skillCarrossel.start();

