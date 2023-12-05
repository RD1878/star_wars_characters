import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ICharacter } from 'src/entities/CharacterCard';

type CharacterDetailsProps = {
  character: ICharacter;
};

const CharacterDetails: FC<CharacterDetailsProps> = ({ character }) => (
  <Card>
    <CardContent>
      <Typography variant="h4">{character.name}</Typography>
      {/* Подробная информация о персонаже */}
    </CardContent>
  </Card>
);

export default CharacterDetails;
