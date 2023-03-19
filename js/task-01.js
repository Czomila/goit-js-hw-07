const naglowek = document.querySelectorAll("h2");
console.log(`Namber of categories: ${naglowek.length}`);

const lista = document.getElementsByClassName("item");
for (var i = 0; i < naglowek.length; i++) {
  console.log(`Category: ${naglowek[i].textContent}`);
  const elementy = lista[i].getElementsByTagName("li");
  console.log(`Elements: ${elementy.length}`);
}
