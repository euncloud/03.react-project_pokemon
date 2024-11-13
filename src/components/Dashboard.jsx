import React, { useContext } from 'react'
import {
  DashboardDiv, DashboardTitle, DashboardCardDiv, DashboardBallCard, BallImg,
  DashboardPokemonCard, PokemonImg, PokemonName, PokemonDetailP, ControlBtn
} from '../styles/DexStyle';
import { PokemonContext } from '../context/PokemonContext';

function Dashboard() {
  const totalCount = 6;
  const {selectedPokemons, handleDeletePokemon} = useContext(PokemonContext);
  const selectedCount = selectedPokemons.length; // 배열에 들어있는 실제 포켓몬 개수


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
            <BallImg src="/images/ball.png" alt="Ball Image" />          </DashboardBallCard>
        ))}
      </DashboardCardDiv>
    </DashboardDiv>
  )
}

export default Dashboard