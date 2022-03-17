// let bonjour = "Bonjour cher \"Mr.GINGLE\"";
// let choco = 'J\'aime le chocolat';
// console.log(bonjour, choco);

// let prenom = "Martin";
// let age = 22;
// console.log(`Bonjour ${prenom} tu as ${age} ans aujourd'hui, GG`)

// let prenom = "José";
// let age = 54;
// let passion = ["boxe", "joncquilles"];
// let monTablo = [prenom, age, passion]
// console.log(monTablo[2][1]);

// let nom = "Lapin";
// let prenom = "Martin";
// let phrase = [];
// phrase.push(nom, prenom);
// phrase.push(initiale = phrase[0][0]+phrase[1][0]);
// console.log(phrase);

// function moins(a, b){
//     console.log(a-b);
// }
// moins(5,3);

// let noteA = 18;
// let noteB = 12;
// let moyenne = calcul(noteA, noteB);
// function calcul(a,b){
//     return (a + b)/2;
// }
// console.log(moyenne);

// function mention(note){
//     let moyenne = (note[0] + note[1] + note[2])/note.length;
//     if (moyenne >= 15){
//         return "Très bien";
//     }else if (moyenne >= 10){
//         return "Assez bien";
//     }else{
//         return "Refus"
//     }
// }
// console.log(mention([11, 18, 19]));

// let voiture = {
//     nbChevaux : 400,
//     vitesseMax : 200,
//     faiblesse : ["accéleration", "adhérence"],
//     pilotes : {
//         pilote : "Gégé",
//         copilote : "Dédé"
//     }
// }

// voiture.kilometrage = 35000;
// voiture.neon = false;
// voiture.annee = 1999;

// if(voiture.hasOwnProperty("nbChevaux") == true){
//     delete voiture.nbChevaux;
// }

// console.log(voiture);
// console.log(voiture.pilotes.copilote);

// let dessin = [];
// let i = 0;
// while(i<10){
//     i++;
//     dessin.push("#");
//     console.log(dessin);
// }

// let dessin =[];
// for(let i=0 ; i<10; i++){
//     dessin.push('#');
//     console.log(dessin);
// }

// let tab = [1,2,3,4,5,6];
// for(let i=0 ; i<tab.length ; i++){
//     tab[i] ++;
// }
// console.log(tab);

// let maCarte = "RONFLEX";
// let taCarte = "MAGMAR";


// function echange(carte1, carte2){
//     let tempCarte = "";
//     tempCarte += carte1;
//     carte1 = carte2;
//     carte2 = tempCarte;
//     console.log(carte1, carte2);
// }
// echange(maCarte, taCarte);

// const mesTitres = document.body.getElementsByTagName('h1');
// // console.log(mesTitres);
// mesTitres[0].innerText = 'Coucou';

// const superTitre = document.getElementById('super');
// console.log(superTitre);

// const trucsCool = document.getElementsByClassName('cool');

const monTitre = document.getElementsByTagName("h1");
const txt = document.getElementsByTagName('p');
// document.body.insertBefore(txt[0], monTitre[0]);
//document.body.append(monTitre[0]);
//document.body.removeChild(monTitre[0]);
//document.body.replaceChild(monTitre[0], txt[0]);

const newTxt = document.createTextNode('BONJOUR MONDE');
document.body.append(newTxt);



