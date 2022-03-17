// TODO 1: récupérer le titre h2 dans une variable counter
// TODO 2-1: créer une variable majCounter à laquelle on assigne une fonction fléchée
// TODO 2-2: dans la F =>, créer une variable data à laquelle on assigne la fonction fetch()
// TODO 2-3: fetch(), prend en param l'Url de l'API
// TODO 3-1: Tjrs dans la F =>,créer une variable count à laquelle on assigne data
// TODO 3-2: sur la variable data on utilise la fonction .json()
// TODO 4-1: Tjrs dans la F =>,au InnerHTML de counter, assigner la value de count
// TODO 4-2: remmettre le filter de counter en "blur(0)"
// TODO 5: on éxecute notre fonction majCounter

const counter = document.getElementById('counter');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const majCounter = async () => {
    //Data va récup Toutes les données de l'api
    let data = await fetch('https://api.countapi.xyz/hit/sltcava/visites');
    // console.log(data);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    let dataTransformed = await data.json();
    // console.log(dataTransformed);
    counter.innerText = dataTransformed.value;
    counter.style.filter = 'blur(0)';
}
majCounter();

const majUsers = async () => {
    for (let i = 0; i < 13; i++) {
        let data = await fetch('https://adrardev.fr/task/api/task.php?user');
        let dataTransformed = await data.json();
        console.log(dataTransformed);
        let newTitre = document.createElement('h3');
        document.body.append(newTitre);
        newTitre.innerHTML = `${dataTransformed[i].id_user} : ${dataTransformed[i].name_user}`;
    }
};
majUsers();