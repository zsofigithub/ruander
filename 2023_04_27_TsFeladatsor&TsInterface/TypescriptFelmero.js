function DiakInfo(nev, csoport, típus) {
    if (típus == true) {
        return nev + " " + "Team" + csoport + "-Junior Frontend";
    }
    else {
        return nev + csoport + "-Webfejlesztő";
    }
}
var DiakInfoEredmeny = DiakInfo("Minta Márton", 8, true);
console.log(DiakInfoEredmeny);
function SzovegesErtekeles(jegy) {
    var SzorgalomJegy = "";
    var MagatartasJegy = "";
    if (jegy == 5) {
        var SzorgalomJegy_1 = "Példás";
        var MagatartasJegy_1 = "Példás";
        return [SzorgalomJegy_1, MagatartasJegy_1];
    }
    else if (jegy == 4) {
        var SzorgalomJegy_2 = "Jó";
        var MagatartasJegy_2 = "Jó";
        return [SzorgalomJegy_2, MagatartasJegy_2];
    }
    else if (jegy == 3) {
        var SzorgalomJegy_3 = "Változó";
        var MagatartasJegy_3 = "Változó";
        return [SzorgalomJegy_3, MagatartasJegy_3];
    }
    else if (jegy == 2) {
        var SzorgalomJegy_4 = "Hanyag";
        var MagatartasJegy_4 = "Rossz";
        return [SzorgalomJegy_4, MagatartasJegy_4];
    }
    return [SzorgalomJegy, MagatartasJegy];
}
var SzovegesErtekelesEredmeny = SzovegesErtekeles(2);
console.log(SzovegesErtekelesEredmeny);
function HarommalOszthatokSzama(vizsgaltTomb) {
    var harommalOszthatok = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            harommalOszthatok++;
        }
    }
    return harommalOszthatok;
}
var HarommalOszthatokEredmeny = HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);
console.log(HarommalOszthatokEredmeny);
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var j = 0; j < mennyiseg; j++) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        var szerepelE = false;
        for (var k = 0; k < generaltTomb.length; k++) {
            if (generaltSzam == generaltTomb[k]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            generaltTomb.push(generaltSzam);
        }
        else {
            j--;
        }
    }
    return generaltTomb;
}
var NyeroszamokEredmeny = Nyeroszamok(5, 1, 90);
console.log(NyeroszamokEredmeny);
