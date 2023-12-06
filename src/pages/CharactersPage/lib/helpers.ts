import { ApiCharacterResponse, ApiCharactersResponse } from '../model/types/types';
import { ICharacter } from 'src/entities/CharacterCard';
import http from 'src/shared/api/httpService';

export const fetchCharacterService = async (page = 1): Promise<ApiCharactersResponse> => {
  const response = await http.get<ApiCharactersResponse>(`people/?page=${page}`);

  return response.data;
};

export const transformCharactersFromBackend = (characters: ApiCharacterResponse[]): ICharacter[] =>
  characters.map(({ url, name, birth_year, height, mass }) => ({
    id: url,
    name,
    birthYear: birth_year,
    height,
    mass,
  }));
