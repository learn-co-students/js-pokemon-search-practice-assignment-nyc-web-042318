// document.addEventListener("DOMContentLoaded", function() {
//   const pokeSearch = document.getElementById('pokemon-search-input')
//   const whereTheyGo = document.querySelector('#pokemon-container')
//
//   function findMePokemons() {
//     var list = pokemons['pokemons'].filter(pokemon => {
//       return pokemon.name.includes(pokeSearch.value)
//     })
//
//     list.forEach(function(pokemon) {
//       const poke = document.createElement('div')
//       poke.innerHTML = `<div class="pokemon-container center-text flip-image">${pokemon.name}</div>`
//       whereTheyGo.appendChild(poke)
//     })
//   }
//
//   pokeSearch.addEventListener('keydown', findMePokemons)
//
// })

document.addEventListener("DOMContentLoaded", function() {
  const pokemonObjs = data.pokemons
  const pokesearch = document.getElementById('pokemon-search-input')
  const whereTheyGo = document.getElementById('pokemon-container')

  whereTheyGo.addEventListener('click', function (event){
    if (event.target.dataset.action == "flip-image"){
      flipImage(event.target.dataset.pokename)
    }
  })

  function flipImage(name) {
    const imgTag = document.getElementById(`pokemon-image-${name}`)
    const imageDirection = imgTag.dataset.currentSprite == 'front' ? 'back' : 'front'
    const imgSprite = pokemonObjs.find(p => p.name == name).sprites[imageDirection]
    imgTag.src = imgSprite
    imgTag.dataset.currentSprite = imageDirection
  }

  function generatePokemon (poke) {
    //return HTML here
    return `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${poke.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-current-sprite='front' id='pokemon-image-${poke.name}' src='${poke.sprites.front}'>
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${poke.name}" data-action="flip-image">flip card</p>
        </div>
      </div>`
  }

  function findMePokemons() {
    whereTheyGo.innerHTML = ''
    const searchTerm = pokesearch.value
    if (searchTerm){
      var list = pokemonObjs.filter(pokemon => {
        return pokemon.name.includes(searchTerm)
      })

      list.forEach(function(pokemonObj) {
        whereTheyGo.innerHTML += generatePokemon(pokemonObj)
      })
    }
      // whereTheyGo.appendChild(poke)
  }

  pokesearch.addEventListener('keyup', findMePokemons)

})
