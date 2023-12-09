import { useEffect, useState } from 'react';
import { ICharacter } from 'src/entities/CharacterCard';
import { fetchCharacters, transformCharactersFromBackend } from '../../lib/helpers';
import useCharactersStore from 'src/app/store/charactersStore';

export const useCharactersService = (page: number, searchTerm: string) => {
  const [characters, setCharacters] = useState<Record<string, ICharacter>>({});
  const [count, setCount] = useState<number | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const { changedCharacters } = useCharactersStore();

  useEffect(() => {
    setCharacters({});
    count !== null && setCount(0);
    setIsFetching(true);

    fetchCharacters(page, searchTerm)
      .then(res => {
        if (res) {
          const transformedCharacters = transformCharactersFromBackend(res.results);

          Object.entries(changedCharacters).forEach(([id, value]) => {
            if (searchTerm) {
              const haveChangedCharactersSearchTerm = Object.values(value).some(key =>
                key.includes(searchTerm)
              );

              if (haveChangedCharactersSearchTerm) {
                transformedCharacters[id] = value;
              }
            } else {
              if (transformedCharacters[id]) {
                transformedCharacters[id] = value;
              }
            }
          });

          setCharacters(transformedCharacters);
          setCount(res.count);
        }
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        return setIsFetching(false);
      });
  }, [page, searchTerm, changedCharacters]);

  return {
    characters,
    count,
    isFetching,
  };
};
