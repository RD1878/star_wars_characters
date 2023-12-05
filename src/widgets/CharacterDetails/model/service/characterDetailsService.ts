import http from 'src/shared/api/httpService';

interface ApiCharacterResponse {
  name: string;
  height: string;
  mass: string;
  // другие поля персонажа
}

export const getCharacter = async (id: number): Promise<ApiCharacterResponse> => {
  const response = await http.get<ApiCharacterResponse>(`people/${id}`);
  return response.data;
};
