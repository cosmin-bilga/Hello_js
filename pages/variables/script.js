// Copie par valeurs

let a = 2;
let b = a;
console.log("copies par valeurs ");
// Ici j'utilise + pour concaténer une string et un integer
console.log("a=2,b=a donc b=" + b);
a = 5;
// Ici j'utilise , pour lister un serie d'arguments
console.log("a=5 mais b toujours egale a", b);
// La nuance est subtile mais voyez la difference entre:
console.log("Concatenation (a + b):");
console.log(a + b);
// et
console.log("liste (a , b):");
console.log(a, b);

// Copie par référence
console.log("copies par references ");

let monObjet = { valeur: 10 };
let monObjetReference = monObjet;

console.log("monObjet: ", monObjet);
console.log("monObjetReference: ", monObjetReference);

monObjet.valeur = 20;

console.log("Après modification:");
console.log("monObjet: ", monObjet);
console.log("monObjetReference: ", monObjetReference);

// Clonage de l'objet
console.log("clonage d'objet ");

let monObjetClone = { ...monObjet };

console.log("monObjet: ", monObjet);
console.log("monObjetClone: ", monObjetClone);

monObjet.valeur = 30;

console.log("monObjet.valeur=30");
console.log("monObjet: ", monObjet);
console.log("monObjetClone: ", monObjetClone);

// Nous examinerons le code ci dessous dans un prochain chapitre,
// vous pouvez passer a la page suivante sur votre navigateur: fetch

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((jsonData) => {
    let count = 0;

    displayInfo(jsonData, count);

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
      displayInfo(jsonData, count);
    });
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
      displayInfo(jsonData, count);
    });
  });

function displayInfo(jsonData, count) {
  document.getElementById("app").innerHTML = "";
  for (let element of jsonData.variables.files[count]) {
    document.getElementById("app").innerHTML += "";
    let monInput = document.createElement("p");
    monInput.textContent = element;
    document.getElementById("app").appendChild(monInput);
  }
}
