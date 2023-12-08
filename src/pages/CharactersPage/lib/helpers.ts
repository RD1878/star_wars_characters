import { ApiCharacterResponse, ApiCharactersResponse } from '../model/types/types';
import { ICharacter } from 'src/entities/CharacterCard';
import http from 'src/shared/api/httpService';

export const fetchCharacterService = async (
  page = 1,
  searchTerm = ''
): Promise<ApiCharactersResponse> => {
  const params = {
    page,
    ...(searchTerm && { search: searchTerm }), // Добавляем search, только если searchTerm не пустой
  };

  const response = await http.get<ApiCharactersResponse>('people/', { params });
  return response.data;
};

export const transformCharactersFromBackend = (characters: ApiCharacterResponse[]): ICharacter[] =>
  characters.map(({ url, name, birth_year, height, mass }) => {
    const match = url.match(/\/people\/(\d+)\//);

    const id = match ? match[1] : null;

    return {
      id: id ?? null,
      name,
      birthYear: birth_year,
      height,
      mass,
    };
  });
