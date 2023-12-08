import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type CharacterDetailsProps = {
  id: string;
};

const CharacterDetails: FC<CharacterDetailsProps> = ({ id }) => (
  <Card>
    <CardContent>
      <Typography variant="h4">{id}</Typography>
      {/* Подробная информация о персонаже */}
    </CardContent>
  </Card>
);

export default CharacterDetails;
