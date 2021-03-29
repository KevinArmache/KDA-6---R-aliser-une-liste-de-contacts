var nombre1 = 78;
var nombre2 = 67;
var somme = sommeNombres(nombre1, nombre2);
console.log(nombre1 + " + " + nombre2 + " = " + somme);
var Longueur = 43;
var largeur = 25;
var perimetre = sommeNombres(Longueur, largeur) * 2;
console.log("Perimetre = " + perimetre);

//

var marcos = {
    nom: "Musafiri",
    prenom: "Marcos",
    age: 21,
    direBonjour: function () {
      console.log(
        "Bonjour " +
          this.prenom +
          " " +
          this.nom +
          " vous avez " +
          this.age +
          " ans"
      );
    },
  };
  marcos.direBonjour();
  marcos.prenom = "Marmus";
  marcos.direBonjour();


  //

<input placeholder="nom" id="nom" />
<input placeholder="prenom" id="prenom" />
<button id="btn">Fina</button>
var nom=document.getElementById("nom");
var prenom=document.querySelector("#prenom");
var bouton=document.querySelector("#btn");
var personnes=[]
bouton.addEventListener("click",function(){
  personnes.push({nom:nom.value,prenom:prenom.value});
  console.log(personnes);
})