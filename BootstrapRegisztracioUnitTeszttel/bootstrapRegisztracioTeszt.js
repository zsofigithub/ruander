function ujVisszajelzoSor(tesztneve, visszajelzes) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var visszajelzesMezo = adatSor.insertCell(1);
    tesztNeveMezo.innerHTML = `${tesztneve}`;
    visszajelzesMezo.innerHTML = `${visszajelzes}`;
}


//1) Legkülső div elem azonosító "container"
function teszt01() {
    try {
        let tesztElem = document.querySelectorAll("div");
        if (tesztElem[0].classList == "container") {
            ujVisszajelzoSor("Oldal fő tartalmának igazítása", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Oldal fő tartalmának igazítása", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Oldal fő tartalmának igazítása", "HIBA");
    }
}


//2) Egyes szintű címsor tartalma (innerHTML)
function teszt02() {
    try{
        let tesztElem = document.querySelector("h1");
        if(tesztElem.innerHTML == "Tanfolyam regisztráció") {
            ujVisszajelzoSor("Egyes szintű címsor tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Egyes szintű címsor tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Egyes szintű címsor tartalma", "HIBA");
    }
}


//3) Első input mező típusa text
function teszt03() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[0].type == "text") {
            ujVisszajelzoSor("Első input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező típusa", "HIBA");
    }
}


//4) Első input mező azonosítója "veznev"
function teszt04() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[0].id == "veznev") {
            ujVisszajelzoSor("Első input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező azonosítója", "HIBA");
    }
}


//5) Első input mező bootstrap osztálya "form-control"
function teszt05() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[0].classList.contains("form-control")) {
            ujVisszajelzoSor("Első input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező bootstrap osztálya", "HIBA");
    }
}


//6) Második input mező típusa text
function teszt06() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[1].type == "text") {
            ujVisszajelzoSor("Második input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező típusa", "HIBA");
    }
}


//7) Második input mező azonosítója "kernev"
function teszt07() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[1].id == "kernev") {
            ujVisszajelzoSor("Második input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező azonosítója", "HIBA");
    }
}


//8) Második input mező bootstrap osztálya "form-control"
function teszt08() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[1].classList.contains("form-control")) {
            ujVisszajelzoSor("Második input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező bootstrap osztálya", "HIBA");
    }
}


//9) Harmadik input mező típusa text
function teszt09() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[2].type == "text") {
            ujVisszajelzoSor("Harmadik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező típusa", "HIBA");
    }
}


//10) Harmadik input mező azonosítója fnev
function teszt10() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[2].id == "fnev") {
            ujVisszajelzoSor("Harmadik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező azonosítója", "HIBA");
    }
}


//11) Harmadik input mező bootstrap osztálya "form-control"
function teszt11() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[2].classList.contains("form-control")) {
            ujVisszajelzoSor("Harmadik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező bootstrap osztálya", "HIBA");
    }
}


//12) Negyedik input mező típusa password
function teszt12() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[3].type == "password") {
            ujVisszajelzoSor("Negyedik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező típusa", "HIBA");
    }
}


//13) Negyedik input mező azonosítója pass1
function teszt13() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[3].id == "pass1") {
            ujVisszajelzoSor("Negyedik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező azonosítója", "HIBA");
    }
}


//14) Negyedik input mező bootstrap osztálya "form-control"
function teszt14() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[3].classList.contains("form-control")) {
            ujVisszajelzoSor("Negyedik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező bootstrap osztálya", "HIBA");
    }
}


//15) Ötödik input mező típusa password
function teszt15() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[4].type == "password") {
            ujVisszajelzoSor("Ötödik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező típusa", "HIBA");
    }
}


//16) Ötödik input mező azonosítója pass2
function teszt16() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[4].id == "pass2") {
            ujVisszajelzoSor("Ötödik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező azonosítója", "HIBA");
    }
}


//17) Ötödik input mező bootstrap osztálya "form-control"
function teszt17() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[4].classList.contains("form-control")) {
            ujVisszajelzoSor("Ötödik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező bootstrap osztálya", "HIBA");
    }
}


//18) Hatodik input mező azonosítója email
function teszt18() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[5].id == "email") {
            ujVisszajelzoSor("Hatodik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező azonosítója", "HIBA");
    }
}


//19) Hatodik input mező típusa email
function teszt19() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[5].type == "email") {
            ujVisszajelzoSor("Hatodik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező típusa", "HIBA");
    }
}


//20) Hatodik input mező bootstrap osztálya "form-control"
function teszt20() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[5].classList.contains("form-control")) {
            ujVisszajelzoSor("Hatodik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező bootstrap osztálya", "HIBA");
    }
}


//21) Hetedik input mező típusa tel
function teszt21() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[6].type == "tel") {
            ujVisszajelzoSor("Hetedik input mező típusa", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező típusa", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező típusa", "HIBA");
    }
}


//22) Hetedik input mező azonosítója tel
function teszt22() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[6].id == "tel") {
            ujVisszajelzoSor("Hetedik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező azonosítója", "HIBA");
    }
}


//23) Hetedik input mező bootstrap osztálya "form-control"
function teszt23() {
    try{
        let tesztElem = document.querySelectorAll("input");
        if(tesztElem[6].classList.contains("form-control")) {
            ujVisszajelzoSor("Hetedik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező bootstrap osztálya", "HIBA");
    }
}


//24) Esetleg form-control osztály azonosítót megnézed, minden mezőhöz hozzá van-e rendelve...
function teszt24() {
    try{
        let tesztElem = document.querySelector("input");
        if(tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Input mezőkhöz form-control bootstrap osztály hozzárendelése", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Input mezőkhöz form-control bootstrap osztály hozzárendelése", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Input mezőkhöz form-control bootstrap osztály hozzárendelése", "HIBA");
    }
}


//25) Elsőtől- kilencedik label tartalma...
function teszt25() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[0].innerHTML == "Vezeték név:") {
            ujVisszajelzoSor("Első label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első label tartalma", "HIBA");
    }
}


function teszt26() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[1].innerHTML == "Kereszt név:") {
            ujVisszajelzoSor("Második label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második label tartalma", "HIBA");
    }
}


function teszt27() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[2].innerHTML == "Felhasználói név:") {
            ujVisszajelzoSor("Harmadik label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik label tartalma", "HIBA");
    }
}


function teszt28() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[3].innerHTML == "Jelszó:") {
            ujVisszajelzoSor("Negyedik label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik label tartalma", "HIBA");
    }
}


function teszt29() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[4].innerHTML == "Jelszó ismét:") {
            ujVisszajelzoSor("Ötödik label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik label tartalma", "HIBA");
    }
}


function teszt30() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[5].innerHTML == "E-mail cím:") {
            ujVisszajelzoSor("Hatodik label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik label tartalma", "HIBA");
    }
}


function teszt31() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[6].innerHTML == "Telefonszám:") {
            ujVisszajelzoSor("Hetedik label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik label tartalma", "HIBA");
    }
}


function teszt32() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[7].innerHTML == "Tanfolyam típusa:") {
            ujVisszajelzoSor("Nyolcadik label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Nyolcadik label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Nyolcadik label tartalma", "HIBA");
    }
}


function teszt33() {
    try{
        let tesztElem = document.querySelectorAll("label");
        if(tesztElem[8].innerHTML == "Adatvédelmi nyilatkozat elfogadása") {
            ujVisszajelzoSor("Kilencedik label tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Kilencedik label tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Kilencedik label tartalma", "HIBA");
    }
}


//34) Akár egyeben is le lehet ellenőrizni a small mezőkhöz tartozó osztályokat!
function teszt34() {
    try{
        let tesztElem = document.querySelector("small");
        if(tesztElem.classList.contains("form-text" && "text-muted")) {
            ujVisszajelzoSor("Small mezőkhöz form-text és text-muted bootstrap osztályok hozzárendelése", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Small mezőkhöz form-text és text-muted bootstrap osztályok hozzárendelése", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Small mezőkhöz form-text és text-muted bootstrap osztályok hozzárendelése", "HIBA");
    }
}


//35) Gomb alapértelmezett bootstrap osztálya
function teszt35() {
    try{
        let tesztElem = document.querySelector("button");
        if(tesztElem.classList.contains("btn")) {
            ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "HIBA");
    }
}


//36) Gomb színe
function teszt36() {
    try{
        let tesztElem = document.querySelector("button");
        if(tesztElem.classList.contains("btn-primary")) {
            ujVisszajelzoSor("Gomb színe", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb színe", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb színe", "HIBA");
    }
}


//37) Gomb méretének módosítása, "form-control" segítségével
function teszt37() {
    try{
        let tesztElem = document.querySelector("button");
        if(tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Gomb méretének módosítása form-control segítségével", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb méretének módosítása form-control segítségével", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb méretének módosítása form-control segítségével", "HIBA");
    }
}


//38) Gomb felirata (annak tartalma: innerHtml)
function teszt38() {
    try{
        let tesztElem = document.querySelector("button");
        if(tesztElem.innerHTML=="Regisztrálok") {
            ujVisszajelzoSor("Gomb felirata (annak tartalma: innerHtml)", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb felirata (annak tartalma: innerHtml)", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb felirata (annak tartalma: innerHtml)", "HIBA");
    }
}


//39) Select mezőben lévő elemek száma
function teszt39() {
    try{
        let tesztElem = document.querySelector("select");
        if(tesztElem.length=="4") {
            ujVisszajelzoSor("Select mezőben lévő elemek száma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Select mezőben lévő elemek száma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Select mezőben lévő elemek száma", "HIBA");
    }
}


//40) Select mezőben kiválasztott elemnek az értéke!
function teszt40() {
    try{
        let tesztElem = document.querySelector("select");
        if(tesztElem.selectedIndex=="0" && tesztElem[0].innerHTML=="Webfejlesztő") {
            ujVisszajelzoSor("Select mezőben kiválasztott elemnek az értéke", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Select mezőben kiválasztott elemnek az értéke", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Select mezőben kiválasztott elemnek az értéke", "HIBA");
    }
}






function allTeszt() {
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    teszt12();
    teszt13();
    teszt14();
    teszt15();
    teszt16();
    teszt17();
    teszt18();
    teszt19();
    teszt20();
    teszt21();
    teszt22();
    teszt23();
    teszt24();
    teszt25();
    teszt26();
    teszt27();
    teszt28();
    teszt29();
    teszt30();
    teszt31();
    teszt32();
    teszt33();
    teszt34();
    teszt35();
    teszt36();
    teszt37();
    teszt38();
    teszt39();
    teszt40();
}
allTeszt();