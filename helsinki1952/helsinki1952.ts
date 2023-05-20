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

  interface helsinki {
    helyezes:number;
    sportolokSzama:number;
    sportag:string;
    versenyszam:string;
  }

  function ObjektumFeltolto(feltoltendoElem:string[]): helsinki[] {
    var adatok:helsinki[]=[];
        for (let i: number = 0; i < feltoltendoElem.length; i++) {
            let darabolandoSor: string[] = feltoltendoElem[i].split(" ");
            let objektum: helsinki = {
                helyezes: Number(darabolandoSor[0]),
                sportolokSzama: Number(darabolandoSor[1]),
                sportag: darabolandoSor[2],
                versenyszam: darabolandoSor[3]
            };
            adatok.push(objektum);
        }
        return adatok;
    }
    var helsinkiSportok=ObjektumFeltolto(eredmenyek);



    function AdatKiiro(adatok: helsinki[]): void {
        for (let i: number = 0; i < adatok.length; i++) {
            console.log(adatok[i].helyezes + "," + adatok[i].sportolokSzama + "," + adatok[i].sportag+ "," + adatok[i].versenyszam);
        }
    }
    AdatKiiro(helsinkiSportok);


    function PontszerzoHelyezesekSzama(adatok:helsinki[]):void{
        console.log(`3.feladat: Pontszerző helyezések száma: ${adatok.length}`);
    }
    PontszerzoHelyezesekSzama(helsinkiSportok);

    function MegszerzettErmekSzama(adatok:helsinki[]):void{
        let Arany:number=0;
        let Ezust:number=0;
        let Bronz:number=0;
        for(let i:number=0;i<adatok.length;i++){
            if(adatok[i].helyezes==1){
                Arany++;
            }
            else if(adatok[i].helyezes==2){
                Ezust++;   
            }
            else if(adatok[i].helyezes==3){
                Bronz++;  
            }
        }
        console.log(`4.feladat: Arany:${Arany}`);
        console.log(`Ezüst:${Ezust}`);
        console.log(`Bronz:${Bronz}`);
        console.log(`Összesen: ${Arany+Ezust+Bronz}`) 

    }
    MegszerzettErmekSzama(helsinkiSportok);

    function OlimpiaiPontok(adatok:helsinki[]):void{
        let PontokOsszege=0;
        for(let i:number=0;i<adatok.length;i++){
            if(adatok[i].helyezes==1){
                PontokOsszege+=7;
            }
            else if(adatok[i].helyezes==2){
                PontokOsszege+=5; 
            }
            else if(adatok[i].helyezes==3){
                PontokOsszege+=4; 
            }
            else if(adatok[i].helyezes==4){
                PontokOsszege+=3; 
            }
            else if(adatok[i].helyezes==5){
                PontokOsszege+=2; 
            }
            else if(adatok[i].helyezes==6){
                PontokOsszege+=1; 
            }
        }
        console.log(`5.feladat: Olimpiai pontok száma: ${PontokOsszege}`);
        
    }
    OlimpiaiPontok(helsinkiSportok);

    function UszasVagyTorna(adatok:helsinki[]):void{
        let uszasErmekSzama:number=0;
        let tornaErmekSzama:number=0;
        for(let i:number=0;i<adatok.length;i++){
            if(adatok[i].sportag=="uszas"){
                uszasErmekSzama++;
            }
            else if(adatok[i].sportag=="torna"){
                tornaErmekSzama++;
            }
    }
    if(uszasErmekSzama>tornaErmekSzama){
        console.log(`6.feladat: Úszás sportágban szereztek több érmet.`)
    }
    else if(tornaErmekSzama>uszasErmekSzama){
        console.log(`6.feladat: Torna sportágban szereztek több érmet.`)
    }
    else if(tornaErmekSzama==uszasErmekSzama){
        console.log(`6.feladat: Egyenlő volt az érmek száma.`)
    }
}
UszasVagyTorna(helsinkiSportok);

function LegtobbSportolo(adatok:helsinki[]):void{
    let maxIndex:number=0;
    for(let i:number=0;i<adatok.length;i++){
        if(adatok[i].sportolokSzama>adatok[maxIndex].sportolokSzama){
            maxIndex=i;
        }
}
    console.log(`7.feladat:`);
    console.log(`Helyezés: ${adatok[maxIndex].helyezes}`);
    console.log(`Sportág: ${adatok[maxIndex].sportag}`);
    console.log(`Versenyszám: ${adatok[maxIndex].versenyszam}`);
    console.log(`Sportolók száma: ${adatok[maxIndex].sportolokSzama}`);
}
LegtobbSportolo(helsinkiSportok);

