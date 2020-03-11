/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var a = 10;
var b = -2;
var c = 31;
var d = 22;
var e = 15;
var f = -6;
var g = 7;

if (a>b & a>c & a>d & a>e & a>f & a>g){
  console.log('giornata più calda'+a);
}
else if (b>a & b>c & b>d & b>e & b>f & b>g) {
  console.log('giornata più calda'+b);
}
else if (c>a & c>b & c>d & c>e & c>f & c>g) {
  console.log('giornata più calda'+c);
}
else if (d>a & d>b & d>c & d>e & d>f & d>g) {
  console.log('giornata piu calda'+d);
}
else if (e>a & e>b & e>c & e>d & e>f & e>g) {
  console.log('giornata piu calda'+e);
}
else if (f>a & f>b & f>c & f>d & f>e & f>g) {
  console.log('giornata più calda'+f);
}
else if (g>a & g>b & g>c & g>d & g>e & g>f) {
  console.log('giornata più calda'+g);
}else {
  console.log();
}

if (a<b & a<c & a<d & a<e & a<f & a<g){
  console.log('giornata più fredda'+a);
}
else if (b<a & b<c & b<d & b<e & b<f & b<g) {
  console.log('giornata più fredda'+b);
}
else if (c<a & c<b & c<d & c<e & c<f & c<g) {
  console.log('giornata più fredda'+c);
}
else if (d<a & d<b & d<c & d<e & d<f & d<g) {
  console.log('giornata piu fredda'+d);
}
else if (e<a & e<b & e<c & e<d & e<f & e<g) {
  console.log('giornata piu fredda'+e);
}
else if (f<a & f<b & f<c & f<d & f<e & f<g) {
  console.log('giornata più fredda'+f);
}
else if (g<a & g<b & g<c & g<d & g<e & g<f) {
  console.log('giornata più fredda'+g);
}else {
  console.log();
}
