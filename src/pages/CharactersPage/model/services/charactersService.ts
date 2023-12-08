import { useEffect, useState } from 'react';
import { ICharacter } from 'src/entities/CharacterCard';
import { fetchCharacters, transformCharactersFromBackend } from '../../lib/helpers';
import useCharactersStore from 'src/app/store/charactersStore';

export const useCharactersService = (page: number, searchTerm: string) => {
  const [characters, setCharacters] = useState<Record<string, ICharacter>>({});
  const [count, setCount] = useState(0);

  const { changedCharacters } = useCharactersStore();
  console.log('changedCharacters', changedCharacters);

  useEffect(() => {
    try {
      fetchCharacters(page, searchTerm).then(({ results, count }) => {
        const transformedCharacters = transformCharactersFromBackend(results);
        Object.entries(changedCharacters).forEach(([id, value]) => {
          transformedCharacters[id] = value;
        });

        setCharacters(transformedCharacters);
        setCount(count);
      });
    } catch (e) {
      console.error(e);
    }
  }, [page, searchTerm, changedCharacters]);

  return {
    characters,
    count,
  };
};
