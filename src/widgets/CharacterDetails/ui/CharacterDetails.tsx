import React, { FC, useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import useCharactersStore from 'src/app/store/charactersStore';
import { ICharacter } from 'src/entities/CharacterCard';
import { fetchCharacterDetails } from '../lib/helpers';
import { transformCharacterFromBackend } from 'src/shared/lib/helpers';

type CharacterDetailsProps = {
  id: string;
};

const CharacterDetails: FC<CharacterDetailsProps> = ({ id }) => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const { changedCharacters } = useCharactersStore();

  useEffect(() => {
    if (changedCharacters[id]) {
      setCharacter(changedCharacters[id]);
    } else {
      fetchCharacterDetails(id)
        .then(character => {
          setCharacter(transformCharacterFromBackend(character)[id]);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, [id, changedCharacters]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{character?.name}</Typography>
        {/* Подробная информация о персонаже */}
      </CardContent>
    </Card>
  );
};

export default CharacterDetails;
