document.getElementById("mybutton").addEventListener("click", ellenorzes);

function ellenorzes() {
    let pont = 0;
    
    // első kérdés
    if (document.getElementById("1902").checked){
        pont++;
    }
    
    // második kérdés
    if (document.getElementById("15").checked){
        pont++;
    }

    // harmadik kérdés
    if (document.getElementById("zidane").checked){
        pont++;
    }

    // negyedik kérdés
    if (document.getElementById("bernabeu").checked){
        pont++;
    }

    // ötödik kérdés
    if (document.getElementById("benzema").checked){
        pont++;
    }
    // Eredmény megjelenítése
    if(pont==5){
        alert(`Gratulálok, hibátlan lett, igazi rajongó vagy!`)
    }
    else{
        alert(`Sajnos nem hibátlan, kérlek próbáld újra! (${pont}/5)`)
    }
}


