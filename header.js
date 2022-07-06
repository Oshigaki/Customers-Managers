
var heuresDiv= document.querySelector('.date-container');
var showTime= document.querySelector('.time-container');

var displayHour = function(){
    var today, annee, listeMois, mois, listeJours,jourNumero, jourNom,
    heures,minutes, secondes, deuxChiffres;

today= new Date();

annee = today.getFullYear();

listeMois = ["Janvier","Février", " Mars" ,"Avril", "Mai", "Juin", "Juillet",
"Août", "Septembre", "Octobre", "Novembre", "Decembre"];

mois = listeMois[today.getMonth()];

jourNumero = today.getDate();
listeJours = ["Dimanche", "Lundi","Mardi","Mercredi","Jeudi", "Vendredi","Samedi"];

jourNom= listeJours[today.getDay()];

deuxChiffres = function(element){
    if(element < 10){
        return element = "0" + element ;
    } else{
        return element;
    }
}
heures = deuxChiffres(today.getHours());

minutes = deuxChiffres(today.getMinutes());

secondes = deuxChiffres(today.getSeconds());

//Affichage da la date et de l'heure
showTime.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;
heuresDiv.textContent = heures + ":" +minutes + ":" + secondes + "";


setTimeout(displayHour, 1000);

}

displayHour();
console.log(displayHour)

