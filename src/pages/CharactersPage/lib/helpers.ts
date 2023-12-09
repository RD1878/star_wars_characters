import { ApiCharactersResponse } from '../model/types/types';
import { ICharacter } from 'src/entities/CharacterCard';
import http from 'src/shared/api/httpService';
import { ApiCharacterResponse } from 'src/shared/types/types';
import { transformCharacterFromBackend } from 'src/shared/lib/helpers';
import axios, { CancelTokenSource } from 'axios';

export const fetchCharacters = async (
  page = 1,
  searchTerm = '',
  cancelTokenSource: CancelTokenSource
): Promise<ApiCharactersResponse | undefined> => {
  const params = {
    page,
    ...(searchTerm && { search: searchTerm }), // Добавляем search, только если searchTerm не пустой
  };

  try {
    const response = await http.get<ApiCharactersResponse>('people/', {
      params: params,
      cancelToken: cancelTokenSource.token,
    });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(error.message);
    } else {
      throw error;
    }
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
