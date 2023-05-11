var eredmenyek = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];
function ObjektumFeltolto(feltoltendoElem) {
    var adatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var darabolandoSor = feltoltendoElem[i].split(" ");
        var objektum = {
            helyezes: Number(darabolandoSor[0]),
            sportolokSzama: Number(darabolandoSor[1]),
            sportag: darabolandoSor[2],
            versenyszam: darabolandoSor[3]
        };
        adatok.push(objektum);
    }
    return adatok;
}
var helsinkiSportok = ObjektumFeltolto(eredmenyek);
function AdatKiiro(adatok) {
    for (var i = 0; i < adatok.length; i++) {
        console.log(adatok[i].helyezes + "," + adatok[i].sportolokSzama + "," + adatok[i].sportag + "," + adatok[i].versenyszam);
    }
}
AdatKiiro(helsinkiSportok);
function PontszerzoHelyezesekSzama(adatok) {
    console.log("3.feladat: Pontszerz\u0151 helyez\u00E9sek sz\u00E1ma: ".concat(adatok.length));
}
PontszerzoHelyezesekSzama(helsinkiSportok);
function MegszerzettErmekSzama(adatok) {
    var Arany = 0;
    var Ezust = 0;
    var Bronz = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            Arany++;
        }
        else if (adatok[i].helyezes == 2) {
            Ezust++;
        }
        else if (adatok[i].helyezes == 3) {
            Bronz++;
        }
    }
    console.log("4.feladat: Arany:".concat(Arany));
    console.log("Ez\u00FCst:".concat(Ezust));
    console.log("Bronz:".concat(Bronz));
    console.log("\u00D6sszesen: ".concat(Arany + Ezust + Bronz));
}
MegszerzettErmekSzama(helsinkiSportok);
function OlimpiaiPontok(adatok) {
    var PontokOsszege = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            PontokOsszege += 7;
        }
        else if (adatok[i].helyezes == 2) {
            PontokOsszege += 5;
        }
        else if (adatok[i].helyezes == 3) {
            PontokOsszege += 4;
        }
        else if (adatok[i].helyezes == 4) {
            PontokOsszege += 3;
        }
        else if (adatok[i].helyezes == 5) {
            PontokOsszege += 2;
        }
        else if (adatok[i].helyezes == 6) {
            PontokOsszege += 1;
        }
    }
    console.log("5.feladat: Olimpiai pontok sz\u00E1ma: ".concat(PontokOsszege));
}
OlimpiaiPontok(helsinkiSportok);
function UszasVagyTorna(adatok) {
    var uszasErmekSzama = 0;
    var tornaErmekSzama = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].sportag == "uszas") {
            uszasErmekSzama++;
        }
        else if (adatok[i].sportag == "torna") {
            tornaErmekSzama++;
        }
    }
    if (uszasErmekSzama > tornaErmekSzama) {
        console.log("6.feladat: \u00DAsz\u00E1s sport\u00E1gban szereztek t\u00F6bb \u00E9rmet.");
    }
    else if (tornaErmekSzama > uszasErmekSzama) {
        console.log("6.feladat: Torna sport\u00E1gban szereztek t\u00F6bb \u00E9rmet.");
    }
    else if (tornaErmekSzama == uszasErmekSzama) {
        console.log("6.feladat: Egyenl\u0151 volt az \u00E9rmek sz\u00E1ma.");
    }
}
UszasVagyTorna(helsinkiSportok);
function LegtobbSportolo(adatok) {
    var maxIndex = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].sportolokSzama > adatok[maxIndex].sportolokSzama) {
            maxIndex = i;
        }
    }
    console.log("7.feladat:");
    console.log("Helyez\u00E9s: ".concat(adatok[maxIndex].helyezes));
    console.log("Sport\u00E1g: ".concat(adatok[maxIndex].sportag));
    console.log("Versenysz\u00E1m: ".concat(adatok[maxIndex].versenyszam));
    console.log("Sportol\u00F3k sz\u00E1ma: ".concat(adatok[maxIndex].sportolokSzama));
}
LegtobbSportolo(helsinkiSportok);
