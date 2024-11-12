import React, { useState } from 'react'
import { DexDiv } from '../styles/DexStyle';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

function Dex() {

  return (
    <DexDiv>
      <Dashboard />
      <PokemonList />
    </DexDiv>
  )
}

export default Dex