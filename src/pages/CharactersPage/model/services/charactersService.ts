import { useEffect, useState } from 'react';
import { fetchCharacters, transformCharactersFromBackend } from '../../lib/helpers';
import useCharactersStore from 'src/shared/store/charactersStore';
import { ICharacter } from 'src/shared/types/types';

export const useCharactersService = (page: number, searchTerm: string) => {
  const [characters, setCharacters] = useState<Record<string, ICharacter>>({});
  const [count, setCount] = useState<number>(0);
  const [isFetching, setIsFetching] = useState(false);

  const { changedCharacters } = useCharactersStore();

  useEffect(() => {
    setIsFetching(true);

    fetchCharacters(page, searchTerm)
      .then(res => {
        if (res) {
          const transformedCharacters = transformCharactersFromBackend(res.results);

          Object.entries(changedCharacters).forEach(([id, value]) => {
            if (searchTerm) {
              const haveChangedCharactersSearchTerm = Object.values(value).some(key =>
                key.toLowerCase().includes(searchTerm.toLowerCase())
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
