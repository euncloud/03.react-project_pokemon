import React from 'react'
import { PokemonDiv } from '../styles/DexStyle';
import PokemonCard from './PokemonCard';


function PokemonList({handleAddPokemon}) {
  return (
    <PokemonDiv>
      <PokemonCard handleAddPokemon={handleAddPokemon}/>
    </PokemonDiv>
  )
}

export default PokemonList