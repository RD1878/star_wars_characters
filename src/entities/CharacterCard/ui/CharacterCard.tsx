import React, { FC } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { ICharacter } from '../model/types/characterType';

type CharacterCardProps = {
  character: ICharacter;
};

const CharacterCard: FC<CharacterCardProps> = ({ character }) => (
  <Card>
    <CardMedia component="img" height="140" image={character.image} alt={character.name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {character.name}
      </Typography>
      {/* Другая информация о персонаже */}
    </CardContent>
  </Card>
);

export default CharacterCard;
