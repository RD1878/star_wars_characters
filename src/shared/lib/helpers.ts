import { ICharacter } from 'src/entities/CharacterCard';
import { ApiCharacterResponse } from 'src/shared/types/types';

export const getCharacterDataItem = (item: string) => (item === 'unknown' ? 'no data' : item);

export const transformCharacterFromBackend = ({
  url,
  name,
  birth_year,
  height,
  mass,
}: ApiCharacterResponse) => {
  const match = url.match(/\/people\/(\d+)\//);
  const id = match ? match[1] : null;

  return typeof id === 'string'
    ? {
        [id]: {
          id,
          name,
          birthYear: birth_year,
          height,
          mass,
        },
      }
    : {};
};
