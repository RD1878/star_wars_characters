import React, { FC } from 'react';
import { CharacterDetails } from 'src/widgets/CharacterDetails';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const CharacterPage: FC = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <Typography variant="h5" component="div" align={'center'} margin={3}>
        Not found character
      </Typography>
    );
  }

  return <CharacterDetails id={id} />;
};

export default CharacterPage;
