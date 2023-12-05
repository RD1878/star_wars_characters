import http from 'src/shared/api/httpService';

interface ApiCharacterResponse {
  name: string;
  height: string;
  mass: string;
  // другие поля персонажа
}

interface ApiCharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiCharacterResponse[];
}

export const getCharacters = async (page = 1): Promise<ApiCharactersResponse> => {
  const response = await http.get<ApiCharactersResponse>(`people/?page=${page}`);
  return response.data;
};
