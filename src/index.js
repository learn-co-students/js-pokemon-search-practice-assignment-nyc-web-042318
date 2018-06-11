document.addEventListener("DOMContentLoaded", function() {
  // const pokemonSearch = document.getElementById("pokemon-search-input")
  // const container = document.getElementsByClassName("pokemon-container")
  // document.addEventListener("keyup", keyInput);
  //
  // function keyInput () {
  //   if (pokemonSearch.value.length > 0) {
  //
  //     var match = data.pokemons.filter(e => e["name"].includes(pokemonSearch.value))
  //
  //     for (let i = 0; i < match.length; i++) {
  //
  //       var para = document.createElement('p')
  //       container[0].appendChild(para)
  //       para.innerHTML = `${match[i]["name"]}`
  //     }
  //   debugger;
  //   }
  //
  // }
  //
  const pokemonObjs = data.pokemons
  const searchInputField = document.getElementById('pokemon-search-input')
  const pokemonFrame = document.getElementById('pokemon-container')

  pokemonFrame.addEventListener('click', function(event){
    if (event.target.dataset.action=="flip-image") {
      flipImage(event.target.dataset.pokename)
    }
  })

  function flipImage(name) {
    const imgTag = document.getElementById(`pokemon-image-${name}`)
    const imageDirection = imgTag.dataset.currentSprite == 'front' ? 'back' : 'front'
    const imgSprite = pokemonObjs.find(p => p.name == name ).sprites[imageDirection]
    imgTag.src = imgSprite
    imgTag.dataset.currentSprite = imageDirection
    // console.log(imgSprite)
    // console.log(imageDirection)
    // console.log(imgTag)

  }

  searchInputField.addEventListener('keyup', function(event) {
    pokemonFrame.innerHTML = ''
    const searchTerm = searchInputField.value
    if (searchTerm) {
      const searchResults = pokemonObjs.filter(p => p.name.includes(searchTerm) )
      searchResults.forEach( pokemonObj => pokemonFrame.innerHTML += generatePokemon(pokemonObj) )
      // console.log(searchResults)
    }

  })
    // console.log(searchResults)
    // searchResults.forEach(pokemonObj => console.log(generatePokemon(pokemonObj)))
    console.log(searchInputField)
    function generatePokemon(poke) {
        return `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${poke.name}</h1>
            <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
                <img data-current-sprite='front'  id='pokemon-image-${poke.name}' src="${poke.sprites.front}">
            </div>
            </div>
                <p style="padding:10px;" class="center-text flip-image" data-current-sprite='front' data-pokename="${poke.name}" data-action="flip-image">flip card</p>
            </div>
        </div>
        `
    }
})
