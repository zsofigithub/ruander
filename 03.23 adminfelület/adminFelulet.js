aktivalo.addEventListener('click', mindenCheck);
function mindenCheck(){
    let elemLista=document.querySelectorAll(".allapot");
    for(let i=0;i<elemLista.length;i++){
         elemLista[i].checked=true;
    }
}

deaktivalo.addEventListener("click", mindenUnCheck);

function mindenUnCheck(){
    let elemLista=document.querySelectorAll(".allapot");
    for(let i=0;i<elemLista.length;i++){
        elemLista[i].checked=false;
    }
}

aktinakt.addEventListener("click", AktInakt);

function AktInakt(){
    let elemLista=document.querySelectorAll(".allapot");
    for(let i=0;i<elemLista.length;i++){
        if(elemLista[i].checked==true){
            elemLista[i].checked=false;
            aktinakt.innerHTML="Mindenkit aktivál";
        }
    
        else{
        elemLista[i].checked=true;
        aktinakt.innerHTML="Mindenkit inaktivál"
        }
    }
}





//Szorgalmi: Kijelölés megfordítása
//Illetve a két check gomb egy gombra való megírása

csikozasbe.addEventListener("click",CsikozasBe);
function CsikozasBe(){
    let tableObjektum=document.querySelector("table");
    tableObjektum.classList.add("table-striped");
}

csikozaski.addEventListener("click",CsikozasKi);
function CsikozasKi(){
    let tableObjektum=document.querySelector("table");
    tableObjektum.classList.remove("table-striped");
}


csikozas.addEventListener("click", Csikozo);
function Csikozo(){
    let tableObjektum=document.querySelector("table");
    let allapot=tableObjektum.classList;
    if(allapot="table-striped"){
        tableObjektum.classList.toggle("table-striped");
    }
    else{
        tableObjektum.classList.toggle("table-striped");
    }
}
//Illetve a két "sávozás" gomb egy gombra való megírása


darkMode.addEventListener("click",DarkMode);
function DarkMode(){
    let tableObjektum=document.querySelector("table");
    tableObjektum.classList.remove("table-light");
    tableObjektum.classList.add("table-dark");
}

lightMode.addEventListener("click",LightMode);
function LightMode(){
    let tableObjektum=document.querySelector("table");
    tableObjektum.classList.remove("table-dark");
    tableObjektum.classList.add("table-light");
}

darklight.addEventListener("click",DarkLight);
function DarkLight(){
    let tableObjektum=document.querySelector("table");
    if(tableObjektum.class="table-dark"){
        tableObjektum.classList.toggle("table-dark");
        tableObjektum.classList.toggle("table-light");
       
    }
    else if(tableObjektum.class!="table-dark"){
        tableObjektum.classList.toggle("table-light");
        tableObjektum.classList.toggle("table-dark");
        
    }
}





tesztSor.addEventListener("click",TesztsorBeszuras);
function TesztsorBeszuras(){
    let tableObjektum=document.querySelector("table");
    let sor=tableObjektum.insertRow();
    let vezNevCella=sor.insertCell();
    let kerNevCella=sor.insertCell();
    let emailCella=sor.insertCell();
    let telefonCella=sor.insertCell();
    let beosztasCella=sor.insertCell();
    let aktivalCella=sor.insertCell();

    vezNevCella.innerHTML="teszt";
    kerNevCella.innerHTML="teszt";
    emailCella.innerHTML="teszt";
    telefonCella.innerHTML="teszt";
    beosztasCella.innerHTML="teszt";
    aktivalCella.innerHTML="<input type=\"checkbox\" class=\"allapot\">";
}