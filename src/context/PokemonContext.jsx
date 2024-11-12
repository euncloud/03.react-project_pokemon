import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  // 포켓몬 추가 함수  
  const handleAddPokemon = (pokemon) => {
    // 포켓몬 6개 제한
    if (selectedPokemons.length === 6) { toast.error('몬스터볼을 모두 사용했습니다.', {
      autoClose: 2000,
    }); return; }

    const existingPokemon = selectedPokemons.find(p => p.id === pokemon.id);
    // 중복 추가 방지
    if (!existingPokemon) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
      toast.success(`${pokemon.korean_name} 포켓몬을 추가했습니다!`, {
        autoClose: 1000,
      });
    } else {
      toast.warn('이미 추가한 포켓몬입니다.', {
        autoClose: 1500,
      });
      return;
    }
  }

  const handleDeletePokemon = (pokemon) => {
    // console.log('selectedPokemons', selectedPokemons);
    const filteredPokemons = selectedPokemons.filter((ele) => ele.id !== pokemon.id);
    setSelectedPokemons(filteredPokemons);
    toast.success(`${pokemon.korean_name} 포켓몬을 삭제했습니다!`, {
      autoClose: 1000,
    });
  }

  return (
    <PokemonContext.Provider value={{ selectedPokemons, setSelectedPokemons, handleAddPokemon, handleDeletePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};