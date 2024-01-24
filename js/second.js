let prenom = prompt("Quel est ton prénom ?");
let nom = prompt("Quel est ton nom ?");
let age = parseInt(prompt("Quel est ton age ?"));
let age_future = age+1;
console.log(`bonjour ${prenom} ${nom}`);
console.log(`Dans un ans vous aurez ${age_future} ans`);

let largeur = parseInt(prompt("Donne la largeur du rectangle ?"));
let longueur = parseInt(prompt("Donne la longueur du rectangle ?"));

let retangle = largeur * longueur;
console.log(`l'aire du rectangle est de ${retangle} cm2.`);


(function (){
    alert("fonction anonyme")
    let rayon = parseInt(prompt("Donne moi le rayon du cercle ?"));

    let cercle = rayon * rayon;
    // console.log(cercle);
    let resultat = cercle * 3.14;
    console.log(`l'aire du cercle est de ${resultat} cm2`);
    return resultat;
})();
