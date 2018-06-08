var testing = []
let user_i

document.addEventListener("DOMContentLoaded", function() {
const input = document.getElementById("pokemon-search-input");
const pokemonDisplay = document.getElementById("pokemon-container");

console.log(pokemonDisplay);
let result = [];


input.addEventListener('keyup',event =>{
  let userInput = input.value;
  user_i = userInput;
  result = data.pokemons.filter(mon => mon.name.includes(userInput));
  testing = result;
  pokemonDisplay.innerText = "";
  // while(pokemonDisplay.firstChild) {
  //   pokemonDisplay.removeChild(pokemonDisplay.firstChild);
  // }
  if(userInput === ""){ result = [];}
  result.forEach( each => {
    newPoke = document.createElement('div');
    newPoke.className = "pokemon-container";

    newPokeDiv1 = document.createElement('div');
    newPokeDiv1.className = "pokemon-frame";
    newPokeDiv1.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc";

    newPokeDiv2 = document.createElement('div');
    newPokeDiv3 = document.createElement('div');
    newPokeDiv3.style = "width:96px;margin:auto";

    newPokeName = document.createElement('h1');
    newPokeName.innerText = each.name;
    newPokeName.className = "center-text";

    newPokePtag = document.createElement('p');
    newPokePtag.innerText = "flip-card";
    newPokePtag.className = "center-text flip-image";
    newPokePtag.style = "padding:10px;"
    newPokePtag.setAttribute("data-order", each.order);


    newPokeImg = document.createElement('img');
    newPokeImg.src = each.sprites.front;
    newPokeImg.id = `poke-image${each.order}`;

    newPokeDiv3.appendChild(newPokeImg);
    newPokeDiv2.appendChild(newPokeDiv3);
    newPokeDiv1.appendChild(newPokeName);
    newPokeDiv1.appendChild(newPokeDiv2);
    newPokeDiv1.appendChild(newPokePtag);

    newPoke.appendChild(newPokeDiv1);

    pokemonDisplay.appendChild(newPoke);


  });
})


function flip(order) {
  let pokemon = data.pokemons.find(each => each.order === parseInt(order))
  const imgPoke = document.getElementById(`poke-image${order}`);
  if(imgPoke.src === pokemon.sprites.front){
    imgPoke.src = pokemon.sprites.back
  }else {
    imgPoke.src = pokemon.sprites.front
  }

  // debugger;

}


const userClick = document.getElementById("container");

userClick.addEventListener('click', event => {
  console.log(event.target.dataset.order);
  if(event.target.dataset.order){

    flip(event.target.dataset.order);

  }
})
console.log(userClick);


})
