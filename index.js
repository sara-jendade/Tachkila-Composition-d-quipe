const ouvrir = document.getElementById("ouvrir");
const modal = document.getElementById("modal");
const fermer = document.getElementById("fermer");
const annuler = document.getElementById("annuler");

console.log(ouvrir, modal, fermer, annuler);

ouvrir.addEventListener("click", function () {
    modal.hidden = false;
});

fermer.addEventListener("click", function () {
    modal.hidden = true;
});

annuler.addEventListener("click", function () {
    modal.hidden = true;
});