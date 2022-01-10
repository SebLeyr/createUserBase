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
    const user = [name, firstName, login, mdp, user];$

    if(name != "" && firstName != "" && login != "" && mdp != ""){
        tab[nbrCompte] = user;
        nbrCompte ++;
        result.innerHTML (`Nom : ${name} Prénom : ${firstName} Login : ${login} Mot de passe : ${mdp}`)
    } else {
        error.innerHTML("Un champ est vide, veuillez le remplir")
    }
}