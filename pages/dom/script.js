// Voici une variable a portée globale, c'est une mauvaise pratique (ancienne methode)
var maVariable = 10;
// Utilisez pluto let, la portée sera ainsi limitée au bloc
let uneAutreVariable = 30;
// Voici maintenant une constante, sa valeur ne peut pas être modifiée
// J'y stocke une référence vers un élément du DOM
const maConstante = document.getElementById("app");
// maConstante = 25; // Ceci provoquerait une erreur

// Maintenant je creer une balise <span> dans une variable
let monSpan = document.createElement("span");
// J'affiche la valeur de maVariable dans cette balise
monSpan.textContent = "ma variable: " + uneAutreVariable;
// J'ajoute cette balise dans l'élément du DOM référencé par maConstante
maConstante.appendChild(monSpan);

// De la même manière, je crée un champ de saisie
let monInput = document.createElement("input");
// Je modifie quelques attributs
monInput.type = "text";
monInput.placeholder = "Modifiez cette valeur";
maConstante.appendChild(monInput);

document.getElementById("changeContent").addEventListener("click", function () {
  // Je modifie maVariable avec la valeur du champ de saisie
  uneAutreVariable = monInput.value;
  document.getElementById("majDom").style =
    "display:flex;flex-direction:column;gap:2svh";
});

// Je met à jour le DOM
document.getElementById("majDomButton").addEventListener("click", function () {
  monSpan.textContent = "ma variable: " + uneAutreVariable;
});
