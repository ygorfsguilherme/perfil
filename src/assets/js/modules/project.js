import {Card} from "./card.js"

const project = [
  {
    '$image': 'assets/img/project/project-criptdex.png',
    '$title': 'Criptdex - Decodificador',
    '$subtitle': 'Codificado de texto utilizando simples.',
    '$description': 'Decodificador e codificado de texto, que substitui parte da palavra por outra codificação, dificultando o entendimento.',
    '$github_link': 'https://github.com/ygorfsguilherme/criptdex',
    '$view_app': 'https://ygorfsguilherme.github.io/criptdex/',
  },

  {
    '$image': 'assets/img/project/project-jogo-da-forca.png',
    '$title': 'Jogo da forca', 
    '$subtitle': 'Para jogar sozinho ou com amigo.',
    '$description': 'Um breve descrição sobre o project, de forma simple e clara',
    '$github_link': 'https://github.com/ygorfsguilherme/jogo-da-forca',
    '$view_app': 'https://ygorfsguilherme.github.io/jogo-da-forca/',
  },

  {
    '$image': 'assets/img/project/project-portfolio.png',
    '$title': 'Portfolio',
    '$subtitle': 'Criado para expor meus projetos',
    '$description' : 'Foi um dos desafio do programa ONE da oracle e alura, afim de colocar todos os meus projetos em um só lugar.',
    '$github_link': 'https://github.com/ygorfsguilherme/portfolio',
    '$view_app': 'https://ygorfsguilherme.github.io/portfolio/',
  },

  {
    '$image': 'assets/img/project/project-pyformail.png',
    '$title': 'Pyformail',
    '$subtitle': 'Envia formulario de contato para o email',
    '$description': 'Uma api que envia informações de um formulario para um email, criado para envia informações de contato.',
    '$github_link': 'https://github.com/ygorfsguilherme/api-pyformail',
    '$view_app': 'https://github.com/ygorfsguilherme/api-pyformail#o-que-pyformail',
  },
]

const templateProject = `
          <img class="c-project__card__image" src="$image" alt="" >

          <div class="c-project__card__footer">

            <div class='infomacao'>
              <div class="c-project__card__description">
                <div class="c-project__card__title" >
                  $title
                </div>

                <p class="c-project__card__subtitle">
                  $subtitle
                </p>
              </div>
              
              <div class="c-project__card__links">
                <a class="c-project__card__link" target="_blank" href="$view_app">
                  <img class="c-project__card__link__icon" src="assets/img/icon/view-app.svg" alt="">
                </a>

                <a class="c-project__card__link" target="_blank" href="$github_link">
                  <img class="c-project__card__link__icon" src="assets/img/icon/coding.svg" alt="">
                </a>
              </div>
            </div>

            <p>$description</p>

          </div>`;

const cardProject = new Card(project, templateProject, '[data-project]', 'c-project__card');
cardProject.create()
