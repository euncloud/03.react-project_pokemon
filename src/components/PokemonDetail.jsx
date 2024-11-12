import React, { useContext } from 'react'
import { PokemonDetailDiv, PokemonImg, PokemonName, PokemonDetailP, ControlBtn, PokemonDetailBtnDiv } from '../styles/DexStyle';
import { Link, useParams } from 'react-router-dom'
import MOCK_DATA from '../data/MOCK_DATA';
import NotFound from './NotFound';
import { PokemonContext } from '../context/PokemonContext';

function PokemonDetail() {
    const { id } = useParams();
    const pokemon = MOCK_DATA.find((poke) => poke.id === parseInt(id));
    const { selectedPokemons, handleAddPokemon, handleDeletePokemon } = useContext(PokemonContext);

    if (!pokemon) {
        return <NotFound />
    }

    const isPokemonSelected = selectedPokemons.some((p) => p.id === pokemon.id);

    return (
        <PokemonDetailDiv>
            <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} size="400px" />
            <PokemonName color="red" fontSize="30px">{pokemon.korean_name}</PokemonName>
            <PokemonDetailP>No. {(pokemon.id).toString().padStart(3, '0')}</PokemonDetailP>
            <PokemonDetailP fontSize="18px" fontWeight="bold">Type. {pokemon.types.join(", ")}</PokemonDetailP>
            <PokemonDetailP fontSize="16px">{pokemon.description}</PokemonDetailP>

            <PokemonDetailBtnDiv>
                {isPokemonSelected ? (
                    <ControlBtn onClick={() => handleDeletePokemon(pokemon)}>삭제</ControlBtn>
                ) : (
                    <ControlBtn onClick={() => handleAddPokemon(pokemon)}>추가</ControlBtn>)}

                <Link to="/dex">
                    <ControlBtn>뒤로 가기</ControlBtn>
                </Link>
            </PokemonDetailBtnDiv>
        </PokemonDetailDiv>
    )
}

export default PokemonDetail