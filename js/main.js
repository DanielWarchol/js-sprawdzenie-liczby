let num1 = 100;

 function wynik(num1){
     if (num1 > 100 && num1 < 200){
         return 'Liczba znajduje się w przedziale';
     } else if (num1 < 200){
         return 'Liczba znajduje się w przedziale';
     } else {
         return 'Liczba nie znajduje się w przedziale ';
     }
}
console.log(wynik(num1));
console.log(wynik(200));

