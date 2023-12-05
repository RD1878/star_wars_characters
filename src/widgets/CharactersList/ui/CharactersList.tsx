import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import { CharacterCard, ICharacter } from 'src/entities/CharacterCard';

type CharactersListProps = {
  characters: ICharacter[];
};

const CharactersList: FC<CharactersListProps> = ({ characters }) => (
  <Grid container spacing={2}>
    {characters.map(character => (
      <Grid item xs={12} sm={6} md={4} key={character.id}>
        <CharacterCard character={character} />
      </Grid>
    ))}
  </Grid>
);

export default CharactersList;
