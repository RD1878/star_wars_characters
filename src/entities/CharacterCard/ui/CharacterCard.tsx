import React, { FC } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { ICharacter } from '../model/types/types';
import { getCharacterDataItem } from 'src/shared/lib/helpers';

type CharacterCardProps = {
  character: ICharacter;
};

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const { name, birthYear, mass, height } = character;

  return (
    <Card>
      {/*<CardMedia component="img" height="140" image={character.image} alt={character.name} />*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {getCharacterDataItem(name)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {`Birth year: ${getCharacterDataItem(birthYear)}`}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {`Height: ${getCharacterDataItem(height)} cm`}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {`Mass: ${getCharacterDataItem(mass)} kg`}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CharacterCard;
