// ** addEventListener - capter un evènement clavier - "keypress" - array.includes()
// TODO 1: Dans une variable leTexte, récupérer l'input
// TODO 2: Une variable txtTab initialisée avec un tableau vide
// TODO 3: Une variable voyelles, un tableau contenant toutes les voyelles aeiouy
// TODO 4: sur leText placer un addEventListener qui écoute "keypress" et execute une fonction qui a unEvent en paramètre
// TODO 5-1: Dans cette fonction, on stock dans une variable uneTouche ce que tape l'utilisateur au clavier
// TODO 5-2: Ensuite, un if vérifier l'inverse de : voyelles qui inclut uneTouche
// TODO 5-3: Si cette condition est remplie alors ajouter uneTouche au tablau txt
// TODO 6-1: Hors du If et toujours dans le addEventListener, console log de txt sur quoi on utilise la fonction .join()
// TODO 6-2: En paramètre de join() on passe "--"

let leTexte = document.querySelector('input');
let txtTab = [];
let voyelles = ['a','e', 'i', 'o', 'u', 'y'];
leTexte.addEventListener("keypress", function(unEvent){
    let uneTouche = unEvent.key;
    // console.log(uneTouche);
    if(!voyelles.includes(uneTouche)){
        txtTab.push(uneTouche);
    };
    console.log(txtTab.join('--'));
});