import React, { useState } from 'react'
import { DexDiv } from '../styles/DexStyle';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

function Dex() {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  // 포켓몬 추가 함수  
  const handleAddPokemon = (pokemon) => {
    // 포켓몬 6개 제한
    if (selectedPokemons.length === 6) { alert('몬스터볼을 모두 사용했습니다.'); return; }

    const existingPokemon = selectedPokemons.find(p => p.id === pokemon.id);
    // 중복 추가 방지
    if (!existingPokemon) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    } else {
      alert('이미 추가한 포켓몬입니다.');
      return;
    }
  }

  return (
    <DexDiv>
      <Dashboard selectedPokemons={selectedPokemons} setSelectedPokemons={setSelectedPokemons} />
      <PokemonList handleAddPokemon={handleAddPokemon} />
    </DexDiv>
  )
}

export default Dex