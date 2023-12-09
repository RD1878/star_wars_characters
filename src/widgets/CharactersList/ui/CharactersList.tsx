import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import { CharacterCard, ICharacter } from 'src/entities/CharacterCard';

interface ICharactersList {
  characters: ICharacter[];
}

const CharactersList: FC<ICharactersList> = ({ characters }) => {
  return (
    <Grid container spacing={2}>
      {characters.map(character => (
        <Grid item xs={6} key={character.id}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharactersList;
