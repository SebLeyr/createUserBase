var tab=[];
var cpt=0;
const result = document.querySelector("#resultat");
const nbrCompte = document.querySelector("#nbrCompte");
const error = document.querySelector("#error");

function ajouter() {
    const name = document.querySelector("#name").value;
    const firstName = document.querySelector("#firstName").value;
    const login = document.querySelector("#login").value;
    const mdp = document.querySelector("#mdp").value;

    if(name != "" && firstName != "" && login != "" && mdp != ""){
        tab[cpt] = [name, firstName, login, mdp];
        result.innerHTML += "<p>" + `Nom : ${tab[cpt][0]}, Prénom : ${tab[cpt][1]}, Login : ${tab[cpt][2]}, Mot de passe : ${tab[cpt][3]}` + "</p>";
        cpt ++;
        nbrCompte.innerHTML = `Il y a ${cpt} comptes utilisateur`;
    } else {
        error.innerHTML = "Un champ est vide, veuillez le remplir";
    }
}