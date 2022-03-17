let nazwa = "Akademia108";
function sortowanie(parametr) {
  let wynik = parametr.split("").sort().join("");
  return wynik;
}
console.log(sortowanie(nazwa));