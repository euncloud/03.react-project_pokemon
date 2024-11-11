import React from 'react'
import { PokemonCardDiv, PokemonImg, PokemonName, PokemonDetailP, ControlBtn } from '../styles/DexStyle';
import MOCK_DATA from "../data/MOCK_DATA"; // pokemon data
import { useNavigate } from 'react-router-dom';

function PokemonCard({ handleAddPokemon }) {
    const navigate = useNavigate();

    // 포켓몬 카드를 클릭하면 상세 페이지로 이동
    const handleCardClick = (id, e) => {
        e.stopPropagation(); // 이벤트 전파를 막음
        navigate(`/pokemon/${id}`);
    };

    return (
        <>
            {MOCK_DATA.map((pokemon) => (
                <PokemonCardDiv key={pokemon.id} onClick={(e) => handleCardClick(pokemon.id, e)}>
                    <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
                    <PokemonName>{pokemon.korean_name}</PokemonName>
                    <PokemonDetailP>No. {(pokemon.id).toString().padStart(3, '0')}</PokemonDetailP>
                    <ControlBtn onClick={(e) => { e.stopPropagation(); handleAddPokemon(pokemon); }}>추가</ControlBtn>
                </PokemonCardDiv>
            ))
            }
        </>
    )
}

export default PokemonCard