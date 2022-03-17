// ** mini éditeur de texte - addEventListener - keyup - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3-1: sur monTxt on place un addEventListener qui surveille le clavier et qui exécute une fonction
// TODO 3-2: Dans cette fonction, débrouillez vous pour que la valeur contenue dans monTxt s'affiche dans la div rendu

let monTxt = document.querySelector('textarea');
let rendu = document.querySelector('div');
// monTxt.addEventListener('keyup', function(){
//     rendu.innerHTML = marked(monTxt.value);
// });

// ** Sauvegarder dans localStorage - getItem() - setItem() - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3-1: à la valeur contenue dans monTxt on assigne localStorage
// TODO 3-2: sur localStorage on utilise la fonction getItem("monSuperTexte")
// TODO 4-1: ensuite, SI la valeur dans monTxt est définie,
// TODO 4-2: alors on assigne au innerHTML de rendu, localStorage sur lequel on utilise la fonction getItem("monSuperTexte")
// TODO 5-1: Sur monTxt on place un addEventListener qui surveillle le clavier et exécute une fonction
// TODO 5-2: Dans cette fonction, sur localStorage on utilise la fonction setItem
// TODO 5-3: setItem() prend en 1er param "monSuperTexte", et en 2e param la valeur contenue dans monTxt
// TODO 5-4: on assigne au innerHTML de rendu la valeur contenue dans monTxt

monTxt.value = localStorage.getItem('monSuperTexte')
if(monTxt.value){
    rendu.innerHTML = localStorage.getItem("monSuperTexte");
}
monTxt.addEventListener("keyup", function(){
    localStorage.setItem('monSuperTexte', monTxt.value);
    rendu.innerHTML = localStorage.getItem("monSuperTexte")
});