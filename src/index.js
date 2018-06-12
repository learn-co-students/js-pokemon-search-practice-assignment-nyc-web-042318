document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('pokemon-search-form')
  const input = document.getElementById('pokemon-search-input')
  const pokeContainer = document.getElementById('pokemon-container')
  let allP = []

  class Pokemon {
    constructor(height, weight, order, name, abilities, moves, stats, types, sprites) {
      this.height = height
      this.weight = weight
      this.order = order
      this.name = name
      this.abilities = abilities
      this.moves = moves
      this.stats = stats
      this.types = types
      this.sprites = sprites
    }

    render() {
      return `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img id="pokemon-img-${this.name}" data-current-sprite="front"  src="${this.sprites.front}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
        </div>
      </div>`
    }

    flipImage (name) {
      const imageTag = document.getElementById(`pokemon-img-${this.name}`)
      const imgDirection = imageTag.dataset.currentSprite == 'front' ? 'back' : 'front'
      imageTag.dataset.currentSprite = imgDirection
      const imgSprite = this.sprites[imgDirection]
      imageTag.src = imgSprite
    }
  }

  form.addEventListener('keyup', function(e) {
    pokeContainer.innerHTML = ''
    let userInput = input.value
    if (userInput) {
      let filteredPokemons = pokemons.pokemons.filter(function(p){
        return p.name.includes(userInput)
      })

      allP = []
      filteredPokemons.forEach(function(poke) {
        pokeHeight = poke['height']
        pokeWeight = poke['weight']
        pokeOrder = poke['order']
        pokeName = poke['name']
        pokeAbilities = poke['abilities']
        pokeMoves = poke['moves']
        pokeStats = poke['stats']
        pokeTypes = poke['types']
        pokeSprites = poke['sprites']

        let p = new Pokemon(pokeHeight, pokeWeight, pokeOrder, pokeName, pokeAbilities, pokeMoves, pokeStats, pokeTypes, pokeSprites)
        allP.push(p)
        let renderedP = p.render()
        pokeContainer.innerHTML += renderedP
      })
    }
  })

  pokeContainer.addEventListener('click', function(event) {
    if (event.target.dataset.action == "flip-image") {
      const targetP = allP.find(function(p) {
        return event.target.dataset.pokename === p.name
      })

      targetP.flipImage(event.target.dataset.pokename)
    }
  })
})
