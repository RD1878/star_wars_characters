import { useEffect, useState } from 'react';
import { ICharacter } from 'src/entities/CharacterCard';
import {
  fetchCharacterService,
  transformCharactersFromBackend,
} from 'src/pages/CharactersPage/lib/helpers';

export const useCharactersService = (page: number) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('1');
    try {
      fetchCharacterService(page).then(({ results, count }) => {
        setCharacters(transformCharactersFromBackend(results));
        setCount(count);
      });
    } catch (e) {
      console.log(e);
    }
  }, [page]);

  return {
    characters,
    count,
  };
};
