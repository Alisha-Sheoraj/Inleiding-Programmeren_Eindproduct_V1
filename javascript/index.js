//variablen voor de verdachten kaart img flip
let verdachtenKaart1 = document.querySelector("#verdacht1");
let verdachtenKaart2 = document.querySelector("#verdacht2");
let verdachtenKaart3 = document.querySelector("#verdacht3");

//variablen voor de wapen kaart img flip
let wapenKaart1 = document.querySelector("#wapen1");
let wapenKaart2 = document.querySelector("#wapen2");
let wapenKaart3 = document.querySelector("#wapen3");

//variablen voor de locatie kaart img flip
let locatieKaart1 = document.querySelector("#locatie1");
let locatieKaart2 = document.querySelector("#locatie2");
let locatieKaart3 = document.querySelector("#locatie3");



//functie voor kaartflip van verdachten
function flipVerdachtenKaart() {
    verdachtenKaart1.classList.add("flip");
    verdachtenKaart1.src = "images/verdachten4.png";

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

//EventListeners voor de kaartflips
verdachtenKaart1.addEventListener ('click', flipVerdachtenKaart);
verdachtenKaart2.addEventListener('click', flipVerdachtenKaart);
verdachtenKaart3.addEventListener('click', flipVerdachtenKaart);

wapenKaart1.addEventListener('click', flipWapenKaart);
wapenKaart2.addEventListener('click', flipWapenKaart);
wapenKaart3.addEventListener('click', flipWapenKaart);

locatieKaart1.addEventListener('click', flipLocatieKaart);
locatieKaart2.addEventListener('click', flipLocatieKaart);
locatieKaart3.addEventListener('click', flipLocatieKaart);



//variable voor de beschuldiging sectie(form/niet form) button
const beschuldigKnop = document.getElementById("button");

/*EventListener met anonieme functie voor de beschuldiging sectie. 
Het laten verschijnen van de antwoord sectie & 
het veranderen van de afb aan de hand van wat de gebruiker had geselecteerd als antwoord.*/
beschuldigKnop.addEventListener('click', function () {
  
const juisteVerdachten = 'verdachten2.png';
const juisteWapen = 'wapen3.png';
const juisteLocatie = 'locatie1.png';

const gekozenVerdachten = document.getElementById("wie").value;
const gekozenWapen = document.getElementById("wat").value;
const gekozenLocatie = document.getElementById("waar").value;

const afbeeldingWie = document.getElementById("imgWie");
const afbeeldingWat = document.getElementById("imgWat");
const afbeeldingWaar = document.getElementById("imgWaar");

const beschuldigingSectie = document.getElementById("beschuldiging");
const beschuldigingH2 = document.getElementById("beschuldigingH2");
const resultaatTekst = document.getElementById("resultaat");


// Als de 'gekozen' variabelen hetzelfde zijn als de 'juiste' variablen, dan krijg je het bericht te zien dat de gegeven antw. juist is en welke kaarten/afb. ze gekozen hadden.
  if (gekozenVerdachten === juisteVerdachten && gekozenWapen === juisteWapen && gekozenLocatie === juisteLocatie) {
    beschuldigingH2.textContent = "CORRECT!";
    resultaatTekst.textContent = "Great job! You have found and arrested the killer!";
    resultaatTekst.style.color = "white";

    // Vervangt de afbeeldingen met de juiste oplossings afbeeldigen.
    afbeeldingWie.src = "images/" + juisteVerdachten;
    afbeeldingWat.src = "images/" + juisteWapen;
    afbeeldingWaar.src = "images/" + juisteLocatie;    
  } 
  

// Als de 'gekozen' variabelen NIET hetzelfde zijn als de 'juiste' variablen, dan krijg je het bericht te zien dat antw. fout zijn en je krijgt te zien welke combo de gebruiker had gekozen.
  else {
    beschuldigingH2.textContent = "INCORRECT";
    resultaatTekst.textContent = "You have accused the wrong person. You need to fix your mistake and free the innocent. Try again!";
    resultaatTekst.style.color = "red";

    // Vervangt de afbeeldingen met de juiste oplossings afbeeldigen.
    afbeeldingWie.src = "images/" + gekozenVerdachten;
    afbeeldingWat.src = "images/" + gekozenWapen;
    afbeeldingWaar.src = "images/" + gekozenLocatie;
  };

// Toon de hele sectie met de gekozen antw afbeeldingen en de tekst die aangeeft of het antw. wel of niet klopt. 
// In css had ik deze class een display none waarde/functie/iets gegeven 
// en die haal ik nu dus weg om de sectie te laten veerschijnen als er op de button is geklikt.
beschuldigingSectie.classList.remove('verbergBeschuldiging');
});




//variablen voor de navigatie waarme je met een 'p' kan switchen tussen de verschillende kaart groepen.
const navVerdachtActief = document.getElementById("nav-verdacht");
const navWapenActief = document.getElementById("nav-wapen");
const navLocatieActief = document.getElementById("nav-locatie");
const mainSection = document.querySelector(".main");


//Selecteer en 'remove' de display none waarde van de class "verdachten" zodat het zichtbaar is vanaf het begin.
//Selecteer en 'add' de display none waarde van de classes "wapens" & "locaties" waardoor ze niet zichtbaar zijn.
document.querySelector(".verdachten").classList.remove("verbergVerdachten");
document.querySelector(".wapens").classList.add("verbergWapens");
document.querySelector(".locaties").classList.add("verbergLocaties");


//Afhankelijk van welke 'p' er aangeklikt wordt word de display none waarde toegevoegt of verwijderd.
navVerdachtActief.addEventListener('click', function () {
    document.querySelector(".verdachten").classList.remove("verbergVerdachten");
    document.querySelector(".wapens").classList.add("verbergWapens");
    document.querySelector(".locaties").classList.add("verbergLocaties");
});

navWapenActief.addEventListener('click', function () {
    document.querySelector(".verdachten").classList.add("verbergVerdachten");
    document.querySelector(".locaties").classList.add("verbergLocaties");
    document.querySelector(".wapens").classList.remove("verbergWapens");
    
});

navLocatieActief.addEventListener('click', function () {
   document.querySelector(".locaties").classList.remove("verbergLocaties");
    document.querySelector(".verdachten").classList.add("verbergVerdachten");
    document.querySelector(".wapens").classList.add("verbergWapens");
});

