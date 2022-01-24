// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}
// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());
// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    n*=2;
    console.log(n);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n){
    n*=2;
    return(n);
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99))
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a=f4(99);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(n1,n2){
    console.log(n1+n2);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(n1,n2){
    return(n1+n2);
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a+=f6(42,77);
console.log(a);
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(n1,n2){
    if(n1<n2){
        return n2;
    } else {
        return n1;
    }
}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(n1,n2,n3){
    if(n1<n2 && n3<n2){
        return n2;
    } else if(n1<n3 && n2<n3) {
        return n3;
    } else {
        return n1;
    }
}
function f10(n1,n2,n3){
    if(n1>=n2){
        if(n1>n3){
            return n1;
        } else {
            return n3;
        }
    } else {
        if(n2>n3){
            return n2;
        } else {
            return n3;
        }
    }
}

function f11(n1,n2,n3){
    if(n1>= n2){
        return f7(n1,n3);
    } else {
        return f7(n2,n3);
    }
}
function f12(n1,n2,n3){
    return f7(f7(n1,n2),n3);
}
console.log (f12(11,10,5));
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(n1,mot){
    for(let i=0 ; i<n1 ; i++ )
    console.log(mot);
}
f9(6, "Bonjour");