import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ICharacter } from '../model/types/types';
import { getCharacterDataItem } from 'src/shared/lib/helpers';
import { useNavigate } from 'react-router-dom';
import './styles.css';

interface ICharacterCard {
  character: ICharacter;
}

const CharacterCard: FC<ICharacterCard> = ({ character }) => {
  const { name, birthYear, mass, height } = character;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <Card
      className={'Card'}
      sx={{ backgroundColor: '#2D2D2D', border: '1px solid #333333', cursor: 'pointer' }}
      onClick={handleCardClick}
    >
      <CardContent sx={{ color: '#E5E5E5' }}>
        <Typography sx={{ color: ' #FFD700' }} gutterBottom variant="h5" component="div">
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
