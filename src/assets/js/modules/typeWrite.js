const message =
  "“Qualquer um pode escrever um código que o computador entenda. Bons programadores escrevem códigos que os humanos entendam.” - Martin Fowler";
const cite = document.querySelector("[data-cite]");

const typeWrite = (message) => {
  const letter = message.split("");
  letter.forEach((letra, i) => {
    setTimeout(function () {
      cite.innerHTML += letra;
    }, 40 * i);
  });
};

typeWrite(message);
