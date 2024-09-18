let Ism = prompt("Ismingizni kiriting");
let harf = prompt("Bironta harf kiriting");

if (Ism.includes(harf)) {
  alert(`${Ism} ismining ichida ${harf} harfi mavjud`);
} 
else {
  alert(`${Ism} ismining ichida ${harf} harfi mavjud emas`);
}
