//! Retourne le nom de domaine d'une page web ou d'une addresse mail
// function getDomaine(txt){
//     if (txt.indexOf("@">0)) {    //Addresse mail
//         return txt.substring(txt.indexOf("@")+1);
//     } else if(txt.indexOf("://")>0) {   //Page web
//         if (txt.indexOf("/", 8)>0){
//             return txt.substring(txt.indexOf("://")+3, txt.indexOf("/",8));
//         } else {
//             return txt.substring(txt.indexOf("://")+3);
//         }
//     } else {
//         return "";
//     }
// }
// var page ="http://www.toutjavascript.com/reference.ref-string.length.php";
// var goog ="https://www.google.fr";
// var mail="olivier@toutjavascript.fr";
// console.log(getDomaine(page));
// console.log(getDomaine(goog));
// console.log(getDomaine(mail));

//! Completer une chaine de caractere

// var lib= ["Menu du jour", "Champagne", "Café"];
// var val = [19.9, 109, 1.79];

// for(let i=0 ; i<lib.length ; i++){
//     console.log(lib[i].padEnd(20, ".") + val[i].toFixed(2).padStart(18));
// }

//! Table des caracteres ascii

// var ascii ="";
// for (let i=0 ; i<256 ; i++){
//     ascii +="<div class ='indice'>"+i+"</div>";
//     ascii +="<div class = 'char'>"+String.fromCharCode(i)+"</div>";
//     ascii +="<div class = 'break'></div>";
// }
// document.getElementById("ascii").innerHTML=ascii;

//! Encodage des caracteres spéciaux

// console.log(encodeURIComponent("Hello World"));
// console.log(encodeURIComponent("Caractères \"spéciaux\" ?"));

//! Executer une chaine js

// eval("var compteur=10+1");
// eval("compteur++");
// eval(document.getElementById("monH1").innerHTML = compteur);

//! Regexp

// var regexp = /^[0-9a-zA-Z._-]{3-20}$/ //*Motif pour un pseudonyme sur 3-20 caracteres
// var regexp2 = /[0-9]{2}[-/]{1}[0-9]{2}[-/]{1}[0-9]{4}/ //* Motif pour date au format JJ/MM/AA 
// var regexp3 = /[0123][0-9]{1}[-/]{1}[01][0-9]{1}[-/]{1}[0-9]{4}/ //* Motif pour date au format JJ/MM/AAAA où jour ne peut commencer que par 0.1.2.3, mois pas 0.1
// var regexp4 = /^[a-z0-9\-_]+[a-z0-9\.\-_]*@[a-z0-9\-_]{2,}\.[a-z\.\-_]+[a-z\-_]+$/i; //* Motif pour adresse mail
// var regexp5 = /((ht|f)tps?:\/\/\S*)/gi; //*Motif pour URL

// var txtDate="Johnny est né le 15/06/1943 et est mort le 05-12-2017"
// console.log(regexp3.test(txtDate));
// console.log(regexp3.exec(txtDate));

// var mail1 = "contact@google.fr";
// var mail2 = "contact.client1@france.google.com";
// var mail3 = "contact client@google.fr";
// var mail4 = "contact@google.fr";
// var mail5 = "mail: contact@google.fr";
// var mail6 = "contact-client-75000.mail-google.fr";
// console.log(regexp4.test(mail1));
// console.log(regexp4.test(mail2));
// console.log(regexp4.test(mail3));
// console.log(regexp4.test(mail4));
// console.log(regexp4.test(mail5));
// console.log(regexp4.test(mail6));

// var txt = "On connait tous 11/11/1918, 08/05/1945, 14/07/1789";
// console.log(txt.match(regexp3));

// var txt = document.getElementById("monDiv").innerHTML;
// txt=txt.replace(regexp5, '<a href="$1">$1</a>');
// document.getElementById("monDiv").innerHTML=txt;

// var contenu = document.querySelector("div#texte").innerHTML; //* Report du contenu formaté dans div#formatage 
// document.querySelector("div#formatage").innerHTML = formaterTexteYoutube(contenu); //* Fonction de formatage du contenu 
// function formaterTexteYoutube(t) {
//     var regYoutube = new RegExp("(https://youtu.be/)([0-9a-zA-Z]+)(\2s*)", "gi");;
//     return t.replace(regYoutube, "<div class=\"youtube\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/$2\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>");
// }

// var prenom ="Jean, Robert, Gérard ; Louis, Arthur, Jean-luc";
// var regSep = /[ ,;]+/gi;
// var prenoms = prenom.split(regSep);
// console.log(prenoms)

//! Conversion de type de données
//! Convertir une chaine en nombres

// console.log(parseInt(10));
// console.log(parseInt("10zz"));
// console.log(parseInt("a"));
// console.log(parseFloat("10.32"));
// console.log(parseFloat("1.3e2"));

//! Nombres après la virgule

// function getHumanSize(s){
//     s=parseInt(s);   //Pour s'assurer que le parametre d'entrée est un entier
//     if(s<1024){
//         return s+" o";
//     } else if(s<1024*1024){
//         return (s/1024).toFixed(1)+" ko";
//     } else if(s<1024*1024*1024){
//         return (s/1024/1024).toFixed(1)+" mo";
//     }else {
//         return (s/1024/1024/1024).toFixed(1)+ " go"
//     }
// };
// console.log(getHumanSize(1050));
// console.log(getHumanSize(400000));
// console.log(getHumanSize(5000000));

//! Script dé math.random
// function getTirageDe(n){
//     return Math.floor(n * Math.random() + 1)
// }
// console.time("Boucle");
// var resultats = new Array(0,0,0,0,0,0,0);
// var nbTirage=6e6;
// for(let i=0 ; i<nbTirage ; i++){
//     var de=getTirageDe(6);
//     resultats[de]++;
// }
// console.timeEnd("Boucle");
// console.log(resultats);

//! Affichage formaté de nombres

//* format par défaut de l'appareil

// var int1=new Intl.NumberFormat();
// console.log(int1.format(8560.154));
// console.log(int1.format(123456789.154));

//* format français de montant en euros

// var int2=new Intl.NumberFormat("fr-FR", {style : "currency", currency : "EUR", currencyDisplay:"symbol"});
// console.log(int2.format(5000));
// console.log(int2.format(14.99));

//* Format américain de montant en dollars

// var int3=new Intl.NumberFormat("en-US", {style:"currency", currency : "USD", currencyDisplay:"symbol"});
// console.log(int3.format(5000));
// console.log(int3.format(1400.99));

//! Perfomance du BigInt

// Initialisation du tableau des nbs premiers
// var premiers=[2];
//Est ce que n est un nombre premier ?
// function isPremier(n){
//     let racine = Math.round(Math.sqrt(n)+1);    // Racine carré de n
     // Boucle sur tous les nombres premiers déjà identifiés
//     for(let i=0; i<premiers.length ; i++ ){
//         let j = premiers[i];    //j = ième nombre premier déjà trouvé
//         if(n % j ==0) {
             //Le reste n / j est 0
             //donc n est divisible par j : n n'est pas premier
//             return false;
//         }
//         if(j>racine) {
             //On a depassé la racine carrée de n
             // Tous les divisibles possibles sont passés
             // On sort de la boucle
//             break;
//         }
//     }
//     return true;    // n est donc premier si pas trouvé de divisible avant
// }

// Traitement principal des premier de 1 à nb

// function getPremiers(nb){
//     console.time("getPremiers("+nb+") avec Number");
    // Boucle sur i commençant à 3 jusque nb en evitant les nombre pairs
    // for (let i=3 ; i<nb ; i+=2){
    //     if(isPremier(i)) {
            // Si i est premier on l'ajoute au tableau des premiers
               // premiers.push(i);
    //     }
    // }
    // Affichage du temps de traitement et du tableau des premiers
//     console.timeEnd("getPremiers("+nb+") avec Number");
//     console.log(premiers.length+" nombre premiers trouvés jusque "+nb);
//     console.log("Plus grand trouvé = "+premiers[premiers.length-1]);
//     console.log(premiers);
// }

//! Dates methodes de lecture
// var date1 = new Date(2019, 11, 25, 23, 59, 59);
// var date2 = new Date(2019,1,29);
// var date3 = new Date(2019, 1, 28, 28, 0, 0);
// var date4 = new Date(1234567890000);
// function formatDate(dt){
    // Definition des tableaux de libellés des jours et des mois
    // var jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    var mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre");
    // var j = dt.getDay();
    // var d = dt.getDate();
    // if (d == 1){d+="er"};   // La date est le 1, on affiche 1er
    // var m = dt.getMonth();
    // var y = dt.getFullYear();
    // var h = dt.getHours();
    // if (h<10){h="0"+h}  // L'heure sur un caractere, on ajoute 0
    // var i = dt.getMinutes();
    // if (i<10){i="0"+i};     //Les minutes sur un caractere, on ajoute 0
    // var s = dt.getSeconds();
    // if (s<10){s="0"+s};     // Les secondes sur un caractere, on ajoute 0
    //Retour des differents elements concatenes
//     return jours[j]+" "+d+" "+mois[m]+" "+y+" "+h+":"+i+":"+s;
// }
// console.log(formatDate(date1));
// console.log(formatDate(date2));
// console.log(formatDate(date3));
// console.log(formatDate(date4));

//!Calculer date d'hier

// var hier=new Date();
// hier.setTime(hier.getTime() - 24*60*60*1000)
// console.log(hier)

//! Calculer temps entre 2 dates

// var jour = new Date(2022,2,17);
// var noel = new Date(jour.getFullYear(),11,25);
// var nb = (noel.getTime()-jour.getTime())/(24*60*60*1000);
// console.log(formatDate(jour));
// console.log(formatDate(noel));
// console.log(nb);

//! Affichage formaté des dates
//! Format international

// var intl = new Intl.DateTimeFormat("fr-FR", {hour12 : false, hour:"2-digit",minute: "2-digit", second:'2-digit'});
// var dt = new Date();
// console.log('Il est exactement '+intl.format(dt));

// var intl2 = new Intl.DateTimeFormat("fr-FR", {hour12: false, weekday: "long", year: "numeric", month:"long", weekday:"long",day:"numeric", hour:"2-digit", minute:"2-digit", second:"2-digit"});
// var dt2 = new Date();
// console.log(intl2.format(dt2));

//! Array
// var jours = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche");
// console.log(jours.toString());

//! Copie de tableau

// var days = [];
// for(let i=0 ; i<jours.length ; i++){
//     days[i] = jours[i];
// };
// days[0]="Mon";
// console.log(jours);
// console.log(days);

//! Tableaux speciaux
//! Tableaux associatifs

// var monnaies=[];
// monnaies["EUR"]="Euro";
// monnaies["USD"]="Dollar américain";
// monnaies["BTC"]="Bitcoin";
// console.table(monnaies);

//! Tableaux multidimensionnels

// var clients=[];
// clients["Pierre"] = [24, 5, 807.50];
// clients["Paul"] = [37, 3, 462.25];
// clients["Jacques"] = [43, 2, 78.45];
// console.table(clients)

//! Tableaux d'objets

// var clients = [
//     {nom:"Pierre", age:24, nb:5, ca:807.26},
//     {nom:"Paul", age:37, nb:3, ca:462.23},
//     {nom:"Jacques", age:43, nb:2, ca:78.45}
// ];
// console.table(clients);

//! Methode every()

// var nombres=[4,8,1000,1500, 3];
// console.log(nombres.every(function(valeur){
//     return (valeur%2 == 0)
// }));

// console.log(nombres.every(valeur => valeur%2 == 0));

// var nombres=[4,8,3,11,12,15];
// var pairs=nombres.filter(function(valeur){
//     return (valeur%2 == 0);
// });
// console.log(pairs.toString());

//! forEach()

// jours.forEach(function(jour,indice,tableau){
//     tableau[indice]=jour.toUpperCase();
// });
// console.log(jours.toString());

//! map()

// var majMois = mois.map(m=>m.toUpperCase());
// console.log(majMois.toString());

//! reduce()

// var valeurs = [10,20,30,40,50];
// var somme = valeurs.reduce(function(accu, valeur){return accu+valeur});
// console.log(somme);

// var cumul = valeurs.reduce(function(accu, valeur,indice,origine){
//     console.log("Indice = "+indice+" : accu = "+accu+" / valeur = "+valeur+" - TAB = "+origine.toString());
//     return accu+valeur;
// });

// var moyenne = valeurs.reduce(function(accu,valeur,indice,origine){
//     if(indice<origine.length-1){
//         return accu+valeur;
//     }else{
//         return (accu+valeur)/origine.length;
//     }
// });
// console.log(moyenne);

//! Melanger un tableau

// function shuffle(tab) {
//     tab.sort(function(a,b){
//         return Math.random()- Math.random();
//     });
// }
// shuffle(mois);
// console.log(mois.toString());

//! Extraire un random element

// function arrayRand(tableau, nb=1){
    // Création du tableau temporaire de travail
    // var tmp = [];
    // tableau.forEach(function(e){
    //     tmp.push(e);
    // });
    //Melange
    // shuffle(tmp);
    // Retour du premier element ou d'une tranche
//     if(nb == 1){
//         return tmp[0];
//     }else{
//         return tmp.slice(0,nb);
//     }
// };
// console.log(arrayRand(mois));
// console.log(arrayRand(mois, 3).toString());

//! Dédoublonner un tableau

// function arrayUnique(tableau) {
//     var tmp = [];
//     tableau.forEach(function(e){
//         if(tmp.indexOf(e) == -1) {      // Si e n'est pas dans temp
//             tmp.push(e);
//         }
//     });
//     return tmp;
// }
// var doublons = ["Jean", "Gérard", "Pierre", "Paul", "Jean", "Paul", "Jacques"];
// console.log(doublons.toString());
// console.log(arrayUnique(doublons).toString());

//! Les ensembles SET
//! L'objet set

// const jours = new Set(["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"]);
// console.log(jours);

//! Methodes et proprietes de set

var bee = new Set(["noire","buckfast", "caucasica"]);
// console.log(bee);       //Set(3) {"noire","buckfast","caucasica"}
// console.log(bee.size);      // 3
// console.log(bee.has("buckfast"));       // True
// console.log(bee.has("carnica"));        // False
// bee.add("carnica").add("ligusta").add("buckfast");      // Buckfast est ignoré
// console.log(bee.size);
// bee.delete("buckfast");
// console.log(bee);
// bee.clear();
// console.log(bee.size);

//! Parcourir les elements de l'ensemble

// var i=0;
// for(var element of bee){
//     i++;
//     console.log("Element "+i+" "+element);
// };

//! Parcourir les elements de l'ensemble avec forEach()

// bee.forEach(function(element){
//     console.log(element);
// });

//! Conversion array et set

// var bees = Array.from(bee);
// console.log(bee);
// console.log(bees);

//! Retourne un tableau dédoublonné depuis tabOrigine

// function arrayUniqueSet(tabOrigine){
//     let ens = new Set(tabOrigine);
//     return Array.from(ens);
// }
// var tab = new Array (9,6,3,"3",9,8,3,10,9,"3","9");
// console.log(tab);
// console.log(arrayUniqueSet(tab));

//! Dictionnaire MAP

var dic = new Map([ ["acer","érable"], ["quercus", "chêne"] ]);
console.log(dic.size);
console.log(dic);
dic.set("Malus","Pommier");
dic.set("Fagus","Hêtre");
console.log(dic.get("Malus"));
console.log(dic.has("populus"));
console.log(dic.get("populus"));

dic.forEach(function(valeur,cle){
    console.log(cle+" : "+valeur);
});