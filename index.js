let flag = 0;

function getPokemon(){
    
   
        

        encuentro = Math.floor(Math.random() * 150) + 1;

        let request = new XMLHttpRequest();
        request.open('GET', "http://pokeapi.co/api/v2/pokemon/"+encuentro+"/",true);
      
        request.onreadystatechange = function (aEvt){
            if (request.readyState == 4) {
                if (request.status == 200) {
                    let jsonRecibido = new Array(JSON.parse(request.response));                    
                    cargarPokemonCard(jsonRecibido);             
      
      
                }
                else {
                    alert('No se pudo cargar el pokemon # '+encuentro);
                }
            }
        };
        request.send(null);
    


}

getPokemon();
getPokemon();
getPokemon();

function cargarPokemonCard (pokemon) {

var img = document.getElementById("imagenPokemon" + flag);

img.src = pokemon[0].sprites.front_default;
var name = document.getElementById("nombrePokemon" + flag);
name.textContent = "Nombre: " +  pokemon[0].name;
var name = document.getElementById("idPokemon" + flag);
name.textContent = "Pokemon #" + pokemon[0].id;
var name = document.getElementById("pesoPokemon" + flag);
name.textContent = "Peso: " +  pokemon[0].weight;
var name = document.getElementById("alturaPokemon" + flag);
name.textContent = "Altura: " + pokemon[0].height;

flag++;
}
