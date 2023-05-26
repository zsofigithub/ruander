/*1)EkezetesBetukSzama(modositandoSzoveg)
Készíts egy függvényt ami a kapott szövegben megszámolja, mennyi ékezetes betű van benne.*/

function EkezetesBetukSzama(modositandoSzoveg: string): number {
    let ekezetesBetuk: string[] = ["á", "Á", "é", "É", "í", "Í", "ó", "Ó", "ö", "Ö", "ő", "Ő", "ú", "Ú", "ü", "Ü", "ű", "Ű"];
    let ekezetesBetukMennyisege: number = 0;
    for (let i: number = 0; i < modositandoSzoveg.length; i++) {
        for (let j: number = 0; j < ekezetesBetuk.length; j++) {
            if (modositandoSzoveg[i] == ekezetesBetuk[j]) {
                ekezetesBetukMennyisege++
            }
        }
    }
    return ekezetesBetukMennyisege;
}




/*2)camelCaseGenerator(modositandoSzoveg)
Készíts egy függvényt, ami a bemenetinek kapott szövegből camelCase szöveget hoz létre!*/

function camelCaseGenerator(modositandoSzoveg: string): string {
    var ujSzoveg: string = "";
    var szovegElemek: string[] = modositandoSzoveg.split(" ");
    for (var i: number = 0; i < szovegElemek.length; i++) {
        if (i == 0) {
            ujSzoveg += szovegElemek[i][0].toLowerCase()
        }
        else {
            ujSzoveg += szovegElemek[i][0].toUpperCase()
        }
        for (var j: number = 1; j < szovegElemek[i].length; j++) {
            ujSzoveg += szovegElemek[i][j].toLowerCase();
        }
    }
    return ujSzoveg;
}


/*3) PrimLista(vizsgaltTomb)
Készíts egy függvényt, ami kiírja melyek a prímszámok a vizsgált tömbödben, ha van ilyen, ha nincs akkor térjen vissza a "Nincs prímszám a tömbben" szöveggel*/

function PrimLista(vizsgaltTomb: number[]): any {
    let primek: number[] = [];
    let primekSzama: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let osztokSzama: number = 0;
        for (let j: number = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primek.push(vizsgaltTomb[i]);
            primekSzama++
        }
    }
    if (primekSzama == 0) {
        return "Nincs prímszám a tömbben";
    }
    else {
        return primek.toString();
    }
}

