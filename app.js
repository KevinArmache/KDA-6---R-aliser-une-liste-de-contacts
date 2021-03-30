//CREATION VARIABLE ET CONNEXION POUR RECUPERATION

var prenomHTML = document.querySelector("#Prenom");
var nomHTML = document.querySelector("#Nom");
var buttonHTML = document.querySelector("#Button");
var selectHTML = document.querySelector("#mySelect");
var imageHTML = document.querySelector("#Image");
var bioHTML = document.querySelector("#Bio");
var divEnvoi = document.querySelector("#BlockEnvoi");
// TABLEAU DE RECEPTION DES CONTENUS
var reception = [];
// STYLE POUR LA RECEPTION DES CONTENUS
divEnvoi.style.display = "flex";
divEnvoi.style.flexWrap = "wrap";
divEnvoi.style.justifyContent = "center";

// CREATION D'UNE FONCTION POUR L'AFFICHAGE DU CONTENU
function afficher() {

// CREATION DES VARIABLES 

  var personne = reception[reception.length - 1];
  var gauche = document.createElement("div");
  var droite = document.createElement("div");
  var suppression_img = document.createElement("img");
  var suppression_Btn = document.createElement("button");
  var suppression_img = document.createElement("img");
  var prenomNom = document.createElement("p");
  var bio = document.createElement("p");
  var select = document.createElement("p");
  var image = document.createElement("img");

//AFFECTATON DES ID ET EMPLACEMENTS

droite.setAttribute("id", "Droite");
gauche.setAttribute("id", "Gauche");
prenomNom.setAttribute("id", "PrenomNomJS");
suppression_img.setAttribute("src", "close.jpg");
select.setAttribute("id", "SelectJS");
bio.setAttribute("id", "BioJS");
image.setAttribute("src", "kk.jpg");
divEnvoi.appendChild(gauche);
gauche.appendChild(image);
divEnvoi.appendChild(droite);
divEnvoi.appendChild(suppression_Btn);
divEnvoi.appendChild(suppression_img);
droite.appendChild(prenomNom);
droite.appendChild(suppression_Btn);
droite.appendChild(suppression_img);
suppression_Btn.appendChild(suppression_img);
droite.appendChild(prenomNom);
droite.appendChild(select);
droite.appendChild(bio);

// ECRITURE DU CONTENU

  prenomNom.textContent = personne.prenom + " " + personne.nom;
  select.innerText = personne.select;
  bio.innerText = personne.bio;

// LES STYLES

  suppression_Btn.style.float = "right";
  suppression_img.style.width = "20px";
  suppression_img.style.height = "20px";
  image.style.height = "100px";
  image.style.width = "100px";
  image.style.borderRadius = "100%";
  image.style.marginLeft = "10px";
  gauche.style.backgroundColor = "#f6f6f6";
  gauche.style.marginTop = "5px";
  gauche.style.marginBottom = "5px";
  gauche.style.height = "100px";
  gauche.style.borderBottomLeftRadius = "30px";
  gauche.style.borderTopLeftRadius = "30px";
  gauche.style.width = "20%";
  droite.style.width = "75%";
  droite.style.marginTop = "5px";
  droite.style.marginBottom = "5px";
  droite.style.backgroundColor = "#f6f6f6";
  droite.style.backgroundColor = "#f6f6f6";

  //BOUTON SUPPRESION

  suppression_Btn.addEventListener("click", function () {
    
    droite.remove();
    gauche.remove();
  });
}

//BOUTON D'ENVOI

buttonHTML.addEventListener("click", function () {
  reception.push({
    img: imageHTML.value,
    nom: nomHTML.value,
    prenom: prenomHTML.value,
    select: selectHTML.value,
    bio: bioHTML.value,
  });
  console.log(reception);
  afficher();
});
