import { useEffect, useState } from 'react';
import { ICharacter } from 'src/entities/CharacterCard';
import {
  fetchCharacterService,
  transformCharactersFromBackend,
} from 'src/pages/CharactersPage/lib/helpers';

export const useCharactersService = (page: number, searchTerm: string) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      fetchCharacterService(page, searchTerm).then(({ results, count }) => {
        setCharacters(transformCharactersFromBackend(results));
        setCount(count);
      });
    } catch (e) {
      console.error(e);
    }
  }, [page, searchTerm]);

  return {
    characters,
    count,
  };
};
