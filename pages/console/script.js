const button = document.querySelector("button");
button.addEventListener("click", () => {
  // ici on affiche dans la console le bouton
  console.log("voici la liste des propriétés du bouton:", button);
  console.log("Texte du bouton:", button.textContent);
  console.log("Referez vous maintenant au fichier console.html");
});
