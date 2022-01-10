var tab=[];
var cpt=0;
const result = document.querySelector("resultat");
const nbrCompte = document.querySelector("nbrCompte");
const error = document.querySelector("error");

function ajouter() {
    const name = document.querySelector("name");
    const firstName = document.querySelector("firstName");
    const login = document.querySelector("login");
    const mdp = document.querySelector("mdp");
    const user = [name, firstName, login, mdp];

    if(name != "" && firstName != "" && login != "" && mdp != ""){
        tab[cpt] = user;
        cpt ++;
        result.innerHTML = `Nom : ${name} Prénom : ${firstName} Login : ${login} Mot de passe : ${mdp}`;
        nbrCompte.innerHTML = `Il y a ${cpt} comptes utilisateur`;
    } else {
        error.innerHTML = "Un champ est vide, veuillez le remplir";
    }
}