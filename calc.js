
const BtnM1 = document.getElementById('btnMinusLien');
const BtnM2 = document.getElementById('btnMinusLapsha');
const BtnM3 = document.getElementById('btnMinusCotton');
const BtnM4 = document.getElementById('btnMinusFuter');

const BtnP1 = document.getElementById('btnPlusLien');
const BtnP2 = document.getElementById('btnPlusLapsha');
const BtnP3 = document.getElementById('btnPlusCotton');
const BtnP4 = document.getElementById('btnPlusFuter');

let IntVal1 = document.getElementById('intLien').value;
let IntVal2 = document.getElementById('intLapsha').value;
let IntVal3 = document.getElementById('intCotton').value;
let IntVal4 = document.getElementById('intFuter').value;

BtnP1.onclick = function () {
  IntVal1 = Number(IntVal1) + 1;
  document.getElementById('intLien').value = IntVal1;
}
BtnM1.onclick = function () {
  IntVal1 = Number(IntVal1) - 1;
  if (IntVal1 < 0) IntVal1 = 0;
  document.getElementById('intLien').value = IntVal1;
}

BtnP2.onclick = function () {
  IntVal2 = Number(IntVal2) + 1;
  document.getElementById('intLapsha').value = IntVal2;
}
BtnM2.onclick = function () {
  IntVal2 = Number(IntVal2) - 1;
  if (IntVal2 < 0) IntVal2 = 0;
  document.getElementById('intLapsha').value = IntVal2;
}

BtnP3.onclick = function () {
  IntVal3 = Number(IntVal3) + 1;
  document.getElementById('intCotton').value = IntVal3;
}
BtnM3.onclick = function () {
  IntVal3 = Number(IntVal3) - 1;
  if (IntVal3 < 0) IntVal3 = 0;
  document.getElementById('intCotton').value = IntVal3;
}

BtnP4.onclick = function () {
  IntVal4 = Number(IntVal4) + 1;
  document.getElementById('intFuter').value = IntVal4;
}
BtnM4.onclick = function () {
  IntVal4 = Number(IntVal4) - 1;
  if (IntVal4 < 0) IntVal4 = 0;
  document.getElementById('intFuter').value = IntVal4;
}
const buttonTotal = document.querySelector('.calc_total').addEventListener('click', Total);
function Total() {
  var total = Number(IntVal1) * 50 + Number(IntVal2) * 35 + Number(IntVal3) * 10 + Number(IntVal4) * 4S0;
  document.getElementById('Price').innerHTML = total + " BYN";
}