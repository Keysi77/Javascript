// netreba 'use-strict', lebo babel ho vzdy automaticky doplni

const TAX = 0.2; // konstanta
function getTax() {
    return TAX;
}


class SexyNum{
   static multiMax(first, ...theRest){
    // zisti ktore cislo je najvacsie, utriedi ich
    let sorted = theRest.sort( (a,b) => b>a),
    // maximalne cislo, z usporiadaneho pola bude prve, na nultej pozicii
    max = sorted[0];
    //console.log(first, max);
    return first * max;
  }
}

// dedi od SexyNum
class sexyNumDva extends SexyNum{
    // vyrata zlavu
    static discount (price, percent = 10, tax = getTax()){ // default hodnota, moze byt aj vysledok funkcie
        price = price -(price*percent/100);
        price = price - (price * tax);
        return price.toFixed(2); // zaokruhlenie na dve desatinne miesta
    }


}

console.log(
    sexyNumDva.discount(100,20)
    //SexyNum.multiMax(1,2,16,3,5)
);
