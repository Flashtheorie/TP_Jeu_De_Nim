let nbAllumettes = 16;
let PlayerOne = prompt("Quel est le nom du joueur n°1 ?");
let PlayerTwo = prompt("Quel est le nom du joueur n°2 ?");
let combienDallumettes;
let nomGagnant;
let nombreDeTours = 1;
let error = false;

function verification()
{
	if (combienDallumettes > 3 || combienDallumettes <= 0 || isNaN(combienDallumettes)) 
	{
		alert("Merci d'entrer un chiffre entre 1 et 3.");
		error = true;
	}
	else
	{
		error = false;
	}
}
while(nbAllumettes >= 1)
{
	combienDallumettes = parseInt(prompt("Il reste " + nbAllumettes + " allumettes, " + PlayerOne + ", voulez vous prendre, 1,2 ou 3 allumettes ?"));
	verification();
	if (!error) 
	{
		nbAllumettes = nbAllumettes - combienDallumettes;
		nombreDeTours = nombreDeTours + 1;
	}


	combienDallumettes = parseInt(prompt("Il reste " + nbAllumettes + " allumettes, " + PlayerTwo + ", voulez vous prendre, 1,2 ou 3 allumettes ?"));
	verification();
	if (!error) 
	{
		nbAllumettes = nbAllumettes - combienDallumettes;
		nombreDeTours = nombreDeTours + 1;
	}
	
}

if (nbAllumettes <= 0) 
{
	if (nombreDeTours%2 == 0) 
	{
		nomGagnant = PlayerOne;
	}

	else if (nombreDeTours%2 == 1)
	{
		nomGagnant = PlayerTwo;
	}

	alert("Bravo, " + nomGagnant + ", vous avez gagné en " + nombreDeTours + " tours");
}