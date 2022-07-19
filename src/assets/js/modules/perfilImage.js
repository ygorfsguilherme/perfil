for (let i = 1; i < 6; i++) {
  console.log(i);
  document
    .querySelector(".l-perfil__image")
    .insertAdjacentHTML(
      "beforeend",
      `<img class="move-${i}" src="src/assets/img/perfil/t${i}.png" alt="" />`
    );
}
