//variable voor de beschuldiging sectie(form/niet form) button. (Vanaf regel 89)
const beschuldigKnop = document.getElementById("button");

//variablen voor de navigatie waarme je met een 'p' kan switchen tussen de verschillende kaart groepen. (Vanaf regel 147).
const navVerdachtActief = document.getElementById("nav-verdacht");
const navWapenActief = document.getElementById("nav-wapen");
const navLocatieActief = document.getElementById("nav-locatie");

//variablen voor de verdachten kaart img flip, regel 34 t/m 48.
let verdachtenKaart1 = document.querySelector("#verdacht1");
let verdachtenKaart2 = document.querySelector("#verdacht2");
let verdachtenKaart3 = document.querySelector("#verdacht3");

//variablen voor de wapen kaart img flip, regel 51 t/m 65.
let wapenKaart1 = document.querySelector("#wapen1");
let wapenKaart2 = document.querySelector("#wapen2");
let wapenKaart3 = document.querySelector("#wapen3");

//variablen voor de locatie kaart img flip, regel 68 t/m 82.
let locatieKaart1 = document.querySelector("#locatie1");
let locatieKaart2 = document.querySelector("#locatie2");
let locatieKaart3 = document.querySelector("#locatie3");


/*Selecteer en het verwijderen van de "verberg" class om 
er zo voor te zorgen dat de .verdachten kaart sectie als enige zichtbaar is vanaf het begin.*/
/*Selecteren en het toevoegen van de "verberg" class op de .wapens en .loacatie kaart sectie 
zodat die bij het opstarten van het spel niet zichtbaar zijn.*/
document.querySelector(".verdachten").classList.remove("verbergVerdachten");
document.querySelector(".wapens").classList.add("verbergWapens");
document.querySelector(".locaties").classList.add("verbergLocaties");



//functie voor kaartflip van verdachten
function flipVerdachtenKaart() {
    verdachtenKaart1.classList.add("flip");
    verdachtenKaart1.src = "images/verdachten1.png";

    setTimeout(() => {
        verdachtenKaart2.classList.add("flip");
        verdachtenKaart2.src = "images/verdachten2.png"; 
    }, 200);

    setTimeout(() => {
        verdachtenKaart3.classList.add("flip");
        verdachtenKaart3.src = "images/verdachten3.png";
    }, 400); 
};


//functie voor kaartflip van wapens
function flipWapenKaart() {
    wapenKaart1.classList.add("flip");
    wapenKaart1.src = "images/wapen1.png";

    setTimeout(() => {
        wapenKaart2.classList.add("flip");
        wapenKaart2.src = "images/wapen2.png"; 
    }, 200);

    setTimeout(() => {
        wapenKaart3.classList.add("flip");
        wapenKaart3.src = "images/wapen3.png";
    }, 400); 
};


//functie voor kaartflip van locaties
function flipLocatieKaart() {
    locatieKaart1.classList.add("flip");
    locatieKaart1.src = "images/locatie1.png";

    setTimeout(() => {
        locatieKaart2.classList.add("flip");
        locatieKaart2.src = "images/locatie2.png"; 
    }, 200);

    setTimeout(() => {
        locatieKaart3.classList.add("flip");
        locatieKaart3.src = "images/locatie3.png";
    }, 400); 
};



/*EventListener met anonieme functie voor de beschuldiging sectie. 
Het laten verschijnen van de antwoord sectie & 
het veranderen van de afb aan de hand van wat de gebruiker had geselecteerd als antwoord.*/
beschuldigKnop.addEventListener('click', function () {
  
    const juisteVerdachten = 'verdachten2.png';
    const juisteWapen = 'wapen3.png';
    const juisteLocatie = 'locatie1.png';

    /*Website(s) & videos die ik heb gebruikt om de volgende code van regel 98 t/m 100 te begrijpen/schrijven:
    https://stackoverflow.com/questions/8140862/how-to-select-a-value-in-a-select-dropdown-with-javascript
    https://youtube.com/shorts/Ny-0MpL9JPs?si=9--uilenPeGNe0yB
    https://youtu.be/6sGW6Go-f5M?si=hQlijg8OK5ZdXSDx*/
    const gekozenVerdachten = document.getElementById("wie").value;
    const gekozenWapen = document.getElementById("wat").value;
    const gekozenLocatie = document.getElementById("waar").value;

    const afbeeldingWie = document.getElementById("imgWie");
    const afbeeldingWat = document.getElementById("imgWat");
    const afbeeldingWaar = document.getElementById("imgWaar");

    const beschuldigingSectie = document.getElementById("beschuldiging");
    const beschuldigingH2 = document.getElementById("beschuldigingH2");
    const resultaatTekst = document.getElementById("resultaat");


/* Als de "gekozen" variabelen hetzelfde zijn als de "juiste" variablen, 
   dan krijg je het bericht te zien dat de gegeven antw. juist zijn 
   en welke kaarten/afb. ze gekozen hadden. */
    if (gekozenVerdachten == juisteVerdachten && gekozenWapen == juisteWapen && gekozenLocatie == juisteLocatie) {
        beschuldigingH2.textContent = "CORRECT!";
        resultaatTekst.textContent = "Great job! You have found and arrested the killer!";
        beschuldigingH2.style.color = "rgb(235, 190, 132)";
        resultaatTekst.style.color = "rgb(235, 190, 132)";

        // Vervangt de afbeeldingen met de juiste oplossings afbeeldigen. 
        afbeeldingWie.src = "images/verdachten2.png";
        afbeeldingWat.src = "images/wapen3.png";
        afbeeldingWaar.src = "images/locatie1.png";   
    } 
  

    /* Als de "gekozen" variabelen niet hetzelfde zijn als de "juiste" variabelen, dan krijg je het bericht te zien
   dat je antw. fout zijn en je krijgt te zien welke combo de speler had gekozen.*/
    else {
        beschuldigingH2.textContent = "INCORRECT";
        resultaatTekst.textContent = "You have accused the wrong person. You need to fix your mistake and free the innocent. Try again!";
        beschuldigingH2.style.color = "red";
        resultaatTekst.style.color = "red";

        // Vervangt de afbeeldingen met de afbeeldingen van de gekozen oplossing van de speler.
        afbeeldingWie.src = "images/" + gekozenVerdachten;
        afbeeldingWat.src = "images/" + gekozenWapen;
        afbeeldingWaar.src = "images/" + gekozenLocatie;
    };

// Toon de hele sectie met de gekozen antw afbeeldingen en de tekst die aangeeft of het antw. wel of niet klopt. 
// In css had ik deze class een display none waarde/functie/iets gegeven 
// en die haal ik nu dus weg om de sectie te laten verschijnen als er op de button is geklikt.
    beschuldigingSectie.classList.remove('verbergBeschuldiging');
});




/*Afhankelijk van welke "p" van de navigatie die aangeklikt wordt, word de display none waarde(class verberg...) 
toegevoegt of verwijderd van de bijbehorende kaartsectie.Ook verander ik de kleur van de "p" op basis 
van welke sectie nu "actief" oftewel zichtbaar is
Website die ik heb gebruikt om de volgende code van regel 157 t/m 159, 166 t/m 168, 175 t/m 177 te begrijpen/schrijven:
https://www.w3schools.com/jsref/prop_html_style.asp*/
navVerdachtActief.addEventListener('click', function () {
    document.querySelector(".verdachten").classList.remove("verbergVerdachten");
    document.querySelector(".wapens").classList.add("verbergWapens");
    document.querySelector(".locaties").classList.add("verbergLocaties");
    navVerdachtActief.style.color = "rgb(235, 190, 132)";
    navWapenActief.style.color = "rgb(154, 154, 154)";
    navLocatieActief.style.color = "rgb(154, 154, 154)";
});

navWapenActief.addEventListener('click', function () {
    document.querySelector(".verdachten").classList.add("verbergVerdachten");
    document.querySelector(".locaties").classList.add("verbergLocaties");
    document.querySelector(".wapens").classList.remove("verbergWapens");
    navVerdachtActief.style.color = "rgb(154, 154, 154)";
    navWapenActief.style.color = "rgb(235, 190, 132)";
    navLocatieActief.style.color = "rgb(154, 154, 154)";
});

navLocatieActief.addEventListener('click', function () {
   document.querySelector(".locaties").classList.remove("verbergLocaties");
    document.querySelector(".verdachten").classList.add("verbergVerdachten");
    document.querySelector(".wapens").classList.add("verbergWapens");
    navVerdachtActief.style.color = "rgb(154, 154, 154)";
    navWapenActief.style.color = "rgb(154, 154, 154)";
    navLocatieActief.style.color = "rgb(235, 190, 132)";
});


//EventListeners voor de kaartflips, vanaf regel 34 t/m 83 staan die functies voor deze eventlisteners.
verdachtenKaart1.addEventListener ('click', flipVerdachtenKaart);
verdachtenKaart2.addEventListener('click', flipVerdachtenKaart);
verdachtenKaart3.addEventListener('click', flipVerdachtenKaart);

wapenKaart1.addEventListener('click', flipWapenKaart);
wapenKaart2.addEventListener('click', flipWapenKaart);
wapenKaart3.addEventListener('click', flipWapenKaart);

locatieKaart1.addEventListener('click', flipLocatieKaart);
locatieKaart2.addEventListener('click', flipLocatieKaart);
locatieKaart3.addEventListener('click', flipLocatieKaart);
