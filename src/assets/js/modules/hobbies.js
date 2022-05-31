import {Carrossel} from './carrossel.js';
const hobbiesArea = document.querySelector('[data-hobbies]')
const hobbies = [
	{	
		image: 'src/assets/img/icon/hobbies/leitura.svg',
		message: 'Ler é algo que me faz criativo, adoro ler bons manga.',
	},

	{	

		image: 'src/assets/img/icon/hobbies/cozinha.svg',
		message: 'Gosto de mistura ingredientes e ver algo surgindo.',
	},

	{	

		image: 'src/assets/img/icon/hobbies/filme.svg',
		message: 'Adoro assistir filmes e series. Principalmente de ficção cientifica.',
	},
]

function createHobbies() {
	const newHobbies = hobbies.map((hobbie) => {
	  return `
	  <div class="l-card__hobbies">
		  <div class="c-hobbies__card__icon icon">
			  <img src="${hobbie.image}" alt="" height="64">
		  </div>
		  <p class="c-hobbies__card__text">${hobbie.message}</p>
	  </div>`;
	});
  
	return newHobbies.join('');
}

const hobbiesInformation = {
	'target': document.querySelector('[data-hobbies]'),
	'countCard' : hobbies.length - 1,
	'position' : 300,
};

hobbiesArea.insertAdjacentHTML('afterbegin', createHobbies());

const hobbieCarrossel = new Carrossel(hobbiesInformation);
hobbieCarrossel.start(4200)