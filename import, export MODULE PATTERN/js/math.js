// treba vzdy vytvorit aj export aby sa dal improtovat mimo tento subor
// bud pred vsetko co chcem exportovat kydnem slovo export aleob na konci naraz
export let theGodNumber = 69;


 export function doMath(...rest){
    return rest.reduce( (sum, val) => sum + val )
}

// pouzitie za predpokladu, ze chcem z tohto suboru vyexportovat len jednu vec
export default class Mario{
    static jump() {
        console.log("jump");
    }
}

// vsetko co chcme exportovat
/*
export {
    theGodNumber,
    doMath
}
*/