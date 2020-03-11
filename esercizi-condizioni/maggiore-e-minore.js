/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var a = 65;
var b = -8;
var c = 100;
var d = -10;

if (a > b & a > c & a > d) {
  console.log('max'+a);
}
if (b > a & b > c & b > d) {
  console.log('max'+b);
}
if (c > a & c > b & c > d) {
  console.log('max'+c);
}
if (d > a & d > b & d > c) {
  console.log('max'+d);
}

if (a < b & a < c & a < d) {
  console.log('min'+a);
}
if (b < a & b < c & b < d) {
  console.log('min'+b);
}
if (c < a & c < b & c < d) {
  console.log('min'+c);
}
if (d < a & d < b & d < c) {
  console.log('min'+d);
}
