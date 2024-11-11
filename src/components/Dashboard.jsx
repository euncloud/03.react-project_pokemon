import React from 'react'
import {
  DashboardDiv, DashboardTitle, DashboardCardDiv, DashboardBallCard, BallImg,
  DashboardPokemonCard, PokemonImg, PokemonName, PokemonDetailP, ControlBtn
} from '../styles/DexStyle';

function Dashboard({ selectedPokemons, setSelectedPokemons }) {
  const totalCount = 6;
  const selectedCount = selectedPokemons.length; // 배열에 들어있는 실제 포켓몬 개수

  const handleDeletePokemon = (pokemon) => {
    // console.log('selectedPokemons', selectedPokemons);
    const filteredPokemons = selectedPokemons.filter((ele) => ele.id !== pokemon.id);
    setSelectedPokemons(filteredPokemons);
  }

  return (
    <DashboardDiv>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <DashboardCardDiv>
        {selectedPokemons.map((pokemon) => (
          <DashboardPokemonCard key={pokemon.id}>
            <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
            <PokemonName>{pokemon.korean_name}</PokemonName>
            <PokemonDetailP>No. {(pokemon.id).toString().padStart(3, '0')}</PokemonDetailP>
            <ControlBtn onClick={() => handleDeletePokemon(pokemon)}>삭제</ControlBtn>
          </DashboardPokemonCard>
        ))}

        {[...Array(totalCount - selectedCount)].map((_, index) => (
          <DashboardBallCard key={`pokemon-${index}`}>
            <BallImg src="src\assets\ball.png" alt="Ball Image" />          </DashboardBallCard>
        ))}
      </DashboardCardDiv>
    </DashboardDiv>
  )
}

export default Dashboard