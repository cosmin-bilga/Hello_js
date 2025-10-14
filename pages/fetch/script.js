// Créons une fonction asynchrone.
// Cela permettra au code de continuer de s'exécuter en attendant la résolution de cette fonction.
// async function : Indique que cette fonction retourne une Promesse. Cela permet d'utiliser await à l'intérieur.

const readJson = async function () {
  // Utilisons fetch pour lire notre fichier data.json.
  // await fetch("data.json") : Exécute la requête HTTP.
  // La fonction readJson suspend son exécution ici, mais laisse le reste du code JavaScript s'exécuter (elle est non-bloquante).
  const response = await fetch("data.json");

  if (response.ok) {
    // En cas de réussite, nous stockons la valeur dans une constante au format JSON.
    const result = await response.json();
    // Puis nous rendons disponible ce résultat à l'appel de notre fonction.
    return result;
  }

  // En cas d'échec, notre fonction retournera false.
  return false;
};

// Voici une variable qui servira à la pagination.
let count = 0;

// La fonction ci-dessous sert à afficher une page sans rechargement, c'est l'intérêt du JavaScript.
// Elle requiert la page courante (count).
// Puisque cette fonction dépend de fetch(), elle doit être asynchrone aussi.
async function displayInfo(count) {
  // Exécutons la fonction précédemment décrite en utilisant 'await'.
  jsonData = await readJson();
  // Sélectionnons la div avec l'ID 'app', puis effaçons son contenu.
  document.getElementById("app").innerHTML = "";
  // Déclarons une boucle sur un tableau disponible dans notre fichier JSON.
  for (let element of jsonData.variables.files[count]) {
    // Pour chaque élément de ce tableau, nous ajoutons un paragraphe avec le texte correspondant.
    let monInput = document.createElement("p");
    monInput.textContent = element;
    document.getElementById("app").appendChild(monInput);
  }
}
// Exécutons cette fonction.
displayInfo(count);

// Ci-dessous, nous créons un événement au clic sur le bouton "Précédent".
document.getElementById("previous").addEventListener("click", function () {
  count--;
  if (count <= 0) {
    document.getElementById("previous").style.display = "none";
  } else {
    document.getElementById("next").style.display = "inline-block";
  }
  if (count > jsonData.variables.files.length - 1) {
    document.getElementById("previous").style.display = "none";
  } else {
    document.getElementById("next").style.display = "inline-block";
  }
  displayInfo(count);
});

// Ci-dessous, nous créons un événement au clic sur le bouton "Suivant".
document.getElementById("next").addEventListener("click", function () {
  count++;
  if (count >= jsonData.variables.files.length - 1) {
    document.getElementById("next").style.display = "none";
  } else {
    document.getElementById("next").style.display = "inline-block";
  }
  if (count > 0) {
    document.getElementById("previous").style.display = "inline-block";
  } else {
    document.getElementById("previous").style.display = "none";
  }
  displayInfo(count);
});
