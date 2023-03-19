const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
function dodajObraz(daneObrazu) {
  var obraz = document.createElement("li");
  const wartoscObiektu =
    '<img src="' + daneObrazu.url + '" alt="' + daneObrazu.alt + '">';
  obraz.insertAdjacentHTML("beforeend", wartoscObiektu);
  const listaCelowa = document.getElementsByClassName("gallery");
  listaCelowa[0].insertAdjacentHTML("beforeend", obraz.innerHTML);
}

for (var i = 0; i < images.length; i++) {
  dodajObraz(images[i]);
}
