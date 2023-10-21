"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.querySelector("#nomes-pets");
  const images = document.querySelectorAll(".imagens-pets img");
  const altMap = {
    frajola: "Odisseu",
    frida: "Frida",
    pacoca: "Paçoca",
    default: "Filhote de gato",
  };

  function deactivateImages() {
    images.forEach((img) => {
      img.classList.add("desativado");
      img.classList.remove("ativo");
    });
  }

  function activateImage(altText) {
    const image = document.querySelector(`.imagens-pets img[alt="${altText}"]`);
    image.classList.add("ativo");
    image.classList.remove("desativado");
  }

  selectElement.addEventListener("change", function (e) {
    const selectedValue = e.target.value;

    deactivateImages();

    // Usar o objeto de mapeamento para ativar a imagem correta ou usar uma imagem padrão.
    const altText = altMap[selectedValue] || altMap["default"];
    activateImage(altText);
  });
});
