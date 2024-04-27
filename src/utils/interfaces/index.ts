interface PokemonSprite {
    front_default: string,
    front_shiny: string,
    back_default: string,
    back_shiny: string
}

interface Pokemon {
    id: number,
    name: string,
    sprites: PokemonSprite
}