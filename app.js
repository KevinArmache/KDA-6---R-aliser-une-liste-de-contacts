//CREATION VARIABLE

var prenomHTML = document.querySelector("#Prenom");
var nomHTML = document.querySelector("#Nom");
var buttonHTML = document.querySelector("#Button");
var BlockEnvoi = document.querySelector("#BlockEnvoi");
var removeimg = document.createElement("img");
// Gauche
var Gauche = document.querySelector("#Gauche");
// Droite
var Droite = document.querySelector("#Droite");
// Droile Select
var selectHTML = document.querySelector("#mySelect");
// Gauche Image
var imageHTML = document.querySelector("#Image");
//Bio
var BioHTML = document.querySelector("#Bio");
var Reception = [];

BlockEnvoi.style.display = "flex";
BlockEnvoi.style.flexWrap = "wrap";
BlockEnvoi.style.justifyContent = "center";

buttonHTML.addEventListener("click", function () {
  Reception.push({
    img: imageHTML.value,
    nom: nomHTML.value,
    prenom: prenomHTML.value,
    select: selectHTML.value,
    bio: BioHTML.value,
  });
  console.log(Reception);
  afficher();
});

function afficher() {
  var Gauche = document.createElement("div");
  var Droite = document.createElement("div");
  Droite.setAttribute("id", "Droite");
  Gauche.setAttribute("id", "Gauche");
  var removeButton = document.createElement("button");
 
  var removeimg = document.createElement("img");
  var personne = Reception[Reception.length - 1];
  var PrenomNom = document.createElement("p");

  PrenomNom.textContent = personne.nom + " " + personne.prenom;
  PrenomNom.setAttribute("id", "PrenomNomJS");
  removeimg.setAttribute("src", "close.jpg");
  removeButton.style.float = "right";
  removeimg.style.width = "20px";
  removeimg.style.height = "20px";
  var select = document.createElement("p");
  select.setAttribute("id", "SelectJS");
  select.innerText = personne.select;
  var bio = document.createElement("p");
  bio.setAttribute("id", "BioJS");
  bio.innerText = personne.bio;

  // emplacement des push

  //gauche
  BlockEnvoi.appendChild(Gauche);
  BlockEnvoi.appendChild(removeButton);
  BlockEnvoi.appendChild(removeimg);
  Droite.appendChild(PrenomNom);
  Droite.appendChild(removeButton);
  Droite.appendChild(removeimg);
  removeButton.appendChild(removeimg);
  var image = document.createElement("img");
  image.setAttribute("src", "kk.jpg");
  image.style.height = "100px";
  image.style.width = "100px";
  image.style.borderRadius = "100%";
  image.style.marginLeft = "10px";

  Gauche.style.backgroundColor = "#f6f6f6";

  Gauche.style.marginTop = "5px";
  Gauche.style.marginBottom = "5px";
  Gauche.style.height = "100px";
  Gauche.style.borderBottomLeftRadius = "30px";
  Gauche.style.borderTopLeftRadius = "30px";
  Gauche.style.width = "20%";
  Gauche.appendChild(image);

  // droite

  BlockEnvoi.appendChild(Droite);
  Droite.appendChild(PrenomNom);
  Droite.appendChild(select);
  Droite.appendChild(bio);

  
  Droite.style.width = "75%";
  Droite.style.marginTop = "5px";
  Droite.style.marginBottom = "5px";
  Droite.style.backgroundColor = "#f6f6f6";
    Droite.style.backgroundColor = "#f6f6f6";


  removeButton.addEventListener("click", function () {
    // e.preventDefault()
    Droite.remove();
    Gauche.remove();
  });
}

// Remove creer focntion a l'interieur de fonction afficher pour remove

// prenomAndNom.innerText = Reception[0].prenom + " " + Reception[0].nom
// select.innerText = (selectHTML).value
// Bio.innerText = (BioHTML).value
// image.setAttribute("src", "kk.jpg")
// image.style.width = "100px"
// image.style.height = "100px"
// image.style.borderRadius = "100%"
