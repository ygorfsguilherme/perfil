import {Card} from './card.js';
import {Carrossel} from './carrossel.js';

const infoHobbies = [
	{	

		'$image': 'src/assets/img/icon/hobbies/leitura.svg',
		'$message': 'Ler é algo que me faz criativo, adoro ler bons manga.',
	},

	{	

		'$image': 'src/assets/img/icon/hobbies/cozinha.svg',
		'$message': 'Gosto de mistura ingredientes e ver algo surgindo.',
	},

	{	

		'$image': 'src/assets/img/icon/hobbies/filme.svg',
		'$message': 'Adoro assistir filmes e series. Principalmente de ficção cientifica.',
	},

]

const templateHobbies = `
<div class="c-hobbies__card__icon icon">
	<img src="$image" alt="" height="64">
</div>
<p class="c-hobbies__card__text">$message</p>`;


const hobbies = {
	'target': document.querySelector('[data-hobbies]'),
	'countCard' : infoHobbies.length - 1,
	'position' : 300,
};

const hobbiesCard = new Card(infoHobbies, templateHobbies, '[data-hobbies]', 'l-card__hobbies');
hobbiesCard.create()

const hobbieCarrossel = new Carrossel(hobbies);
setInterval(()=>{
	hobbieCarrossel.move()
}, 3500);