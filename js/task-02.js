const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function dodajSkladnik(nazwaSkladnika) {
  const skladnik = document.createElement("li");
  const zawartoscTekstowa = document.createTextNode(nazwaSkladnika);
  skladnik.appendChild(zawartoscTekstowa);
  const listaCelowa = document.getElementById("ingredients");
  listaCelowa.appendChild(skladnik);
}
for (var i = 0; i < ingredients.length; i++) {
  dodajSkladnik(ingredients[i]);
}
