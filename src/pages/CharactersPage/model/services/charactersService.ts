import { useEffect, useState } from 'react';
import { ICharacter } from 'src/entities/CharacterCard';
import { fetchCharacters, transformCharactersFromBackend } from '../../lib/helpers';
import useCharactersStore from 'src/app/store/charactersStore';
import axios, { CancelTokenSource } from 'axios';

export const useCharactersService = (page: number, searchTerm: string) => {
  const [characters, setCharacters] = useState<Record<string, ICharacter>>({});
  const [count, setCount] = useState<number | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [cancelToken, setCancelToken] = useState(axios.CancelToken.source());

  const { changedCharacters } = useCharactersStore();

  useEffect(() => {
    setCharacters({});
    count !== null && setCount(0);
    setIsFetching(true);

    if (cancelToken) {
      cancelToken.cancel();
    }

    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    setCancelToken(cancelTokenSource);

    fetchCharacters(page, searchTerm, cancelTokenSource)
      .then(res => {
        if (res) {
          const transformedCharacters = transformCharactersFromBackend(res.results);
          Object.entries(changedCharacters).forEach(([id, value]) => {
            transformedCharacters[id] = value;
          });

          setCharacters(transformedCharacters);
          setCount(res.count);
        }
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => setIsFetching(false));

    return () => cancelTokenSource.cancel();
  }, [page, searchTerm, changedCharacters]);

  return {
    characters,
    count,
    isFetching,
  };
};
