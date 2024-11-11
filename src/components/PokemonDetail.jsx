import React from 'react'
import { PokemonDetailDiv, PokemonImg, PokemonName, PokemonDetailP, ControlBtn } from '../styles/DexStyle';
import { Link, useParams } from 'react-router-dom'
import MOCK_DATA from '../data/MOCK_DATA';
import NotFound from './NotFound';

function PokemonDetail() {
    const { id } = useParams();

    const pokemon = MOCK_DATA.find((poke) => poke.id === parseInt(id));

    if (!pokemon) {
        return <NotFound />
    }

    return (
        <PokemonDetailDiv>
            <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} size="400px" />
            <PokemonName color="red" fontSize="30px">{pokemon.korean_name}</PokemonName>
            <PokemonDetailP>No. {(pokemon.id).toString().padStart(3, '0')}</PokemonDetailP>
            <PokemonDetailP fontSize="18px" fontWeight="bold">Type. {pokemon.types.join(", ")}</PokemonDetailP>
            <PokemonDetailP fontSize="16px">{pokemon.description}</PokemonDetailP>
            
            <Link to="/dex">
                <ControlBtn>뒤로 가기</ControlBtn>
            </Link>
        </PokemonDetailDiv>
    )
}

export default PokemonDetail