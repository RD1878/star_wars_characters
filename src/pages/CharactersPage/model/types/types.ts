import { ApiCharacterResponse } from 'src/shared/types/types';

export interface ApiCharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiCharacterResponse[];
}
