import { ApiCharacterResponse, ICharacter } from 'src/shared/types/types';

export const getCharacterDataItem = (item: string) => (item === 'unknown' ? 'no data' : item);

export const transformCharacterFromBackend = ({
  url,
  name,
  birth_year,
  height,
  mass,
  eye_color,
  hair_color,
  skin_color,
  gender,
}: ApiCharacterResponse): Record<string, ICharacter> => {
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
          eyeColor: eye_color,
          hairColor: hair_color,
          skinColor: skin_color,
          gender,
        },
      }
    : {};
};
