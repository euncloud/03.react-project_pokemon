import React from 'react'
import { PokemonDiv } from '../styles/DexStyle';
import PokemonCard from './PokemonCard';


function PokemonList() {
  return (
    <PokemonDiv>
      <PokemonCard/>
    </PokemonDiv>
  )
}

export default PokemonList