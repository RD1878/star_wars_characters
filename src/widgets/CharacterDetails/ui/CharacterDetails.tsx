import React, { FC, useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import useCharactersStore from 'src/app/store/charactersStore';
import { ICharacter } from 'src/entities/CharacterCard';
import { fetchCharacterDetails } from '../lib/helpers';
import { transformCharacterFromBackend } from 'src/shared/lib/helpers';
import CharacterTextField from '../ui/CharacterTextField';

type CharacterDetailsProps = {
  id: string;
};

const CharacterDetails: FC<CharacterDetailsProps> = ({ id }) => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const { changedCharacters, setNewCharacter } = useCharactersStore();

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

  const handleChange = (prop: keyof ICharacter) => (event: ChangeEvent<HTMLInputElement>) => {
    if (character) {
      setCharacter({ ...character, [prop]: event.target.value });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (character) {
      setNewCharacter(id, character); // Сохраняем изменения в store
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Character Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <CharacterTextField
              label="Name"
              value={character?.name || ''}
              onChange={handleChange('name')}
            />
            <CharacterTextField
              label="Birth Year"
              value={character?.birthYear || ''}
              onChange={handleChange('birthYear')}
            />
            <CharacterTextField
              label="Height"
              value={character?.height || ''}
              onChange={handleChange('height')}
            />
            <CharacterTextField
              label="Mass"
              value={character?.mass || ''}
              onChange={handleChange('mass')}
            />
            <CharacterTextField
              label="Eye Color"
              value={character?.eyeColor || ''}
              onChange={handleChange('eyeColor')}
            />
            <CharacterTextField
              label="Hair Color"
              value={character?.hairColor || ''}
              onChange={handleChange('hairColor')}
            />
            <CharacterTextField
              label="Skin Color"
              value={character?.skinColor || ''}
              onChange={handleChange('skinColor')}
            />
            <CharacterTextField
              label="Gender"
              value={character?.gender || ''}
              onChange={handleChange('gender')}
            />
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default CharacterDetails;
