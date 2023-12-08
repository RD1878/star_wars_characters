import { create } from 'zustand';
import { ICharacter } from 'src/entities/CharacterCard';

interface CharacterState {
  changedCharacters: Record<string, ICharacter>;
  setNewCharacter: (id: string, character: ICharacter) => void;
}

const useCharactersStore = create<CharacterState>(set => ({
  changedCharacters: {},
  setNewCharacter: (id, character) =>
    set(state => ({
      changedCharacters: {
        ...state.changedCharacters,
        [id]: character,
      },
    })),
}));

export default useCharactersStore;
