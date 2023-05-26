function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}






function Teszt01(){
    try{
        FuggvenyVisszajelzoSor("Ékezetes betűk száma","Géza kék az ég",3,EkezetesBetukSzama("Géza kék az ég"));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Géza kék az ég");

    }
}

function Teszt02(){
    try{
        FuggvenyVisszajelzoSor("Ékezetes betűk száma","Dübörgő háború",5,EkezetesBetukSzama("Dübörgő háború"));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Dübörgő háború");

    }
}

function Teszt03(){
    try{
        FuggvenyVisszajelzoSor("Ékezetes betűk száma","A programozás nem könnyű",3,EkezetesBetukSzama("A programozás nem könnyű"));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "A programozás nem könnyű");

    }
}


function Teszt04(){
    try{
        FuggvenyVisszajelzoSor("camelCase Generátor","Géza kék az ég","gézaKékAzÉg",camelCaseGenerator("Géza kék az ég"));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("camelCase Generátor", "Géza kék az ég", "gézaKékAzÉg");

    }
}

function Teszt05(){
    try{
        FuggvenyVisszajelzoSor("camelCase Generátor","A programozás nem könnyű","aProgramozásNemKönnyű",camelCaseGenerator("A programozás nem könnyű"));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("camelCase Generátor", "A programozás nem könnyű","aProgramozásNemKönnyű");

    }
}

function Teszt06(){
    try{
        FuggvenyVisszajelzoSor("camelCase Generátor","Remélem Minden Teszt Jól Lefut","remélemMindenTesztJólLefut",camelCaseGenerator("Remélem Minden Teszt Jól Lefut"));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("camelCase Generátor", "Remélem Minden Teszt Jól Lefut", "remélemMindenTesztJólLefut");

    }
}


function Teszt07(){
    try{
        FuggvenyVisszajelzoSor("Prímlista",[3,5,7,12,16],[3,5,7],PrimLista([3,5,7,12,16]));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímlista",[3,5,7,12,16], [3,5,7]);

    }
}

function Teszt08(){
    try{
        FuggvenyVisszajelzoSor("Prímlista",[12,16,21,28],"Nincs prímszám a tömbben",PrimLista([12,16,21,28]));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímlista",[12,16,21,28], "Nincs prímszám a tömbben");

    }
}

function Teszt09(){
    try{
        FuggvenyVisszajelzoSor("Prímlista",[2,8,11,17,24,26,29],[2,11,17,29],PrimLista([2,8,11,17,24,26,29]));
    }
    catch{
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímlista",[2,8,11,17,24,26,29], [2,11,17,29]);

    }
}








function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
}
TesztFuttato();
