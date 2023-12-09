import { ApiCharactersResponse } from '../model/types/types';
import { ICharacter } from 'src/entities/CharacterCard';
import http from 'src/shared/api/httpService';
import { ApiCharacterResponse } from 'src/shared/types/types';
import { transformCharacterFromBackend } from 'src/shared/lib/helpers';

export const fetchCharacters = async (
  page = 1,
  searchTerm = ''
): Promise<ApiCharactersResponse | undefined> => {
  const params = {
    page,
    ...(searchTerm && { search: searchTerm }), // Добавляем search, только если searchTerm не пустой
  };

  try {
    const response = await http.get<ApiCharactersResponse>('people/', {
      params: params,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const transformCharactersFromBackend = (
  characters: ApiCharacterResponse[]
): Record<string, ICharacter> =>
  characters.reduce(
    (acc, character) => ({
      ...acc,
      ...transformCharacterFromBackend(character),
    }),
    {}
  );
