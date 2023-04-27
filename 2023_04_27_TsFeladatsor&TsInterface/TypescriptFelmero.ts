function DiakInfo(nev:string, csoport:number, típus:boolean):string{
    if(típus==true){
        return nev +" "+ "Team" +csoport + "-Junior Frontend"
    }
    else{
        return nev + csoport + "-Webfejlesztő"
    }
}
let DiakInfoEredmeny=DiakInfo("Minta Márton", 8, true);
console.log(DiakInfoEredmeny);


function SzovegesErtekeles(jegy:number):[string,string]{
    let SzorgalomJegy=""
    let MagatartasJegy=""
    if(jegy==5){
        let SzorgalomJegy="Példás";
        let MagatartasJegy="Példás";
        return[SzorgalomJegy, MagatartasJegy]
    }
    else if(jegy==4){
        let SzorgalomJegy="Jó";
        let MagatartasJegy="Jó";
        return[SzorgalomJegy, MagatartasJegy]
    }
    else if(jegy==3){
        let SzorgalomJegy="Változó";
        let MagatartasJegy="Változó";
        return[SzorgalomJegy, MagatartasJegy]
    }
    else if(jegy==2){
        let SzorgalomJegy="Hanyag";
        let MagatartasJegy="Rossz";
        return[SzorgalomJegy, MagatartasJegy]
    }
    return [SzorgalomJegy, MagatartasJegy]
}
    

let SzovegesErtekelesEredmeny=SzovegesErtekeles(2);
console.log(SzovegesErtekelesEredmeny);

function HarommalOszthatokSzama(vizsgaltTomb:Array<number>):number{
    let harommalOszthatok=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]%3==0){
            harommalOszthatok++
        }
    }
    return harommalOszthatok
}

let HarommalOszthatokEredmeny=HarommalOszthatokSzama([10,23,12,24,31,33,42,20]);
console.log(HarommalOszthatokEredmeny);



function Nyeroszamok(mennyiseg:number, alsoHatar:number, felsoHatar:number):Array<number>{
    let generaltTomb:Array<number>=[];
    for(let j:number=0;j<mennyiseg;j++){
        let generaltSzam=Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        let szerepelE=false
        for (let k = 0; k < generaltTomb.length; k++) {
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
let NyeroszamokEredmeny=Nyeroszamok(5,1,90);
console.log(NyeroszamokEredmeny);