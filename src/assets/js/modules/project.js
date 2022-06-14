let projectArea = document.querySelector("[data-projects]");

const projects = [
  {
    image: "src/assets/img/project/project-criptdex.png",
    title: "Criptdex",
    description:
      "É um codificador de texto, a sua utilização é fazer com que frases seja indecifrável.",
    github_link: "https://github.com/ygorfsguilherme/criptdex",
    view_app: "https://ygorfsguilherme.github.io/criptdex/",
  },

  {
    image: "src/assets/img/project/project-jogo-da-forca.png",
    title: "Jogo da forca",
    description:
      "Um simples jogo da forca, onde você pode tentar adivinhar uma palavra.",
    github_link: "https://github.com/ygorfsguilherme/jogo-da-forca",
    view_app: "https://ygorfsguilherme.github.io/jogo-da-forca/",
  },

  {
    image: "src/assets/img/project/project-portfolio.png",
    title: "Portfolio",
    description:
      "Local em que eu possa colocar meus principais projetos além de informações e contatos sobre mim",
    github_link: "https://github.com/ygorfsguilherme/portfolio",
    view_app: "https://ygorfsguilherme.github.io/portfolio/",
  },

  {
    image: "src/assets/img/project/project-pyformail.png",
    title: "Pyformail",
    description:
      "Uma api que envia informações de um formulario para um email, criado para envia informações de contato.",
    github_link: "https://github.com/ygorfsguilherme/api-pyformail",
    view_app: "https://github.com/ygorfsguilherme/api-pyformail",
  },
  {
    image: "src/assets/img/project/project-alura-geek.png",
    title: "Alura Geek",
    description: "Um e-commerce que une uma gama de itens da cultura geek.",
    github_link: "https://github.com/ygorfsguilherme/alura-geek",
    view_app: "https://ygorfsguilherme.github.io/alura-geek/",
  },
  {
    image: "src/assets/img/project/project-gmoney.png",
    title: "GMoney - Conversor",
    description:
      "é um conversor de moeda sendo possivel converter para alguns tipos de moeda como dólar e real.",
    github_link: "https://github.com/ygorfsguilherme/gmoney-conversor",
    view_app: "https://github.com/ygorfsguilherme/gmoney-conversor",
  },
];

function createProject() {
  const newProject = projects.map((project) => {
    return `
    <div class="l-card__project">
      <img class="c-card__project__image" src="${project.image}" alt="" >
      <div class="l-card__project__button">
        <a class="c-card__project__link c-card__project__link--view" target="_blank" href="${project.view_app}"></a>
        <a class="c-card__project__link c-card__project__link--code" target="_blank" href="${project.github_link}"></a>
      </div>
      <div class='l-card__project__body'>
        <span class="c-card__project__show__description"></span>
        <h3 class="c-card__project__title" >
          ${project.title}
        </h3>
        <p>${project.description}</p>
      </div>
     
    </div>`;
  });

  return newProject.join("");
}

projectArea.insertAdjacentHTML("afterbegin", createProject());
