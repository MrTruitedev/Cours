// ** REGEX 
// TODO : Une page html avec un formulaire de connexion (login et mot de passe)
// TODO : faire un programme JS qui va vérifier la saisi du login et mot de passe
// TODO : Le login doit être au format mail (doit contenir un @ et un . )
// TODO : Le MDP doit contenir : (entre 6 et 8 caractères) (1 caractère spécial minimum) (1 chiffre)
// TODO : Si le login n’est pas bon l'input est rouge sinon il est en vert
// TODO : Si le MDP n’est pas valide on affiche une explication en rouge (si MDP trop long, trop court ne contient pas de chiffres, ne contient pas de caractère spécial)
// TODO : Si le MDP est valide on affiche un message en vert "Mot de passe valide"

let login = document.querySelector('#login');
let mdp = document.querySelector('#password');

login.addEventListener('keyup', function(){
    let regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    if(regex.test(login.value) == false){
        login.style.backgroundColor = 'red';
    }else{
        login.style.backgroundColor = 'green';
    }
});
const resultatPassword = document.querySelector('#resultatPassword');

mdp.addEventListener("keyup",function(){
    //carDecimal = regex pour les décimaux
    let carDecimal = /\d/;
    //CarSpeciaux = regex dans laquelle j'ai mis les caractères spéciaux que je veux avoir 
    // le $, le &, le @, le !, le ?
    let carSpeciaux = /[$&@!?]/;
    //erreur: dans ca on va cumuler les message d'erreur que l'on affichera dans la div en dessous du fromulaire
    let erreur = "";

    if(password.value.length < 6){
        erreur += "<li>Le mot de passe est trop short</li>";
    }
    else if(password.value.length > 8){
        erreur += "<li>Le mot de passe est trop Long</li>";
    }
    //Si le password ne match pas de caractère decimal, on indique que le password doit contenir un chiffre
    if(!password.value.match(carDecimal)){
        erreur +="<li>Doit contenir un chiffre</li>";
    }
    //Idem si le password ne match pas de caractère spéciaux ("$","&","@", etc..)on indique que le password doit contenir caractère special
    if(!password.value.match(carSpeciaux)){
        erreur +="<li>Doit contenir un Caractère spécial $&@!? !!!!!</li>";
    }

    //Petit check si la variable erreur n'est pas vide, on affiche les erreur dans la <li></li> sous le form
    if(erreur !== ""){
        resultatPassword.innerHTML = "MDP : <ul>" + erreur + "</ul>";
        resultatPassword.style.border = "2px solid red";
    }
    else{
        resultatPassword.innerHTML = "MDP : VALIDE";
        resultatPassword.style.border = "2px solid green";
    }
})
