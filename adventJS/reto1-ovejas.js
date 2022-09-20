/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una
lista con todas las ovejas que sean de color rojo y que además su nombre
contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/
const Principal = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];
const regex = /^.*(([n]{1}).*([a]{1})|([a]{1}).*([n]{1})).*\S*$/;

function contarOvejas(ovejas) {
  const news = [];
  for (let index = 0; index < ovejas.length; index++) {
    const oveja = ovejas[index];
    let name = oveja.name.toLowerCase();
    let test = regex.test(name);
    if (test && oveja.color == "rojo") {
      news.push(oveja);
    }
  }
  console.log(news);
}

contarOvejas(Principal);
