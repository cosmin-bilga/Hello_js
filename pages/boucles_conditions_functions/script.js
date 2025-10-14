const readJson = async function () {
  const response = await fetch("data.json");
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  return false;
};

let count = "boucles";

async function displayInfo(count) {
  jsonData = await readJson();
  document.querySelector(".code").innerHTML = "";
  document.querySelector(".resultat").innerHTML = "";
  for (let element of jsonData[count].code) {
    let blocCode = document.createElement("code");
    blocCode.textContent = element;
    document.querySelector(".code").appendChild(blocCode);
  }
  for (let element of jsonData[count].resultat) {
    let blocCode = document.createElement("code");
    blocCode.textContent = element;
    document.querySelector(".resultat").appendChild(blocCode);
  }
}
displayInfo(count);

document.getElementById("btn-loops").addEventListener("click", function () {
  count = "boucles";
  displayInfo(count);
});

document.getElementById("btn-conds").addEventListener("click", function () {
  count = "conditions";
  displayInfo(count);
});

document.getElementById("btn-func").addEventListener("click", function () {
  count = "fonctions";
  displayInfo(count);
});
