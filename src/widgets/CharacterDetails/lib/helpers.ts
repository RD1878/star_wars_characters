import http from 'src/shared/api/httpService';
import { ApiCharacterResponse } from 'src/shared/types/types';

export const fetchCharacterDetails = async (id: string): Promise<ApiCharacterResponse> => {
  const response = await http.get<ApiCharacterResponse>(`people/${id}`);

  return response.data;
};
