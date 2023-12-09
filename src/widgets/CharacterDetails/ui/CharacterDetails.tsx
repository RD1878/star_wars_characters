import React, { FC, useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import useCharactersStore from 'src/app/store/charactersStore';
import { ICharacter } from 'src/entities/CharacterCard';
import { fetchCharacterDetails } from '../lib/helpers';
import { transformCharacterFromBackend } from 'src/shared/lib/helpers';
import CharacterTextField from '../ui/CharacterTextField';
import { useNavigate } from 'react-router-dom';
import './styles.css';

type CharacterDetailsProps = {
  id: string;
};

const CharacterDetails: FC<CharacterDetailsProps> = ({ id }) => {
  const [character, setCharacter] = useState<ICharacter | null>(null);

  const navigate = useNavigate();

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
      setNewCharacter(id, character);
    }
  };

  const handleBackButtonClick = () => {
    navigate(`/`);
  };

  return (
    <>
      <Card>
        <CardContent sx={{ backgroundColor: '#1C1C1C', border: '1px solid #333333' }}>
          <Typography variant="h4" gutterBottom sx={{ color: ' #FFD700' }}>
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
                <Button
                  className={'characterButton'}
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ color: '#2D2D2D', backgroundColor: '#FFD700', mr: 2 }}
                >
                  Save Changes
                </Button>
                <Button
                  className={'characterButton'}
                  variant="contained"
                  color="primary"
                  sx={{ color: '#2D2D2D', backgroundColor: '#FFD700' }}
                  onClick={handleBackButtonClick}
                >
                  Back to list
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <div className="characterImage" />
    </>
  );
};

export default CharacterDetails;
